let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5110];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

let myTuple: [string, number, boolean] = ["Dave", 42, true];
let mixed = ["John", 1, false];

myTuple[1] = 42;

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "john";

// interface
interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarists = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarists(jp));

// enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.C); // 1 + 2 = "3"
