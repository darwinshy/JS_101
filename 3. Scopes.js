// Scopes

/ * ____________________________________________________________________________________________________ * /;

/*
Scopes
    A variable may belong to one of the following scopes
        1. Global scope
        2. Function scope
        3. Block scope
*/

/ * ____________________________________________________________________________________________________ * /;

/*
1. Global scope
    A variable declared outside a function belongs to the global scope.
    A variable declared in the global scope can be accessed from any other scope.
*/

var a = 10;

function foo() {
  console.log(a); // 10
}

foo();

/ * ____________________________________________________________________________________________________ * /;

/*
2. Function scope
    A variable declared inside a function belongs to the function scope.
    A variable declared in the function scope can be accessed only from within the function.
*/

function foo() {
  var b = 10;
  console.log(b); // 10
}

foo();

// console.log(b); // ReferenceError: b is not defined

/ * ____________________________________________________________________________________________________ * /;

/*
3. Block scope
    A variable declared inside a block belongs to the block scope.
    A variable declared in the block scope can be accessed only from within the block.
*/

if (true) {
  var c = 10;
}

console.log(c); // 10

if (true) {
  let d = 10;
}

// console.log(d); // ReferenceError: d is not defined

/ * ____________________________________________________________________________________________________ * /;
