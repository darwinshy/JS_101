// Control Flow

/ * ____________________________________________________________________________________________________ * /;

/*
Control Flow
    
    The order in which the computer executes statements in a script.
    Control flow is managed by conditional statements, loops, and function calls.
    Conditional statements allow your code to make decisions about what to do next.
    Loops allow you to repeat a set of statements.
    Function calls allow you to write reusable code.

Conditional Statements

    Conditional statements are used to alter the control flow of a program, based on a specified boolean condition.
    The condition is usually a comparison between two values, but it can also be the result of a function call.
    There are three types of conditional statements:
        if statements
        if...else statements
        switch statements
*/

/ * ____________________________________________________________________________________________________ * /;

/*
if statements

    An if statement checks a condition and will execute a statement if the condition evaluates to true.
    if (condition) {
        statement
    }
*/

if (true) {
  console.log('This message will always print');
}

if (false) {
  console.log('This message will never print');
}

let sale1 = true;
sale1 = false;

if (sale1) {
  console.log('Time to buy!');
}

/ * ____________________________________________________________________________________________________ * /;

/*
if...else statements

    An if...else statement checks a condition.
    If the condition evaluates to true, the first statement executes.
    If the condition evaluates to false, the second statement executes.
    if (condition) {
        statement1
    } else {
        statement2
    }
*/

if (false) {
  console.log(
    'The condition in this statement is false, so this message will not print!',
  );
}

if (false) {
  console.log(
    'The condition in this statement is false, so this message will not print!',
  );
} else {
  console.log('Since the condition is false, this message will print!');
}

let sale2 = true;
sale2 = false;

if (sale2) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

/ * ____________________________________________________________________________________________________ * /;

/*
Switch Statements

    A switch statement can be used to simplify the process of writing multiple else if statements.
    The break keyword stops the remaining cases from being checked and executed in a switch statement.
    switch (expression) {
        case value1:
            statement1
            break;
        case value2:
            statement2
            break;
        ...
        default:
            defaultStatement
    }
*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

/ * ____________________________________________________________________________________________________ * /;
