"use strict";
console.log("Hello m**F**");
let x = 20;
console.log(`test var${x}`);
// x="is a string"; ERROR
let ref;
// ref=23; ERROR
ref = "no problem";
console.log(ref);
let ref2;
ref2 = 23;
ref2 = false;
console.log(ref2);
function getRef(arg) {
    console.log(arg);
}
// equivalent to the previous function 
// function getRef(arg: string):void{
//     console.log(arg);
// }
function getRefWithReturn(arg) {
    console.log(arg);
    return arg;
}
// getRef(ref2); ERROR: ref2 is a boolean 
getRef(ref);
getRefWithReturn('return string');
function get3(arg) {
    console.log(arg);
    return arg;
}
get3(122);
let c1 = {
    name: "aissami",
    age: 44
};
let c2 = {
    name: "thomas",
    age: 44
};
console.log(c1);
console.log(c2);
class User {
    constructor(customer) { }
}
const newUser = new User(c1);
const product = {
    title: "lemon",
    price: 3,
    desc: "this is a great product"
};
function addToCart(product) {
    console.log('add to cart', product);
}
addToCart(product);
const product2 = {
    title: "apple",
    price: 2,
    desc: "this is a great product",
    qty: 30,
    status: "low"
};
class AppCustomer {
    constructor(name, age) {
        this.name = "";
        this.name = name;
    }
    welcome() {
        console.log('hello', this.name);
    }
}
const myCostumer = new AppCustomer("ismail", 66);
myCostumer.welcome();
