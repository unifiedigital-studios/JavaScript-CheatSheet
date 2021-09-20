// TEST COMMAND
console.log("Hello World!");

// Variables & Data Types

/* 
var[Rarely Used], let, const
NOTE: Use "const" Unless Reassigning The Value Is NEEDED (Read-Only)
Data Types: String, Number, BigInt, Booleon, null, undefined, Symbols 
*/

// Example of How to use [BEFORE ES6] var => function-scoped, [AFTER ES6 (ES2015)] let, const => block-scoped
var todayDateObject = new Date();
let [username, password] = ['test', 1234];
const project = "Open Source";

console.log(todayDateObject);
console.log(username, password);
console.log(project);