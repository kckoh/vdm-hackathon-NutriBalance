const express = require("express");
const router = express.Router();

const OpenAI = require("openai");
const env = require("dotenv");

env.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.sendMoreInfo = router.post("/send", async (req, res) => {
  const nutrientsLists = req.body.data;
  console.log("hellllllllllllo");
  try {
    // for (let nutrient of nutrientsLists) {
    //   console.log("nutrient", nutrient.Nutrition);
    // }

    let responses = [];
    for (let nutrient of nutrientsLists) {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          {
            role: "user",
            content: `Why is this ${nutrient.Nutrition} important, and what are its benefits? Please answer theses questions within 1 sentence`,
          },
        ],
        model: "gpt-3.5-turbo",
        format: "json",
      });

      responses.push(completion.choices[0].message.content);
    }
    console.log("responses", responses);
    res.json({ success: true, data: responses });
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
