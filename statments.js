//statment block that acts as a single statment when in {}
{
 // x = Math.PI;
 // cx = Math.cos(x);
 // console.log("cos(n) = " + cx);
}

let a = [1, 9, 8, 34];
for (let i = 0; i < a.length; a[i++] = 0); //the semicolon is an empty statement


// switch with return in the middel of the code - returns the value and doesn't execute the next statments (statments after the switch)
//swiths with return inside of a function - the function returns the valu and the next statments will be carried out
const sayPrull = () => {
let prullish = 2
switch(prullish) {
  case 1:
    console.log("Hello");
    return;
    case 2:
    console.log("Hi");
    return;
    case 3:
    console.log("Tere");
    return;
    default:
      console.log("No hello to you");
      return;
}
}
sayPrull();
// switch with break in the middel of the code - breaks out of the switch and carries on the next statment that comes after the switch
let prull = 3
switch(prull) {
  case 1:
    console.log("Hello");
    break;
    case 2:
    console.log("Hi");
    break;
    case 3:
    console.log("Tere");
    break;
    default:
      console.log("No hello to you");
      break;
}



//thhe interpreter executes statment repeatedly while the expression is truthy
//a while loop can be thought as a repeading if statment
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
while (count < 8) {
  console.log(`The number is ${count}`);
  count++;
}

// do while loop - the body of the loop is always executed at least once.
let b = [];
const printArray = () => {
  let len = b.length, i = 0;
  if (len ===0) {
    console.log("Empty array");
  } else {
    do {
      console.log(b[i]);
      }
      while(i++);
  }
}
printArray();

// for(initialize; test; increment;)
// { statement}
for(let co = 0; co < 10; co++) {
  console.log(co);
}

// using comma to combine multiple initializations and increment expressions into a single expression suitable for use in a for loop
let i, j, sum = 1;
for(i = 0, j = 0; i< 10 ; i++, j--) {
  console.log(sum += i*j);
}


//for/of loop works with iterable objects (arrays, strings, sets and maps - sequence or set of elements that can loop or iteraye through)
let data = [1,2,3,4,5,6,7,8,9], summ =0;
for(let element of data) {
  summ += element;
}
console.log(summ);

let dataName = [[1,2,3], "maaarja", [0,8,6]]
for (let value of dataName) {
  console.log(value);
}


//for/of with objects -  I need to use Object.keys, Object.entries or Object.values - these methods return an array - the loop can iterate through
//Object.keys returns an array of property names for an object
let o = { x:1, y:2, z:3};
let keys = "";
for(let k of Object.keys(o)) {
  keys += k;
  console.log(keys);
}
//Oject.values returns an array of property values for an object
let sumOf = 0;
for(let v of Object.values(o)) {
  sumOf += v;
  console.log(sumOf);
}
//Object.entries returns an array of arrays, where each innner array represents a key/value pair for one property of the object.
//using the destructing assigment to unpack values into distinct variables
let pairs = "";
for(let [k, v] of Object.entries(o)) {
  pairs += k + v;
  console.log(pairs);
}
//destructing assignment - the value of the righthand side of the equals sign is an array or object (a structured value)
//and the lefthand side specifies one or more variables names using syntax that mimics array and object literal syntax.
let [x,y] = [1,2] // same as let x =1, y=2;

//Strings are iterable character-by-character
//creating an object, if frecuency has the letter - increase its count.
let frequency = {};
for(let letter of "missisippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
console.log(frequency)
let summm = 0
for(let s of Object.values(frequency)) {
  summm += s;
}
console.log(summm);
let em = "";
for(let e of Object.keys(frequency)) {
  em += e;
}
console.log(em);

//for/of Set - Set class is iterable, print unique words in a string
let text = "Na Na Na Na Pow Wow Pow Wow Batman!";
let wordSet = new Set(text.split(" "));
let uniques = [];
for(let word of wordSet) {
  uniques.push(word);
}
console.log(uniques)
// let letterPairs = "";
// for(letter of uniques) {
// letterPairs += letter;
// }
// console.log(letterPairs);


//for/of Map- Map object iterates through the key/value pairs, destructing
let m = new Map([[1, "one" ], [2, "two"]]);
for(let [key, value] of m) {
  console.log(key, value)
}
//console.log(m);