const fs = require("fs");
class FileSystem {
  constructor() {
    this.fileContents = {};
    this.parentLocations = [];
  }
  get currentLocation() {
    return this.parentLocations[this.parentLocations.length - 1];
  }

  get filePath() {
    return this.parentLocations.join("");
  }

  cd(location) {
    if (location !== "..") {
      this.parentLocations.push(location);
    } else {
      this.parentLocations.pop();
    }
  }

  writeDirectory(step) {
    console.log("filepath: ", this.filePath, "step: ", step);
  }
  systemScanner(input) {
    const instructionSteps = input.split("\n");
    const breakDown = instructionSteps.map((step) => {
      return step.split(" ");
    });

    for (let i = 0; i < breakDown.length; i++) {
      const step = breakDown[i];
      if (step.includes("cd")) {
        this.cd(step[2]);
      } else if (!step.includes("ls")) {
        this.writeDirectory(step);
      }
    }
  }
}

const files = new FileSystem();

const input = fs.readFileSync("./inputs/daySevenTest.txt", "utf8");

files.systemScanner(input);
console.log("current file content: ", files.fileContents);
module.exports = FileSystem;
