// file system-read write, server through http 
// linux- shell coding
// git github
// node module

let math=require('./math');

console.log(math.pi);
console.log(math.sum(2,4));
console.log(math.product(3,6));

//   using destructure
let {pi, sum, product}=require('./math');
console.log(pi);
console.log(sum(8,9));
console.log(product(9,9));

