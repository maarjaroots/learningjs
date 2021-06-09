//statment block that acts as a single statment when in {}
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("cos(n) = " + cx);
}

let a = [1, 9, 8, 34];
for (let i = 0; i < a.length; a[i++] = 0); //the semicolon is an empty statement

let text;
let n = 2
let hello = (n) => {
  switch (n) {
    case 1:
      text = "Hi";
      break;
    case 2:
    console.log(  text = "Tere");
      break;
    case 3:
      text = "Ztrasvuite";
      break;
    default:
      text = "just say Hello!";
      break;
  }
 // console.log(n)
}
console.log(hello(n))


//thhe interpreter executes statment repeatedly while the expression is truthy
//a while loop can be thought as a repeading if statment
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
