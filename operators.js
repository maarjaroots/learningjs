console.log(eval("3+2"));
let r=3; t=5;
let rt = eval("r*t + r-t");
console.log(rt);
console.log(typeof(rt));
console.log( eval("(r, t) => r+t+100"));

//ternary operator
let username;
greeting = "Hello " + (username ? username : "there");  
console.log(greeting);

//Nullish coalescing 
//returns the right-hand side operand when its left-hand side operand is null or undefined
const wer = null ?? 'hellooo';
const wert = 0 ?? 3422;
console.log(wer, wert);

let options = {
    timeout: 0,
    title : "",
    verbose : false,
    n : null
}
// zero, empty string and false are falsy values - with the || it woould return the right-hand value 
console.log(options.timeout ?? 1000)  // 0 as defined in the object, returns 0, because 0 is accepted as a value with the ??
console.log(options.title ?? "Untitled") /// "" as defined n the object 
console.log(options.verbose ?? true) // false as defined in the object
console.log(options.quiet ?? false)  // false, oproperty not defined
console.log(options.n ?? 10)  // 10, property is null

//typeof evaluates to 'object' for all object and array values other than functions. null evaluates to 'object'
let value = 3;
//let value = v.toString();
console.log((typeof value === 'string') ? `'${value}'` : value.toString());
console.log(typeof value)

//the instanceof expects a left-side operand that is an object and a rigt-side operand that identifies as a class of object.
//the operator evaluates to true if the left-side object is an instance of the right -side class and evaluates to false othervise.
let d = new Date();
console.log(d instanceof Date);
console.log(d instanceof Object);
console.log(d instanceof Number);
let arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr instanceof RegExp);