// in order to add npm to project run command npm init in root folder
// all packages that are installed using npm are stored as a dependency in package.json
// dependencies means our project is now dependent on them
// npm Global module : these dependencies have global scope install using(-g) [gets installed on pc project is not dependent on it for developers benefits]
var validator = require("validator");
const chalk = require("chalk");
// console.log(chalk.blue.inverse("Hello world!"));
const res = validator.isEmail("foo@bar.com.");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));