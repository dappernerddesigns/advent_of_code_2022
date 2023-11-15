const SignalBooster = require("../challenges/dayTen");
const testInput = require("../inputs/dayTenTest");

describe("Signal Booster", () => {
  describe("Cycle counter", () => {
    test("When given a command of noop, cycle counter increases by 1", () => {
      const boost = new SignalBooster();
      boost.executeProgramme("noop");
      expect(boost.cycles).toBe(1);
    });
    test("When given a command of addx, cycle counter increases by 1", () => {
      const boost = new SignalBooster();
      boost.executeProgramme("addx 3");
      expect(boost.cycles).toBe(2);
    });
  });
  describe("Register builder", () => {
    test("When given a command of addx 3 increases the x register", () => {
      const boost = new SignalBooster();
      boost.executeProgramme("addx 3");
      expect(boost.x).toBe(4);
    });
  });
  describe("Run cycles", () => {
    test("Run cycles takes an array of instructions and uses the executeProgramme method to execute each instruction", () => {
      const boost = new SignalBooster();
      const input = `noop\naddx 3\naddx -5`;
      boost.runCycles(input);
      expect(boost.cycles).toBe(5);
      expect(boost.x).toBe(-1);
    });
  });
  describe("Cycle tracker", () => {
    test("When given a longer list of cycles, stores the x register at the 20th, 60th, 100th, 140th, 180th and 220th cycle", () => {
      const expected = [21, 19, 18, 21, 16, 18];
      const boost = new SignalBooster();
      boost.runCycles(testInput);
      expect(boost.cycleTracker).toEqual(expected);
    });
    test("When given a longer list of cycles stores the product of the cycle and x value at the 20th, 60th, 100th, 140th, 180th and 220th cycle", () => {
      const expected = [420, 1140, 1800, 2940, 2880, 3960];
      const boost = new SignalBooster();
      boost.runCycles(testInput);
      expect(boost.signalStrengths).toEqual(expected);
    });
  });
});

describe("Signal Booster Part 2", () => {
  test("Sprite mover updates spritePositions after each addx command is complete", () => {
    const boost = new SignalBooster();
    boost.runCycles("addx 15");

    expect(boost.spritePositions).toEqual([
      [0, 1, 2],
      [0, 1, 2],
      [15, 16, 17],
    ]);
  });
  test("Sprite mover updates the spritePositions objects with all sprite moves", () => {
    const boost = new SignalBooster();
    boost.runCycles(`addx 15\naddx -11\naddx 6\naddx -3\naddx 5`);
    expect(boost.spritePositions).toEqual([
      [0, 1, 2],
      [0, 1, 2],
      [15, 16, 17],
      [15, 16, 17],
      [4, 5, 6],
      [4, 5, 6],
      [10, 11, 12],
      [10, 11, 12],
      [7, 8, 9],
      [7, 8, 9],
      [12, 13, 14],
    ]);
  });
});
