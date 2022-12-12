// Declarations

/ * ____________________________________________________________________________________________________ * /;

/* 
 Declaration
     Variable declaration is used to declare a variable in JavaScript.
     A variable is a named storage location in the computer's memory.
     It is used to store data.
     A variable can be declared using the var keyword.
     A variable can be declared without assigning a value to it.
     A variable can be declared and assigned a value in the same statement.
     A variable can be declared and assigned a value in separate statements.
*/

/ * ____________________________________________________________________________________________________ * /;

/*
1. Variable declaration
    A variable can be declared using the var keyword.
    A variable can be declared without assigning a value to it.
*/

var a;
console.log(a); // undefined

/*
1.2 var hoisting
    var hoisting is a JavaScript mechanism where variables and function declarations are moved 
        to the top of their scope before code execution.
    In other words, a variable can be used before it has been declared.
    This is because all variable declarations are hoisted to the top of the current scope.
*/

b = 10;
var b; // var b; is hoisted to the top of the current scope

console.log(b); // 10

hoisting();

// function hoisting is hoisted to the top of the current scope
function hoisting() {
  console.log(c); // undefined
  var c; // var c; is hoisted to the top of the current scope
}

/ * ____________________________________________________________________________________________________ * /;

/*
2. let declaration 
    let is a new keyword in JavaScript introduced in ES6.
    let is used to declare a variable.
    let is block scoped.
    let is not hoisted to the top of the current scope. 
*/

// console.log(d); // ReferenceError: d is not defined

let d = 10; // d  is not hoisted to the top of the current scope
console.log(d); // 10

/ * ____________________________________________________________________________________________________ * /;

/*
3. const declaration
    const is a new keyword in JavaScript introduced in ES6.
    const is used to declare a variable.
    const is block scoped.
    const is not hoisted to the top of the current scope.
    const is read-only.
    const cannot be reassigned.
*/

// console.log(e); // ReferenceError: e is not defined

const e = 10; // e is not hoisted to the top of the current scope
console.log(e); // 10

// e = 20; // TypeError: Assignment to constant variable.

/ * ____________________________________________________________________________________________________ * /;

/* 
Temporary Dead Zone (TDZ)
    TDZ is a new concept introduced in ES6.
    TDZ is a period of time when a variable is not accessible.
    TDZ starts from the beginning of the current scope until the variable is declared.
    TDZ ends when the variable is declared.
    TDZ is only applicable to let and const.
*/

{
  console.log(bar); // undefined
  //   console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

/ * ____________________________________________________________________________________________________ * /;

/*
var vs let
    var is function scoped.
    let is block scoped.

    var is hoisted to the top of the current scope.
    let is not hoisted to the top of the current scope.

    var can be redeclared.
    let cannot be redeclared.

    var can be reassigned.
    let cannot be reassigned.
*/

var f = 10;
var f = 20;

console.log(f); // 20

let g = 10;
// let g = 20; // SyntaxError: Identifier 'g' has already been declared

console.log(g); // 10

g = 20;

console.log(g); // 20

/ * ____________________________________________________________________________________________________ * /;

/*
const vs let
    const is block scoped.
    let is block scoped.

    const is not hoisted to the top of the current scope.
    let is not hoisted to the top of the current scope.

    const cannot be redeclared.
    let cannot be redeclared.

    const cannot be reassigned.
    let cannot be reassigned.

    const must be initialized.
    let does not have to be initialized.
*/

const h = 10;
// const h; // SyntaxError: Missing initializer in const declaration
// const h = 20; // SyntaxError: Identifier 'h' has already been declared

console.log(h); // 10

// h = 20; // TypeError: Assignment to constant variable.

let i;

console.log(i); // undefined

i = 10;

console.log(i); // 10

i = 20; // 20

console.log(i); // 20

/ * ____________________________________________________________________________________________________ * /;
