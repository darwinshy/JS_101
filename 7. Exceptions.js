// Exceptions

/ * ____________________________________________________________________________________________________ * /;

/*   
    Exceptions are a way to handle errors in your code.
    Exceptions can be thrown and caught in your code to handle errors gracefully.
    You can throw an exception using the throw keyword.
    You can catch an exception using the try...catch statement.
    The try...catch statement allows you to specify a block of code to be tested for errors while it is being executed.
    The catch keyword lets you handle the error.
    The finally keyword lets you execute code, after try and catch, regardless of the result.
    The throw keyword lets you create custom errors.
    The Error object can be used for error handling.
*/

/ * ____________________________________________________________________________________________________ * /;

/*
    try...catch
    try...catch lets you handle errors gracefully.
    The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.
    try {
        try this code
    } catch (exception) {
        if an exception is thrown, execute this code
    }
*/

let hello = 'Hello World!';

try {
  hello.toUpperCase();
} catch {
  console.log('Error!');
}

/ * ____________________________________________________________________________________________________ * /;

/*
    throw
    The throw keyword is used to create custom errors.
    throw error;
*/

let number = 1;

try {
  if (number === 1) {
    throw 'That is a one!';
  }
} catch (error) {
  console.log(error);
}

/ * ____________________________________________________________________________________________________ * /;

/*
    finally
    The finally keyword lets you execute code, after try and catch, regardless of the result.
    try {
        try this code
    } catch (exception) {
        if an exception is thrown, execute this code
    } finally {
        execute this code after try...catch, regardless of the result
    }
*/

let hello1 = 'Hello World!';
try {
  hello1.toUpperCase();
} catch {
  console.log('Error!');
} finally {
  console.log('This will run no matter what.');
}

/ * ____________________________________________________________________________________________________ * /;

/*
    Error
    The Error object can be used for error handling.
    The Error object can be used to create custom errors.
*/

let number1 = 1;

try {
  if (number1 === 1) {
    throw new Error('That is a one!');
  }
} catch (error) {
  console.log(error.message);
}

/ * ____________________________________________________________________________________________________ * /;
