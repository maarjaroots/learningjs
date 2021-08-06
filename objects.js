// An object is an unordered collection of properties, each of which has a name and a value. In adddition to maintaining its own set of properties,
// a JS object also inheritd the properties of another object, known as its "prototype".
//The methods of an object are typically inherited properties, and this 'prototypal inheritance is key feature in JS
// Object are mutable

let o1 = Object.create({x:1, y:2});
console.log(o1.x + o1.y);

let o3 = Object.create(Object.prototype); 

const person = {
    isHuman : false,
    myfunction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name = "Maarja";
me.isHuman = true;
me.myfunction();

let qwer = { r:1 };
let c = Object.create(qwer)
//console.log(c);
c.x = 1; c.y = 2;
//console.log(c);
c.r = 2;
console.log(qwer);
console.log(c);