"use strict";
//Basic Types
let id = 5;
let company = "Traversy Media";
let inPublished = true;
let x = "Hello"; //any type
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Brad", true]; //Have to be in order
//Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
//Union
let productID; // either or - both will work
productID = 22;
productID = "22";
//Enum - enumerated type - Define a set of named constants numaric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; //should be 4
})(Direction1 || (Direction1 = {}));
//console.log(Direction1.Up)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
//let customerID = <number>cid
let customerID = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(1,2))
//console.log(addNum("Hello", 5)) //doesn't work because of string
//Void
function log(message) {
    console.log(message);
}
log(123);
log("Hello");
const user1 = {
    id: 1,
    name: 'John'
};
user1.name = "Smith";
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Brad = new Person(1, "Brad Traversy"); //goes to the person class and throught the constructor making a new object
const Mike = new Person(2, "Mike Jordan");
console.log(Brad, Mike);
//Modifiers
//public, private or protected
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Brad1 = new Person1(1, "Brad Traversy");
const Mike1 = new Person1(2, "Mike Jordan");
console.log();
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Brad2 = new Person2(1, "Brad Traversy");
const Mike2 = new Person2(2, "Mike Jordan");
console.log(Brad2.register());
