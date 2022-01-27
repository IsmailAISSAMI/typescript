console.log("Hello m**F**");
let x = 20;
console.log(`test var${x}`);

// x="is a string"; ERROR

let ref: string;
// ref=23; ERROR
ref="no problem"
console.log(ref);

let ref2: string | number | boolean;
ref2=23
ref2=false
console.log(ref2);

function getRef(arg: string){
    console.log(arg);
}

// equivalent to the previous function 
// function getRef(arg: string):void{
//     console.log(arg);
// }

function getRefWithReturn(arg: string):string{
    console.log(arg);
    return arg;
}
// getRef(ref2); ERROR: ref2 is a boolean 
getRef(ref);
getRefWithReturn('return string');

function get3(arg: string|number):string|number{
    console.log(arg);
    return arg;
}
get3(122);


type Customer = {
    name: string,
    age?: number // with ? age now is optional
};
let c1:Customer={
    name:"aissami",
    age:44
};
let c2:Customer={
    name:"thomas",
    age:44
};
console.log(c1);
console.log(c2);

