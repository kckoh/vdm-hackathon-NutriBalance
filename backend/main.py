from typing import Union

from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel

app = FastAPI()

# class Image(BaseModel):
#     name: str
#     price: float


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/api/parse/image")
async def parse_image(image: UploadFile = File(...)):
    # Read the uploaded image file
    contents = await image.read()
    print(f"Image {image} is {len(contents)} bytes")
    
    return {"message": "Image received and processed"}
