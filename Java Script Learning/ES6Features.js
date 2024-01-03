// ECMAScript 2015 aka ES6 was the second major revision to JavaScript.

// There are many new features introduced like.

// 1. let Keyword - The let keyword allows you to declare a variable with block scope.

var x = 10;     //var is declared in global scope
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

//2. const keyword - allows us to declare a constant, where the value of const variable cannot be changed.

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
  x = 10;
}
// Here x is 10

// 3. Arrow Function

// ES5
var x = function(x, y) {
    return x * y;
 }
 
// ES6
const x = (x, y) => x * y;