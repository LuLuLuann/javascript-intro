// console.log is good for debugging
console.log("Hello from External Script");
console.log(100);
console.log(true);

// Variables
var myVariable = "My First Variable";

let username = "user123";
let loggedIn = true;
let password = null;

// this will return "undefined"
let someValue;
console.log(someValue)

// use CONST to declare things that won't change. 
// Ex: your birthdate
const PI =3.14;
// This will return the number - defined variable
console.log(PI);

// Store the new value
someValue = 23.5
console.log(someValue)

let userAddress = "123 Main Street"
console.log(userAddress)

// if (true) {

// }

// VARIABLE DECLARATION RULES
// You can pass multiple strings with the variable "x"
let x = 10; // global scope
console.log("Global: ", x);

// could be if, switch or __ statement 
{
    //local or block scope
    let x = 2;
    console.log("Block: ",x);
    let y= 100;
}

//The console can reach to the scope outside but not inside the "box" (scope inside another variable) 
console.log("Bottom: ", x);

// This will create a var variable -- it is bad practice to do this. You should use "let" or "const"
// result = y;

// This will say it is not defined because it cannot read the information in the { }
// console.log(y);

// THIS "VAR" AREA IS SOMETHING THAT SHOULD WORK BUT DOESN'T = "It's var … not 'let' so redeclaration replace the original. since VAR is globally scoped"
var counter = 1;
// Do something with this counter.

// Then, some many lines later...
function processData() {
   var counter = 2;
   // Do something with this other counter.
}

// Which counter are we referencing here?
counter++;

console.log(counter);

// Check data type of literals and variables
console.log(typeof x);
console.log(typeof userAddress);
console.log(typeof loggedIn);
console.log(typeof "Hi!");
console.log(typeof 500);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);