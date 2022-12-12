//  Loops and Iterations

/*
    Loops and Iterations
    Loops offer a quick and easy way to do something repeatedly.
    There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.
*/

/ * ____________________________________________________________________________________________________ * /;

/*
    for loop
    for (statement 1; statement 2; statement 3) {
        code block to be executed
    }

    statement 1 is executed (one time) before the execution of the code block.
    statement 2 defines the condition for executing the code block.
    statement 3 is executed (every time) after the code block has been executed.
*/

for (let i = 0; i < 5; i++) {
  console.log('in loop:', i);
}

console.log('loop finished');

/ * ____________________________________________________________________________________________________ * /;

/*
    while loop
    while (condition) {
        code block to be executed
    }
*/

let i = 0;

while (i < 5) {
  console.log('in loop:', i);
  i++;
}

console.log('loop finished');

/ * ____________________________________________________________________________________________________ * /;

/*
    do...while loop
    do {
        code block to be executed
    } while (condition);
*/

i = 5;

do {
  console.log('val of i is:', i);
  i++;
} while (i < 5);

/ * ____________________________________________________________________________________________________ * /;

/*
    for...in loop
    for (key in object) {
        code block to be executed
    }
*/

const person = {
  name: 'shaun',
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index, colors[index]);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    for...of loop
    for (variable of object) {
        code block to be executed
    }
*/

for (let color of colors) {
  console.log(color);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    break and continue
    break
    The break statement "jumps out" of a loop.
    break;
*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log('val of i is:', i);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    continue
    The continue statement "jumps over" one iteration in the loop.
    continue;
*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log('val of i is:', i);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    for...in
    for...in loops through the properties of an object.
*/

for (let key in person) {
  console.log(key, person[key]);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    for...of
    for...of loops through the values of an iterable object.
*/

colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    for...in vs for...of
    for...in loops through the properties of an object.
    for...of loops through the values of an iterable object.
*/

for (let key in person) {
  console.log(key, person[key]);
}

for (let color of colors) {
  console.log(color);
}

/ * ____________________________________________________________________________________________________ * /;
