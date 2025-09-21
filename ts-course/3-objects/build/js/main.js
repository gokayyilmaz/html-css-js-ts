let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5110];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("jim");
let test = [];
let bands = [];
bands.push("Van Halen");
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 42;
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "john";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarists = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarists(jp));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C); // 1 + 2 = "3"
export {};
