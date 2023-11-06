const fs = require("fs");
const findStacks = (inputStr) => {
  const initialBreak = inputStr.split(/^\s*$/m);
  const rawStacks = initialBreak[0].trimEnd();
  const stackLayers = rawStacks.split("\n");
  const columns = stackLayers.pop().replace(/\s/g, "*");
  const colCount = columns.replace(/\*/g, "").length;

  const finalStackArray = [];
  for (let i = 0; i < colCount; i++) {
    finalStackArray.push([]);
  }

  stackLayers.forEach((stack) => {
    const layer = stack.replace(/\[|\]/g, " ");

    for (let i = 0; i < layer.length; i++) {
      const columnIndex = Number(columns[i] - 1);
      const col = layer[i];
      if (col !== " " && columns[i] !== " ") {
        finalStackArray[columnIndex].unshift(col);
      }
    }
  });
  return finalStackArray;
};

const findInstructions = (inputStr) => {
  const initialBreak = inputStr.split(/^\s*$/m);
  const rawInstructions = initialBreak[1].trimStart();
  const instrArray = rawInstructions.split("\n");

  const instrObjArr = instrArray.map((input) => {
    const instrObj = {};
    const moves = input.split(" ");
    instrObj[moves[0]] = Number(moves[1]);
    instrObj[moves[2]] = Number(moves[3]);
    instrObj[moves[4]] = Number(moves[5]);
    return instrObj;
  });
  return instrObjArr;
};

const craneGames = (stacks, instructions) => {
  instructions.forEach(({ move, from, to }) => {
    const currColumn = from - 1;
    const target = to - 1;
    const payload = stacks[currColumn].splice(-move, move); // use .reverse() for part one, remove it for part two.

    for (const crate in payload) {
      stacks[target].push(payload[crate]);
    }
  });
  let topCrates = "";
  stacks.forEach((crate) => {
    topCrates += crate[crate.length - 1];
  });
  return topCrates;
};

const getData = () => {
  return fs.readFileSync("./inputs/dayFive.txt", "utf8");
};

const rawInput = getData();
const stacks = findStacks(rawInput);
const steps = findInstructions(rawInput);
const result = craneGames(stacks, steps);
console.log(result);
module.exports = { findStacks, craneGames, findInstructions };
