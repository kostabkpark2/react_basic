let a = [1,2];
//let b = [...a];
let c = [...a];

console.log(a, c);

let b = [3,4];
c[1] = 100;

console.log(a, c);
//let c = [...a, 3];
//let c = [...a, ...b];
//let c = a.concat(b);

// console.log("a=b", a==b);
// console.log("a=c", a==c);
