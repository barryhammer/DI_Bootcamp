const { readFile, writeFile } = require("./fileManager.js");

const content = readFile("Hello World.txt");
console.log(content);

writeFile("Bye World.txt", "Writing to the file");

console.log("File written successfully!");