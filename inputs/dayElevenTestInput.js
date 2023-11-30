const monkeyZero = {
  name: 0,
  items: [79, 98],
  inspectedItems: [],
  incWorry: function (num) {
    return num * 19;
  },
  test: function (num) {
    return num % 23 === 0 ? 2 : 3;
  },
};

const monkeyOne = {
  name: 1,
  items: [54, 65, 75, 74],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 6;
  },
  test: function (num) {
    return num % 19 === 0 ? 2 : 0;
  },
};

const monkeyTwo = {
  name: 2,
  items: [79, 60, 97],
  inspectedItems: [],
  incWorry: function (num) {
    return num * num;
  },
  test: function (num) {
    return num % 13 === 0 ? 1 : 3;
  },
};

const monkeyThree = {
  name: 3,
  items: [74],
  inspectedItems: [],
  incWorry: function (num) {
    return num + 3;
  },
  test: function (num) {
    return num % 17 === 0 ? 0 : 1;
  },
};

module.exports = { monkeyZero, monkeyOne, monkeyTwo, monkeyThree };
