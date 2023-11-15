const fs = require("fs");

class TailTracker {
  constructor() {
    this.head = { x: 0, y: 0 };
    this.tail = { x: 0, y: 0 };
    this.visitedSpots = [{ ...this.tail }];
  }

  static DIRECTIONS = {
    R: { axis: "x", step: 1 },
    U: { axis: "y", step: 1 },
    D: { axis: "y", step: -1 },
    L: { axis: "x", step: -1 },
  };

  inputConverter(row) {
    const [direction, stepCountStr] = row.split(" ");
    const steps = Number(stepCountStr);
    return { direction, steps };
  }

  moveHead(input) {
    const instructions = input
      .split("\n")
      .map((row) => this.inputConverter(row));

    instructions.forEach((row) => {
      const { direction, steps } = row;

      for (let i = 0; i < steps; i++) {
        switch (direction) {
          case "R":
            this.head.x++;
            if (this.head.x - this.tail.x > 1) {
              this.tail.x++;
              this.tail.y = this.head.y;
              this.updateSpots();
            }
            break;
          case "U":
            this.head.y++;
            if (this.head.y - this.tail.y > 1) {
              this.tail.y++;
              this.tail.x = this.head.x;
              this.updateSpots();
            }
            break;
          case "D":
            this.head.y--;
            if (this.tail.y - this.head.y > 1) {
              this.tail.y--;
              this.tail.x = this.head.x;
              this.updateSpots();
            }
            break;
          case "L":
            this.head.x--;
            if (this.tail.x - this.head.x > 1) {
              this.tail.x--;
              this.tail.y = this.head.y;
              this.updateSpots();
            }
            break;
        }
      }
    });
  }

  updateSpots() {
    this.visitedSpots.push({ x: this.tail.x, y: this.tail.y });
  }

  countUniqueVisits() {
    const visitSet = new Set(this.visitedSpots.map(({ x, y }) => `${x},${y}`));
    return visitSet.size;
  }
}

class SnakeTracker {
  constructor() {
    this.snakePositions = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    this.visitedSpots = [{ ...this.snakePositions[9] }];
  }
  static DIRECTIONS = {
    R: { axis: "x", step: 1 },
    L: { axis: "x", step: -1 },
    U: { axis: "y", step: 1 },
    D: { axis: "y", step: -1 },
  };

  inputConverter(row) {
    const [direction, stepCountStr] = row.split(" ");
    const steps = Number(stepCountStr);
    return { direction, steps };
  }

  move(input) {
    const instr = input.split("\n").map((row) => this.inputConverter(row));
    instr.forEach(({ direction, steps }) => {
      for (let i = 0; i < steps; i++) {
        const { axis, step } = SnakeTracker.DIRECTIONS[direction];
        this.snakePositions[i][axis] += step;
        // this.visitedSpots.push(this.snakePositions[9]);
      }
    });
    console.log(this.snakePositions);
  }

  countUniqueVisits() {
    const visitSet = new Set(this.visitedSpots.map(({ x, y }) => `${x},${y}`));
    return visitSet.size;
  }
}

const puzzleInput = () => {
  const data = fs.readFileSync("./inputs/dayNine.txt", "utf-8");
  return data;
};

module.exports = { TailTracker, SnakeTracker };
