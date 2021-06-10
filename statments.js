//statment block that acts as a single statment when in {}
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("cos(n) = " + cx);
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
