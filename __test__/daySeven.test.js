const FileSystem = require("../challenges/daySeven");

describe("FileSystem", () => {
  describe("System scanner", () => {
    test("System scanner takes an input of instructions and populates the fileContents object", () => {
      const fs = new FileSystem();
      const input = `cd /\nls\n123 abc.txt`;
      fs.systemScanner(input);
      const expected = { "/": { "abc.txt": "123" } };
      expect(fs.fileContents).toEqual(expected);
    });
  });
  test.only("System scanner can nest objects when cd-ing into another directory", () => {
    const fs = new FileSystem();
    const input = `cd /\nls\n123 abc.txt\ndir a\ncd a\n10 def.txt`;
    fs.systemScanner(input);
    console.log("test lastLocation: ", fs.lastLocation);
    console.log("test currLocation: ", fs.currLocation);
    console.log("test fileContents: ", fs.fileContents);
    const expected = { "/": { "abc.txt": "123", a: { "def.txt": "10" } } };
    expect(fs.fileContents).toEqual(expected);
  });
});
