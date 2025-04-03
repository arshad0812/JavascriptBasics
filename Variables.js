
// DataTypes
let a = 10;      // Integer
let b = 3.14;    // Float
let c = 1.5e5;   // Exponential notation (150000)
let name1 = "Alice";  
let name2 = 'Bob';  
let message = `Hello, ${name1}!`; // Template literals  
console.log(message); // Output: Hello, Alice!
let isLoggedIn = true;
let hasPermission = false;
console.log(10 > 5); // Output: true
let x;
console.log(x); // Output: undefined
let y = null;
console.log(y); // Output: null

// Variable Scopes
//Global Scope
let globalVar = "I am global"; 

function showGlobal() {
    console.log(globalVar); // ✅ Accessible inside the function
}

showGlobal();
console.log(globalVar); // ✅ Accessible outside the function


//Local Scope
//Let

function myFunction() {
    let localVar = "I am local"; 
    console.log(localVar); // ✅ Accessible inside the function
}

myFunction();
// console.log(localVar); // ❌ Error: localVar is not defined
// This gives error


//Var
var xx = 10;
console.log(xx); // 10

var xx = "HI"; // ✅ Reassigning is allowed
console.log(xx); // 20

//let
let yy = 15;
console.log(yy); // 15

yy = 25; // ✅ Reassigning is allowed
console.log(yy); // 25

// let y = 35; // ❌ Error: 'y' has already been declared

//const
const zz = 50;
console.log(zz); // 50

// zz = 60; // ❌ Error: Assignment to constant variable
// const zz = 70; // ❌ Error: Identifier 'z' has already been declared
