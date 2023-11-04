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

const topThree = (inputStr) => {
  const elves = inputStr.split("\n\n");
  const elvesBackPacks = elves.map((elf) => {
    const bag = elf.split("\n");
    return bag.map((calories) => {
      return Number(calories);
    });
  });
  const backPackCount = elvesBackPacks
    .map((elf) => {
      let totalSnacks = 0;
      elf.forEach((snack) => {
        totalSnacks += snack;
      });

      return totalSnacks;
    })
    .sort((a, b) => {
      return a - b;
    });
  const topValue = backPackCount[backPackCount.length - 1];
  const secondValue = backPackCount[backPackCount.length - 2];
  const thirdValue = backPackCount[backPackCount.length - 3];
  return topValue + secondValue + thirdValue;
};
const input = getData();
console.log(topThree(input));

module.exports = { calorieCounter };
