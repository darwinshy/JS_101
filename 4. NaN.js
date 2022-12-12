// NaN

/*
    NaN is a property of the global object. In other words, it is a variable in global scope. 
    The initial value of NaN is Not-A-Number.

    NaN is a variable in global scope
    NaN is a property of the global object
    NaN is a property of the window object
    NaN is a property of the globalThis object

    NaN is a number
    NaN is a primitive value
    NaN is a primitive number
    NaN is a primitive data type

*/

console.log(NaN); // NaN

let a = NaN;
console.log(a); // NaN

console.log(typeof NaN); // number

/*

    If NaN is involved in a mathematical operation (but not bitwise operations), the result is usually also NaN.
    When NaN is one of the operands of any relational comparison (>, <, >=, <=), the result is always false.
    NaN compares unequal (via ==, !=, ===, and !==) to any other value — including to another NaN value.

*/

console.log(NaN + 1); // NaN
console.log(NaN - 1); // NaN
console.log(NaN * 1); // NaN
console.log(NaN / 1); // NaN
console.log(NaN % 1); // NaN
console.log(NaN ** 1); // NaN
console.log(NaN & 1); // 0
console.log(NaN | 1); // 1
console.log(NaN ^ 1); // 1
console.log(NaN << 1); // 0
console.log(NaN >> 1); // 0
console.log(NaN >>> 1); // 0

console.log(NaN > 1); // false
console.log(NaN < 1); // false
console.log(NaN >= 1); // false
console.log(NaN <= 1); // false

if (a === a) {
  console.log('a is equal to a'); // nothing is printed because NaN is not equal to NaN
}

if (a !== a) {
  console.log('a is not equal to a'); // a is not equal to a
}

if (a == a) {
  console.log('a is equal to a'); // nothing is printed because NaN is not equal to NaN
}

if (a != a) {
  console.log('a is not equal to a'); // a is not equal to a
}

/*
There are five different types of operations that return NaN:

    Failed number conversion (e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))
    Math operation where the result is not a real number (e.g. Math.sqrt(-1))
    Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
    A method or expression whose operand is or gets coerced to NaN (e.g. 7 ** NaN, 7 * "blabla") — this means NaN is contagious
    Other cases where an invalid value is to be represented as a number (e.g. an invalid Date new Date("blabla").getTime(), "".charCodeAt(1))

*/

console.log(Number('blabla')); // NaN
console.log(parseInt('blabla')); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(0 * Infinity); // NaN
console.log(1 ** Infinity); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity - Infinity); // NaN
console.log(7 ** NaN); // NaN
console.log(7 * 'blabla'); // NaN
console.log(new Date('blabla').getTime()); // NaN
console.log(''.charCodeAt(1)); // NaN
