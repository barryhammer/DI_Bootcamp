const _ = require("lodash");
const { add, multiply } = require("./math.js");

console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));

const numbers = [10, 20, 30, 40];

console.log("Sum:", _.sum(numbers));
console.log("Maximum:", _.max(numbers));
console.log("Minimum:", _.min(numbers));