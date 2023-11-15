const fs = require("fs");
class SignalBooster {
  constructor() {
    this.cycles = 0;
    this.x = 1;
    this.cycleCheck = 20;
    this.cycleTracker = [];
    this.signalStrengths = [];
    this.crtScreen = [[], [], [], [], [], []];
    this.spritePositions = [[0, 1, 2]];
  }

  executeProgramme(input) {
    const [command, value] = input.split(" ");

    if (command === "addx") {
      this.cycles++;

      this.addSpritePositions();
      this.cycleChecker();
      this.cycles++;

      this.cycleChecker();
      this.x += Number(value);
      this.addSpritePositions();

      this.cycleChecker();
    } else if (command === "noop") {
      this.cycleChecker();
      this.cycles++;

      this.addSpritePositions();
    }
  }

  runCycles(inputStr) {
    const instructions = inputStr.split("\n");
    instructions.forEach((row) => {
      this.executeProgramme(row);
    });
  }
  cycleChecker() {
    if (this.cycles >= this.cycleCheck) {
      this.cycleTracker.push(this.x);
      const signalStrength = this.x * this.cycles;
      this.signalStrengths.push(signalStrength);
      this.cycleCheck += 40;
    }
  }
  sumSignalStrengths() {
    let total = 0;
    this.signalStrengths.forEach((value) => {
      total += value;
    });
    return total;
  }

  addSpritePositions() {
    const middle = this.x;

    this.spritePositions.push([middle - 1, middle, middle + 1]);
  }

  writeScreen() {
    const chunk = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );
    this.spritePositions.pop();
    const rows = chunk(this.spritePositions, 40);

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const screenRow = this.crtScreen[i];

      for (let j = 0; j < row.length; j++) {
        const sprite = row[j];
        if (sprite.includes(j)) {
          screenRow.push("#");
        } else {
          screenRow.push(" ");
        }
      }
    }
  }

  readScreen() {
    let outputStr = "";
    for (let i = 0; i < this.crtScreen.length; i++) {
      const row = this.crtScreen[i].join("");
      outputStr += row;
      outputStr += "\n";
    }
    fs.writeFileSync("dayTenOutput.txt", outputStr);
  }
}

const getInput = () => {
  return fs.readFileSync("./inputs/dayTen.txt", "utf8");
};
const input = getInput();
const boost = new SignalBooster();
boost.runCycles(input);
boost.writeScreen();
boost.readScreen();
module.exports = SignalBooster;
