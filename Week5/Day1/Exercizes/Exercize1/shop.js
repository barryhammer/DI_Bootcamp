const products = require("./products.js");

function findProduct(productName) {
    return products.find(product => product.name === productName); 
    //.find() searches the array and returns the first object whose name matches. 
    // If no match exists, it returns undefined
}

console.log(findProduct("Laptop"));
console.log(findProduct("Book"));
console.log(findProduct("Shirt"));