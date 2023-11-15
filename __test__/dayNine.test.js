const { TailTracker, SnakeTracker } = require("../challenges/dayNine");

describe("Tail Tracker", () => {
  describe("Input conversion", () => {
    test("Converts a string input to an object", () => {
      const rope = new TailTracker();
      expect(rope.inputConverter("R 1")).toEqual({ direction: "R", steps: 1 });
    });
  });
  describe("Head movement", () => {
    test("When head moves only one spot horizontally from tail, tail does not move", () => {
      const rope = new TailTracker();
      rope.moveHead("R 1");
      expect(rope.head.x).toBe(1);
      expect(rope.head.y).toBe(0);
      expect(rope.tail.x).toBe(0);
      expect(rope.tail.y).toBe(0);
    });
    test("When head moves only one spot vertically from tail, tail does not move", () => {
      const rope = new TailTracker();
      rope.moveHead("U 1");
      expect(rope.head.x).toBe(0);
      expect(rope.head.y).toBe(1);
      expect(rope.tail.x).toBe(0);
      expect(rope.tail.y).toBe(0);
    });
    test("When given several steps, head position is recorded correctly", () => {
      const rope = new TailTracker();
      rope.moveHead(`R 4
U 4
L 3`);
      expect(rope.head).toEqual({ x: 1, y: 4 });
    });
  });
  describe("Tail movement", () => {
    test("If head moves horizontally two steps away, tail moves one behind", () => {
      const rope = new TailTracker();
      rope.moveHead("R 3");
      expect(rope.head.x).toBe(3);
      expect(rope.tail.x).toBe(2);
    });
    test("Visited spots array contains visited positions", () => {
      const rope = new TailTracker();
      rope.moveHead("R 3");
      expect(rope.visitedSpots).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
      ]);
    });
    test("If head moves vertically two steps away, tail moves one behind", () => {
      const rope = new TailTracker();
      rope.moveHead("U 3");
      expect(rope.head.y).toBe(3);
      expect(rope.tail.y).toBe(2);
    });
    test("When given several steps, tail position is recorded correctly", () => {
      const rope = new TailTracker();
      rope.moveHead(`R 4
U 4
L 3`);
      expect(rope.head).toEqual({ x: 1, y: 4 });
      expect(rope.tail).toEqual({ x: 2, y: 4 });
    });
    test("When given several steps tail position is recorded in visited steps", () => {
      const rope = new TailTracker();
      const input = `R 4
U 4
L 3
D 1`;
      rope.moveHead(input);
      const expected = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
        { x: 3, y: 4 },
        { x: 2, y: 4 },
      ];
      expect(rope.visitedSpots).toEqual(expected);
    });
  });
  describe("Unique locations", () => {
    test("countUnique visits returns a total count for each space visited at least once", () => {
      const input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
      const rope = new TailTracker();
      rope.moveHead(input);

      expect(rope.countUniqueVisits()).toBe(13);
    });
  });
});

describe("Snake Tracker", () => {
  test("When given a single direction, snake position appears correctly", () => {
    const snake = new SnakeTracker();
    snake.move("R 5");
    const snakePos = [
      { x: 5, y: 0 },
      { x: 4, y: 0 },
      { x: 3, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    expect(snake.snakePositions).toEqual(snakePos);
  });
  test.skip("When given concurrent directions keeps snake connected", () => {
    const snake = new SnakeTracker();
    snake.move(`R 5
    U 8`);
    const snakePos = [
      { x: 5, y: 8 },
      { x: 5, y: 7 },
      { x: 5, y: 6 },
      { x: 5, y: 5 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 3 },
      { x: 2, y: 2 },
      { x: 1, y: 1 },
      { x: 0, y: 0 },
    ];
    expect(snake.snakePositions).toEqual(snakePos);
  });
});
