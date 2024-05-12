from typing import Union

from fastapi import FastAPI, File, UploadFile, Body,Request
from pydantic import BaseModel
import easyocr
from fuzzywuzzy import process
from typing import Dict
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()  
llm = ChatOpenAI()

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm = ChatOpenAI()
prompt = ChatPromptTemplate.from_messages([
    ("system", """
    i have given you the nutritions, 
    please provide if the given nutritions are enough for today. If not, please suggest which additional nutritions are needed.
     """),
    ("user", "{input}")
])
output_parser = StrOutputParser()

chain = prompt | llm | output_parser


app = FastAPI()
class Nutrition(BaseModel):
    nutrition: Dict
reader = easyocr.Reader(['en'])
# find our which one need to be standardized

essential_nutrients = [
    # Vitmains
    'Vitamin C', 'Vitamin A' 'Vitamin D', 'Vitamin E', 'Vitamin K', 
    'Thiamin', 'Riboflavin', 'Niacin', 'Vitamin B6', 'Folate', 'Vitamin B12', 
    'Biotin', 'Pantothenic Acid', 'fat',
    # Minerals
    'Calcium', 'Iron', 'Magnesium', 'Zinc', 'Selenium', 'Copper', 'Manganese', 'Chromium',
    'Molybdenum', 'Chloride', 'Chlorine', 'Potassium', 'Iodine', 'Phosphorus','Fluoride',
    # Amino Acids
    'Glutamine', 'Arginine', 'Lysine', 'Leucine',
    # Herbs and Botanicals
    'Echinacea', 'Ginkgo biloba', 'Ginseng', 'Garlic',
]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/parse/image")
async def parse_image(image: UploadFile = File(...)):
    # Read the uploaded image file
    contents = await image.read()
    ocr_result = reader.readtext(contents, detail=0, width_ths=0.7)
    processed_results = process_ocr_results(ocr_result)
    
    # print(result)
    if len(processed_results) < 1:
        return {"message": "No nutrients detected"}
    return {'nutritions':processed_results}


@app.post("/api/correct/nutrition")
async def correct_nutrition(nutrition:Nutrition):
    # Send it to chatgpt
    print(f"Nutrition input: {nutrition}")
    chatgpt_summary = chain.invoke({"input": nutrition})
    
    return {'nutritions': chatgpt_summary}


def process_ocr_results(ocr_result):
    res = {}

    for index, item in enumerate(ocr_result):
        best_match = process.extractOne(item, essential_nutrients)

        if best_match[1] >= 80:
            print(f"Original: {item}, Corrected: {best_match[0]}, Score: {best_match[1]}")
            res[best_match[0]] = ocr_result[index+1]

    return res
