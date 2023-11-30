const monkeyZero = {
  name: 0,
  items: [73, 77],
  inspectedItems: [],
  incWorry: function (num) {
    return num * 5;
  },
  test: function (num) {
    return num % 11 === 0 ? 6 : 5;
  },
};

const monkeyOne = {
  name: 1,
  items: [57, 88, 80],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 5;
  },
  test: function (num) {
    return num % 19 === 0 ? 6 : 0;
  },
};

const monkeyTwo = {
  name: 2,
  items: [61, 81, 84, 69, 77, 88],
  inspectedItems: [],
  incWorry: function (num) {
    return num * 19;
  },
  test: function (num) {
    return num % 5 === 0 ? 3 : 1;
  },
};

const monkeyThree = {
  name: 3,
  items: [78, 89, 71, 60, 81, 84, 87, 75],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 7;
  },
  test: function (num) {
    return num % 3 === 0 ? 1 : 0;
  },
};

const monkeyFour = {
  name: 4,
  items: [60, 76, 90, 63, 86, 87, 89],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 2;
  },
  test: function (num) {
    return num % 13 === 0 ? 2 : 7;
  },
};

const monkeyFive = {
  name: 5,
  items: [88],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 1;
  },
  test: function (num) {
    return num % 17 === 0 ? 4 : 7;
  },
};

const monkeySix = {
  name: 6,
  items: [84, 98, 78, 85],
  inspectedItems: [],
  incWorry: function (num) {
    return num * num;
  },
  test: function (num) {
    return num % 7 === 0 ? 5 : 4;
  },
};

const monkeySeven = {
  name: 7,
  items: [98, 89, 78, 73, 71],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 4;
  },
  test: function (num) {
    return num % 2 === 0 ? 3 : 2;
  },
};

module.exports = {
  monkeyZero,
  monkeyOne,
  monkeyTwo,
  monkeyThree,
  monkeyFour,
  monkeyFive,
  monkeySix,
  monkeySeven,
};
