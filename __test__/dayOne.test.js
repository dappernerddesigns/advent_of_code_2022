const { calorieCounter } = require("../challenges/dayOne");

describe("Calorie Counter", () => {
  test("Given a string with no empty lines, totals up the calories", () => {
    const input = `100\n200\n100`;
    expect(calorieCounter(input)).toBe(400);
  });
  test("Given a string with empty lines, finds the max calorie count", () => {
    const input = `100\n200\n\n100`;
    expect(calorieCounter(input)).toBe(300);
  });
});
