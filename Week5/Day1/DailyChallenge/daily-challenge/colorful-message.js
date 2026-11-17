const chalk = require("chalk");

function colorfulMessage() {
    console.log(chalk.blue("Welcome to the Daily Challenge!"));
    console.log(chalk.green("Node.js is working correctly!"));
    console.log(chalk.yellow("Keep practicing JavaScript!"));
}

module.exports = colorfulMessage;