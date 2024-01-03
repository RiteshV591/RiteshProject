// Day - 3 

//=== Declarations in JS ===

// -------- var --------

var carName = "Volvo"; // it's used to support old browser before 2015.
console.log("Var variable : car name - "+ carName);




// ------- let ---------

let person = "Ritesh Vaghela" // Works same as var, used when value will be changed in future
console.log("Let variable : person - "+ person);

let person1 = "Harshal" , carName2 = "Tata", price = 300000; //one statement many variables
console.log("Name : " + person1 + ", Car : "+ carName2 + ", Price: "+ price); 


//blocked Scope
{
    let x = 2;
}

// x can NOT be used here

// Cannot "Redeclare"

let x = "John Doe";

// let x = 0; // ERROR




// ------- const --------

const companyName = "Webelight"; // Used only when both value and datatype should not be changed in future and remain constant
console.log("const variable : company - "+ companyName);

    //cannot be Redeclared, cannot be reassigned, have blocked scope.

const PI = 3.141592653589793;
//PI = 3.14; // ERROR

    //must be assigned first

const PI2 = 3.14159265359; //correct

//const PI2;
//PI2 = 3.14159265359; //ERROR







// ======= Datatypes in JS ===========

// there are two types of Data types 1. Primitive 2.Non-Primitive(Reference)

    //--- Primitive Data Types ----

// (7 types - String, Number, Boolean, Null, Undefined, Symbol, BigInt)

// 1. Numbers - stored as decimal numbers (floating point). Numbers can be written with, or without decimals

const score = 100; const score1 = 100.3; // both are called numbers

// 2. String - is a series of characters, can be written in single '' or double "" Quotes.

// Using double quotes:
let carName3 = "Volvo XC60";

// Using single quotes:
let carName4 = 'Volvo XC60';

// 3. BigInt (added in ES2020) - are stored in a a 64-bit floating-point format. stores integer values that are too big to be represented by a normal JavaScript Number.

let z = BigInt("123456789012345678901234567890");

// 4. Booleans - Booleans can only have two values: true or false.

let p = 5;
let q = 5;
let r = 6;
console.log(p == q);       // Returns true
console.log(p == r);       // Returns false

// 5. Undefined - a variable without a value, has the value undefined. The type is also undefined.

let car;    // Value is undefined, type is undefined

    // Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

car = undefined;    // Value is undefined, type is undefined

// 6. Null - having no value

var x1 = null;
console.log(typeof(x1)); // Null



// 7. Symbol - Symbols are often used to add unique property keys to an object

// Every Symbol() call is guaranteed to return a unique Symbol.

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false




//  ---- Reference Data Type (Non-Primitive) -----

// 1. Array - An array is a special variable, which can hold more than one value

const names = ["Ritesh", "Harshal", "Aarti", "Janki"];  // this is called array literal method

// You can also create an array, and then provide the elements

const surnames = [];
surnames[0] = "Vaghela";
surnames[1] = "Chauhan";
surnames[2] = "Shrimali";
surnames[3] = "Patel";

// another method to create ARRAY is using Keyword "new"

const places = new Array("Ahmedabad","Surat","Bhavnagar");

// Accessing array elements

let place = places[0];
console.log(place);

// Changing an array element

places[1] = "Banglore";
console.log(places[1]);

// Converting Array to string


document.getElementById("demo").innerHTML = places.toString();

// access full array
document.getElementById("demo2").innerHTML = places;

console.log("Array is An "+typeof(places));

// Array Properties and Methods

console.log(places.length);   // Returns the number of elements
console.log(places.sort());   // Sorts the array


// 2. Objects

// Objects are variables too. But objects can contain many values.

// Object values are written as name : value pairs (name and value separated by a colon).

let persons = {firstName:"Ritesh", lastName:"Vaghela", age:22, eyeColor:"black"};

// Using the JavaScript Keyword new

const persons2 = new Object();
persons2.firstName = "John";
persons2.lastName = "Doe";
persons2.age = 50;
persons2.eyeColor = "blue";

// JavaScript Objects are Mutable

const p2 = persons2;  // Will not create a copy of person. it will become person itself that means any changes to p2 will be applied to person too.



// 3. Functions - set of instructions to execute later by calling them

function functionName(parameters) {
    // code to be executed
}  

function myFunction(a, b) {
    return a * b;
}

//Function Expressions - A function expression can be stored in a variable

const v = function (a, b) {
    return a * b
};
let b = v(4, 3);