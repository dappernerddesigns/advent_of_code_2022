const {
  craneGames,
  findStacks,
  findInstructions,
} = require("../challenges/dayFive");

describe("Input Converter", () => {
  test("Takes a string and returns an array containing the stacks and instructions array", () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

    const expected = [["Z", "N"], ["M", "C", "D"], ["P"]];
    expect(findStacks(input)).toEqual(expected);
  });
});
