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

class User {
    constructor(customer:Customer){}
}
const newUser:User=new User(c1);

interface Product {
    title: string,
    price: number,
    desc: string
}
const product: Product = {
    title:"lemon",
    price:3,
    desc:"this is a great product"
}
function addToCart(product: Product):void{
    console.log('add to cart', product);
}
addToCart(product);

interface ProductStock{
    qty:number,
    status: string
}
type shopProduct = Product | ProductStock;
const product2: shopProduct = {
    title:"apple",
    price:2,
    desc:"this is a great product",
    qty:30,
    status:"low"
}

class AppCustomer {
    public name:string = "";
    private age: number = 0; // we have also protected
    constructor(name: string, age: number){
        this.name=name;
        this.age=age
    }
    welcome(){
        console.log('hello', this.name);
    }
}
const myCostumer = new AppCustomer("ismail", 66);
myCostumer.welcome();

class AppMember extends AppCustomer{
    isMember= false;
    constructor(name: string, age: number, isMember: boolean = false){
        super(name, age);
        isMember=isMember;
    }

    // this is a private var, we cannot access it 
    // getAge(){
    //     console.log(this.age)
    // }
}

interface ProductManagement {
    getQty(qty: number):number,
    isVisible(): Boolean,
    getPromoCode(percent: number):string
}