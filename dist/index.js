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
