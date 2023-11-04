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

const findInstructions = (inputStr) => {};

const craneGames = (stacks, instructions) => {};

module.exports = { findStacks, craneGames, findInstructions };
