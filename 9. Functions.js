// Functions

/ * ____________________________________________________________________________________________________ * /;

/*
    Functions are a way to group code together to perform a specific task.
*/
/ * ____________________________________________________________________________________________________ * /;

// Function declaration
function greet() {
  console.log('hello there');
}

// Function expression
const speak = function () {
  console.log('good day!');
};

greet();

speak();

/ * ____________________________________________________________________________________________________ * /;

/*
Arguments & Parameters
    Arguments are values passed into a function when it is called.
    Parameters are variables that act as placeholders for the values that are passed in when the function is called.
*/

const speak1 = function (name = 'luigi', time = 'night') {
  console.log(`good ${time} ${name}`);
};

speak1('mario', 'morning'); // good morning mario
speak1('shaun'); // good night shaun
speak1(); // good night luigi

/ * ____________________________________________________________________________________________________ * /;

/*
Returning Values
    A function can return a value to the code that called it.
*/

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const area = calcArea(5);

console.log(area); // 78.5

/ * ____________________________________________________________________________________________________ * /;

/*
Arrow Functions
    Arrow functions are a shorter way to write function expressions.
*/

const calcArea1 = (radius) => {
  return 3.14 * radius ** 2;
};

const area1 = calcArea1(5);

console.log('area is:', area1); // area is: 78.5

/ * ____________________________________________________________________________________________________ * /;

/*
Arrow Function Shorthand
    If the function only has one parameter, the parentheses can be omitted.
    If the function only has one line of code, the curly braces can be omitted.
*/

const calcArea2 = (radius) => 3.14 * radius ** 2;

const area2 = calcArea2(5);

console.log('area is:', area2); // area is: 78.5

/ * ____________________________________________________________________________________________________ * /;

/*
Function Hoisting
    Function declarations are hoisted to the top of the file.
    Function expressions are not hoisted.
*/

greet(); // hello there

function greet() {
  console.log('hello there');
}

greet(); // hello there

const speak2 = function () {
  console.log('good day!');
};

speak2(); // good day!

/ * ____________________________________________________________________________________________________ * /;

/*
Callback Functions
    A callback function is a function passed into another function as an argument.
*/

const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  console.log(value);
});

/ * ____________________________________________________________________________________________________ * /;

/*
Nested functions and closures
    A nested function is a function that is defined inside another function.
    A closure is a function that makes use of variables defined in outer functions that have previously returned.
*/

const incrementer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    console.log(counter);
  };

  return incrementCounter;
};

const myNewFunction = incrementer();
myNewFunction(); // counter is 1
myNewFunction(); // counter is 2

/ * ____________________________________________________________________________________________________ * /;

/*
Recursion
    A recursive function is a function that calls itself.
*/

const countDown = (num) => {
  if (num <= 0) {
    console.log('all done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

countDown(5); // 5 4 3 2 1 all done!

/ * ____________________________________________________________________________________________________ * /;
