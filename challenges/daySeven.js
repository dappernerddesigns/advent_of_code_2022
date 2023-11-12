class FileSystem {
  constructor() {
    this.currLocation = "/";
    this.fileContents = { "/": {} };
    this.lastLocation = "";
  }
  systemScanner(input) {
    const instructionSteps = input.split("\n");
    const breakDown = instructionSteps.map((step) => {
      return step.split(" ");
    });
    console.log("breakdown: ", breakDown);
    const directories = [];

    for (let i = 0; i < breakDown.length; i++) {}
  }
}

module.exports = FileSystem;
