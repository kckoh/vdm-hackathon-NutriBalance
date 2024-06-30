const OpenAI = require("openai");
const env = require("dotenv");

env.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const nutrient = [];

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "user",
        content: `Why is this ${nutrient} important, and what are its benefits?`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  console.log(completion.choices[0]);
}

let message = completion.choices[0].message.content;

main();
