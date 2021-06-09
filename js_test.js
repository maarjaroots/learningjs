let myName = "Maarja";
let greeting = `Hello ${myName}!`;
console.log(greeting);

let [x,y] = [1,2];
console.log(x,y);

[x,y] = [x+1, y+1];
console.log(x,y);

[x,y] = [y,x];
console.log(x,y);

let o = {x:1, y:2}
for (const [name, value] of Object.entries(o)) {
    console.log(name, value)
}

let [a,b] = [1];
console.log(a,b);

[c,d] = [1,2,3];
console.log(c,d);

[,e,,f] = [1,2,3,4,5];
console.log(e,f);

let [k, ...l] = [1,2,3,4];
console.log(k,l);

let [first, ...rest] = "Hello";
console.log(first,rest);

let comaArray = [1,,,3,,4,,,5];
console.log(comaArray)


let w = {x: 1, y: {z: 3}};
let ab = [w, 4, [5,6]];
console.log(ab[0].x);

let ac = {bc : null};   //conditional property access (optional chaining) //  ab.bc valuates to undefined, instead of throwing an TypeError
console.log(ab.bc?.cd.de);

let qw = 2;
let qe = 45;
qw === 3 && qe === 5;


