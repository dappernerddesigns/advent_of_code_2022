const {
  craneGames,
  findStacks,
  findInstructions,
} = require("../challenges/dayFive");

describe("Stack Converter", () => {
  test("Takes a string and returns the stacks array", () => {
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
describe("Instructions converter", () => {
  test("Takes a string and returns an instruction array of objects", () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const expected = [
      { move: 1, from: 2, to: 1 },
      { move: 3, from: 1, to: 3 },

      { move: 2, from: 2, to: 1 },

      { move: 1, from: 1, to: 2 },
    ];
    expect(findInstructions(input)).toEqual(expected);
  });
});
describe("Crane Games", () => {
  test("Moving one crate from column two to column 1 creates correct array", () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const stacks = findStacks(input);
    expect(craneGames(stacks, [{ move: 1, from: 2, to: 1 }])).toBe("DCP");
  });
  test("Following all instructions, final position is CMZ", () => {
    const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    const stacks = findStacks(input);
    const instructions = findInstructions(input);
    expect(craneGames(stacks, instructions)).toBe("CMZ");
  });
});
