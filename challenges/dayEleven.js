class Monkey {
  constructor(name, items, incWorryFunc, testFunc) {
    this.name = name;
    this.items = items;
    this.inspectedItems = [];
    this.incWorry = incWorryFunc;
    this.testFunc = testFunc;
  }
  inspectItem() {
    const currItem = this.items.shift();
    this.inspectedItems.push(currItem);
    const newWorry = Math.floor(this.incWorry(currItem) / 3);
    return { newMonkey: this.testFunc(newWorry), item: newWorry };
  }

  gainItem(item) {
    this.items.push(item);
  }
}

const monkeyBuilder = (...monkeys) => {
  const monkeyClasses = monkeys.map(({ name, items, incWorry, test }) => {
    const newMonkey = new Monkey(name, items, incWorry, test);
    return newMonkey;
  });
  return monkeyClasses;
};

const keepAway = (...monkeys) => {
  const monkeyClasses = monkeyBuilder(...monkeys);
  for (let i = 0; i < 20; i++) {
    monkeyClasses.forEach((monkey) => {
      let count = monkey.items.length;
      while (count > 0) {
        const { newMonkey, item } = monkey.inspectItem();
        monkeyClasses[newMonkey].gainItem(item);
        count--;
      }
    });
  }
  return monkeyClasses;
};

const monkeyBusiness = (monkeyClasses) => {
  const totalCounts = monkeyClasses
    .map((monkey) => {
      return monkey.inspectedItems.length;
    })
    .sort((a, b) => {
      return a - b;
    });

  const mostMonkeyBusiness = totalCounts[totalCounts.length - 1];
  const secondMostMonkeyBusiness = totalCounts[totalCounts.length - 2];
  return mostMonkeyBusiness * secondMostMonkeyBusiness;
};
const {
  monkeyZero,
  monkeyOne,
  monkeyTwo,
  monkeyThree,
  monkeyFour,
  monkeyFive,
  monkeySix,
  monkeySeven,
} = require("../inputs/dayElevenInput");

const monkeyGames = keepAway(
  monkeyZero,
  monkeyOne,
  monkeyTwo,
  monkeyThree,
  monkeyFour,
  monkeyFive,
  monkeySix,
  monkeySeven
);
console.log(monkeyBusiness(monkeyGames));
module.exports = { keepAway };
