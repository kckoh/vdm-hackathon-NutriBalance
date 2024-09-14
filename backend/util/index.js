//ES6 새로운 문법 일반적인 fs.readFile이면 콜백 함수를 반환해야 하고 promise를 반환하지 않기 때문에 에러를 발생, 그렇기 때문에 promises로 받아와야함
const fs = require("fs").promises;

async function getNutrientsNames() {
  try {
    const data = await fs.readFile("./lib/nutrientsLists.json", "utf-8");

    const nutrientsList = JSON.parse(data);
    const name = nutrientsList.supplements.map((nutrinet) => {
      return nutrinet.name;
    });

    return name;
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
}

module.exports = { getNutrientsNames };
