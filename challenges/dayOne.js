// What are we making today?
const fs = require("fs");

const getData = () => {
  const data = fs.readFileSync("./inputs/dayOne.txt", "utf8");
  return data;
};

const calorieCounter = (inputStr) => {
  const elves = inputStr.split("\n\n");
  const elvesBackPacks = elves.map((elf) => {
    const bag = elf.split("\n");
    return bag.map((calories) => {
      return Number(calories);
    });
  });

  let maxTotalCalories = 0;
  elvesBackPacks.forEach((backPack) => {
    let total = 0;
    backPack.forEach((snack) => {
      total += snack;
    });
    if (total > maxTotalCalories) {
      maxTotalCalories = total;
    }
  });
  return maxTotalCalories;
};

const input = getData();
console.log(calorieCounter(input));

module.exports = { calorieCounter };
