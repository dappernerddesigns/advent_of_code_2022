const {
  monkeyOne,
  monkeyTwo,
  monkeyThree,
  monkeyZero,
} = require("../inputs/dayElevenTestInput");

const { keepAway, monkeyBusiness } = require("../challenges/dayEleven");

describe("Keep Away", () => {
  test("Correctly sends increased item to another monkey to inspect", () => {
    keepAway(monkeyZero, monkeyOne, monkeyTwo, monkeyThree);

    expect(monkeyTwo.items).toEqual([]);
    expect(monkeyThree.items).toEqual([]);

    expect(monkeyZero.items).toEqual([20, 23, 27, 26]);
    expect(monkeyOne.items).toEqual([2080, 25, 167, 207, 401, 1046]);
  });
});

describe("Monkey Business", () => {
  test("Function runs 2 cycles of the keep away method", () => {
    monkeyBusiness(monkeyZero, monkeyOne, monkeyTwo, monkeyThree);
    expect(monkeyZero.items).toEqual([695, 10, 71, 135, 350]);
    expect(monkeyOne.items).toEqual([43, 49, 58, 55, 362]);
    expect(monkeyTwo.items).toEqual([]);
    expect(monkeyThree.items).toEqual([]);
  });
});
