// Arithmetics

/*
    Any string involved in an arithmetic  operation is converted to a number.
    If the string cannot be converted to a number, the result is NaN.
    If the string is empty, the result is 0.
    If the string contains a number, the result is the number.
    If the string contains a number followed by other characters, the result is the number.
    If the string contains other characters, the result is NaN.
    If the string contains a number followed by a space, the result is the number.
    If the string contains a number followed by a space and other characters, the result is the number.
    If the string contains a space and other characters, the result is NaN.
    If the string contains a space, the result is NaN.
*/

/ * ____________________________________________________________________________________________________ * /;

/*
1. Addition

    Order of operations to resolve the addition operation:
        1. Number addition
        2. String concatenation

*/

console.log(1 + 1); // 2 // number addition
console.log('1' + '1'); // 11  // string concatenation
console.log(1 + '1'); // 11 // string concatenation
console.log('1' + 1); // 11 // string concatenation
console.log('hello' + 1); // hello1 // string concatenation
console.log(1 + 'hello'); // 1hello // string concatenation
console.log(1 + true); // 2 // true is converted to 1
console.log(1 + false); // 1 // false is converted to 0
console.log(1 + null); // 1 // null is converted to 0
console.log(1 + undefined); // NaN // undefined is converted to NaN
console.log(1 + {}); // 1[object Object] // object is converted to string
console.log(1 + []); // 1 // array is converted to string
console.log(1 + [1]); // 11 // array is converted to string
console.log(1 + [1, 2]); // 11,2 // array is converted to string
console.log(1 + function () {}); // 1function () {} // function is converted to string
console.log(1 + NaN); // NaN // NaN is not converted to anything

/ * ____________________________________________________________________________________________________ * /;

/*
2. Subtraction

    Order of operations to resolve the subtraction operation:
        1. Number subtraction
        2. String subtraction
*/

console.log(1 - 1); // 0 // number subtraction
console.log('1' - '1'); // 0 // string subtraction
console.log(1 - '1'); // 0 // string subtraction
console.log(1 - '111'); // -110 // string subtraction
console.log('111' - 1); // 110 // string subtraction
console.log('1' - 1); // 0 // string subtraction
console.log('hello' - 1); // NaN // string subtraction
console.log(1 - 'hello'); // NaN // string subtraction
console.log('hello' - 'world'); // NaN // string subtraction
console.log(1 - true); // 0 // true is converted to 1
console.log(1 - false); // 1 // false is converted to 0
console.log(1 - null); // 1 // null is converted to 0
console.log(1 - undefined); // NaN // undefined is converted to NaN
console.log(1 - {}); // NaN // object is converted to string
console.log(1 - []); // 1 // array is converted to string
console.log(1 - [1]); // 0 // array is converted to string
console.log(1 - [1, 2]); // NaN // array is converted to string
console.log(1 - function () {}); // NaN // function is converted to string
console.log(1 - NaN); // NaN // NaN is not converted to anything

console.log('' - 1); // -1 // string subtraction
console.log(' ' - 1); // -1 // string subtraction
console.log('12313k' - 1); // NaN // string subtraction

/ * ____________________________________________________________________________________________________ * /;

/*

3. Multiplication

    Order of operations to resolve the multiplication operation:
        1. Number multiplication
        2. String multiplication
*/

console.log(1 * 1); // 1 // number multiplication
console.log('1' * '1'); // 1 // string multiplication
console.log(1 * '1'); // 1 // string multiplication
console.log('1' * 1); // 1 // string multiplication
console.log('hello' * 1); // NaN // string multiplication
console.log(1 * 'hello'); // NaN // string multiplication
console.log('hello' * 'world'); // NaN // string multiplication
console.log(1 * true); // 1 // true is converted to 1
console.log(1 * false); // 0 // false is converted to 0
console.log(1 * null); // 0 // null is converted to 0
console.log(1 * undefined); // NaN // undefined is converted to NaN
console.log(1 * {}); // NaN // object is converted to string
console.log(1 * []); // 0 // array is converted to string
console.log(1 * [1]); // 1 // array is converted to string
console.log(1 * [1, 2]); // NaN // array is converted to string
console.log(1 * function () {}); // NaN // function is converted to string
console.log(1 * NaN); // NaN // NaN is not converted to anything

console.log('' * 1); // 0 // string multiplication
console.log(' ' * 1); // 0 // string multiplication
console.log('12313k' * 1); // NaN // string multiplication

/ * ____________________________________________________________________________________________________ * /;

/*

4. Division

    Order of operations to resolve the division operation:
        1. Number division
        2. String division

*/

console.log(1 / 1); // 1 // number division
console.log('1' / '1'); // 1 // string division
console.log(1 / '1'); // 1 // string division
console.log('1' / 1); // 1 // string division
console.log('hello' / 1); // NaN // string division
console.log(1 / 'hello'); // NaN // string division
console.log('hello' / 'world'); // NaN // string division
console.log(1 / true); // 1 // true is converted to 1
console.log(1 / false); // Infinity // false is converted to 0
console.log(1 / null); // Infinity // null is converted to 0
console.log(1 / undefined); // NaN // undefined is converted to NaN
console.log(1 / {}); // NaN // object is converted to string
console.log(1 / []); // Infinity // array is converted to string
console.log(1 / [1]); // 1 // array is converted to string
console.log(1 / [1, 2]); // NaN // array is converted to string
console.log(1 / function () {}); // NaN // function is converted to string
console.log(1 / NaN); // NaN // NaN is not converted to anything

console.log('' / 1); // 0 // string division
console.log(' ' / 1); // 0 // string division
console.log('12313k' / 1); // NaN // string division

/ * ____________________________________________________________________________________________________ * /;

/*

5. Modulus

    Order of operations to resolve the modulus operation:
        1. Number modulus
        2. String modulus

*/

console.log(1 % 1); // 0 // number modulus
console.log('1' % '1'); // 0 // string modulus
console.log(1 % '1'); // 0 // string modulus
console.log('1' % 1); // 0 // string modulus
console.log('hello' % 1); // NaN // string modulus
console.log(1 % 'hello'); // NaN // string modulus
console.log('hello' % 'world'); // NaN // string modulus
console.log(1 % true); // 0 // true is converted to 1
console.log(1 % false); // NaN // false is converted to 0

console.log('' % 1); // NaN // string modulus
console.log(' ' % 1); // NaN // string modulus
console.log('12313k' % 1); // NaN // string modulus

/ * ____________________________________________________________________________________________________ * /;

/*

6. Exponentiation

    Order of operations to resolve the exponentiation operation:
        1. Number exponentiation
        2. String exponentiation

*/

console.log(1 ** 1); // 1 // number exponentiation
console.log('1' ** '1'); // 1 // string exponentiation
console.log(1 ** '1'); // 1 // string exponentiation
console.log('1' ** 1); // 1 // string exponentiation
console.log('hello' ** 1); // NaN // string exponentiation
console.log(1 ** 'hello'); // NaN // string exponentiation
console.log('hello' ** 'world'); // NaN // string exponentiation
console.log(1 ** true); // 1 // true is converted to 1
console.log(1 ** false); // 1 // false is converted to 0

console.log('' ** 1); // NaN // string exponentiation
console.log(' ' ** 1); // NaN // string exponentiation
console.log('12313k' ** 1); // NaN // string exponentiation

/ * ____________________________________________________________________________________________________ * /;

/*

7. Left Shift

    Left shift is a bitwise operation. It is not a mathematical operation. It is not a string operation.

    Order of operations to resolve the left shift operation:
        1. Number left shift
        2. String left shift

*/

console.log(1 << 1); // 2 // number left shift
console.log('1' << '1'); // 2 // string left shift
console.log(1 << '1'); // 2 // string left shift
console.log('1' << 1); // 2 // string left shift
console.log('hello' << 1); // NaN // string left shift
console.log(1 << 'hello'); // NaN // string left shift
console.log('hello' << 'world'); // NaN // string left shift
console.log(1 << true); // 2 // true is converted to 1
console.log(1 << false); // 1 // false is converted to 0

console.log('' << 1); // 0 // string left shift
console.log(' ' << 1); // 0 // string left shift
console.log('12313k' << 1); // NaN // string left shift

/ * ____________________________________________________________________________________________________ * /;

/*

8. Right Shift

    Right shift is a bitwise operation. It is used to shift the bits of a number to the right by a specified number of bits. 
    The rightmost bits are lost and the leftmost bits are filled with 0s.

    Order of operations to resolve the right shift operation:
        1. Number right shift
        2. String right shift

*/

console.log(1 >> 1); // 0 // number right shift
console.log('1' >> '1'); // 0 // string right shift
console.log(1 >> '1'); // 0 // string right shift
console.log('1' >> 1); // 0 // string right shift
console.log('hello' >> 1); // NaN // string right shift
console.log(1 >> 'hello'); // NaN // string right shift
console.log('hello' >> 'world'); // NaN // string right shift
console.log(1 >> true); // 0 // true is converted to 1
console.log(1 >> false); // 1 // false is converted to 0

console.log('' >> 1); // 0 // string right shift
console.log(' ' >> 1); // 0 // string right shift
console.log('12313k' >> 1); // NaN // string right shift

/ * ____________________________________________________________________________________________________ * /;

/*

9. Unsigned Right Shift

    Unsigned right shift is the same as right shift except that the sign bit is ignored.

    Order of operations to resolve the unsigned right shift operation:
        1. Number unsigned right shift
        2. String unsigned right shift

*/

console.log(1 >>> 1); // 0 // number unsigned right shift
console.log('1' >>> '1'); // 0 // string unsigned right shift
console.log(1 >>> '1'); // 0 // string unsigned right shift
console.log('1' >>> 1); // 0 // string unsigned right shift
console.log('hello' >>> 1); // NaN // string unsigned right shift
console.log(1 >>> 'hello'); // NaN // string unsigned right shift
console.log('hello' >>> 'world'); // NaN // string unsigned right shift
console.log(1 >>> true); // 0 // true is converted to 1
console.log(1 >>> false); // 1 // false is converted to 0

console.log('' >>> 1); // 0 // string unsigned right shift
console.log(' ' >>> 1); // 0 // string unsigned right shift
console.log('12313k' >>> 1); // NaN // string unsigned right shift

/ * ____________________________________________________________________________________________________ * /;

/*

10. Less Than

    Order of operations to resolve the less than operation:
        1. Number less than
        2. String less than

*/

console.log(1 < 1); // false // number less than
console.log('1' < '1'); // false // string less than
console.log(1 < '1'); // false // string less than
console.log('1' < 1); // false // string less than
console.log('hello' < 1); // NaN // string less than
console.log(1 < 'hello'); // NaN // string less than
console.log('hello' < 'world'); // NaN // string less than
console.log(1 < true); // false // true is converted to 1
console.log(1 < false); // false // false is converted to 0

console.log('' < 1); // false // string less than
console.log(' ' < 1); // false // string less than
console.log('12313k' < 1); // NaN // string less than

/ * ____________________________________________________________________________________________________ * /;

/*

11. Greater Than

    Order of operations to resolve the greater than operation:
        1. Number greater than
        2. String greater than

*/

console.log(1 > 1); // false // number greater than
console.log('1' > '1'); // false // string greater than
console.log(1 > '1'); // false // string greater than
console.log('1' > 1); // false // string greater than
console.log('hello' > 1); // NaN // string greater than
console.log(1 > 'hello'); // NaN // string greater than
console.log('hello' > 'world'); // NaN // string greater than
console.log(1 > true); // false // true is converted to 1
console.log(1 > false); // true // false is converted to 0

console.log('' > 1); // false // string greater than
console.log(' ' > 1); // false // string greater than
console.log('12313k' > 1); // NaN // string greater than

/ * ____________________________________________________________________________________________________ * /;

/*

12. Less Than Or Equal To

    Order of operations to resolve the less than or equal to operation:
        1. Number less than or equal to
        2. String less than or equal to

*/

console.log(1 <= 1); // true // number less than or equal to
console.log('1' <= '1'); // true // string less than or equal to
console.log(1 <= '1'); // true // string less than or equal to
console.log('1' <= 1); // true // string less than or equal to
console.log('hello' <= 1); // NaN // string less than or equal to
console.log(1 <= 'hello'); // NaN // string less than or equal to
console.log('hello' <= 'world'); // NaN // string less than or equal to
console.log(1 <= true); // false // true is converted to 1
console.log(1 <= false); // false // false is converted to 0

console.log('' <= 1); // true // string less than or equal to
console.log(' ' <= 1); // true // string less than or equal to
console.log('12313k' <= 1); // NaN // string less than or equal to

/ * ____________________________________________________________________________________________________ * /;

/*

13. Greater Than Or Equal To

    Order of operations to resolve the greater than or equal to operation:
        1. Number greater than or equal to
        2. String greater than or equal to

*/

console.log(1 >= 1); // true // number greater than or equal to
console.log('1' >= '1'); // true // string greater than or equal to
console.log(1 >= '1'); // true // string greater than or equal to
console.log('1' >= 1); // true // string greater than or equal to
console.log('hello' >= 1); // NaN // string greater than or equal to
console.log(1 >= 'hello'); // NaN // string greater than or equal to
console.log('hello' >= 'world'); // NaN // string greater than or equal to
console.log(1 >= true); // true // true is converted to 1
console.log(1 >= false); // true // false is converted to 0

console.log('' >= 1); // true // string greater than or equal to
console.log(' ' >= 1); // true // string greater than or equal to
console.log('12313k' >= 1); // NaN // string greater than or equal to

/ * ____________________________________________________________________________________________________ * /;

/*

14. Instance Of

    Instance of is used to determine if an object is an instance of a constructor function. 
    It is used to determine if an object is an instance of a class. 
    It is used to determine if an object is an instance of a prototype.


    Order of operations to resolve the instance of operation:
        1. Number instance of
        2. String instance of

*/

console.log(1 instanceof 1); // false // number instance of
console.log('1' instanceof '1'); // false // string instance of
console.log(1 instanceof '1'); // false // string instance of
console.log('1' instanceof 1); // false // string instance of
console.log('hello' instanceof 1); // false // string instance of
console.log(1 instanceof 'hello'); // false // string instance of
console.log('hello' instanceof 'world'); // false // string instance of
console.log(1 instanceof true); // false // true is converted to 1
console.log(1 instanceof false); // false // false is converted to 0

console.log('' instanceof 1); // false // string instance of
console.log(' ' instanceof 1); // false // string instance of
console.log('12313k' instanceof 1); // false // string instance of

/ * ____________________________________________________________________________________________________ * /;

/*

15. In

    In is a binary operator that returns true if the specified property is in the specified object or its prototype chain.

    Order of operations to resolve the in operation:
        1. Number in
        2. String in

*/

console.log(1 in 1); // false // number in
console.log('1' in '1'); // false // string in
console.log(1 in '1'); // false // string in
console.log('1' in 1); // false // string in
console.log('hello' in 1); // false // string in
console.log(1 in 'hello'); // false // string in
console.log('hello' in 'world'); // false // string in
console.log(1 in true); // false // true is converted to 1
console.log(1 in false); // false // false is converted to 0

console.log('' in 1); // false // string in
console.log(' ' in 1); // false // string in
console.log('12313k' in 1); // false // string in



/ * ____________________________________________________________________________________________________ * /;

/*

16. Equal To

    Order of operations to resolve the equal to operation:
        1. Number equal to
        2. String equal to

*/

console.log(1 == 1); // true // number equal to
console.log('1' == '1'); // true // string equal to
console.log(1 == '1'); // true // string equal to
console.log('1' == 1); // true // string equal to
console.log('hello' == 1); // false // string equal to
console.log(1 == 'hello'); // false // string equal to
console.log('hello' == 'world'); // false // string equal to
console.log(1 == true); // true // true is converted to 1
console.log(1 == false); // false // false is converted to 0

console.log('' == 1); // false // string equal to
console.log(' ' == 1); // false // string equal to
console.log('12313k' == 1); // false // string equal to

/ * ____________________________________________________________________________________________________ * /;

/*

17. Not Equal To

    Order of operations to resolve the not equal to operation:
        1. Number not equal to
        2. String not equal to

*/

console.log(1 != 1); // false // number not equal to
console.log('1' != '1'); // false // string not equal to
console.log(1 != '1'); // false // string not equal to
console.log('1' != 1); // false // string not equal to
console.log('hello' != 1); // true // string not equal to
console.log(1 != 'hello'); // true // string not equal to
console.log('hello' != 'world'); // true // string not equal to
console.log(1 != true); // false // true is converted to 1
console.log(1 != false); // true // false is converted to 0

console.log('' != 1); // true // string not equal to
console.log(' ' != 1); // true // string not equal to
console.log('12313k' != 1); // true // string not equal to

/ * ____________________________________________________________________________________________________ * /;

/*

18. Strict Equal To

    Order of operations to resolve the strict equal to operation:
        1. Number strict equal to
        2. String strict equal to

*/

console.log(1 === 1); // true // number strict equal to
console.log('1' === '1'); // true // string strict equal to
console.log(1 === '1'); // false // string strict equal to
console.log('1' === 1); // false // string strict equal to
console.log('hello' === 1); // false // string strict equal to
console.log(1 === 'hello'); // false // string strict equal to
console.log('hello' === 'world'); // false // string strict equal to
console.log(1 === true); // false // true is converted to 1
console.log(1 === false); // false // false is converted to 0

console.log('' === 1); // false // string strict equal to
console.log(' ' === 1); // false // string strict equal to
console.log('12313k' === 1); // false // string strict equal to

/ * ____________________________________________________________________________________________________ * /;

/*

19. Strict Not Equal To



    Order of operations to resolve the strict not equal to operation:
        1. Number strict not equal to
        2. String strict not equal to

*/

console.log(1 !== 1); // false // number strict not equal to
console.log('1' !== '1'); // false // string strict not equal to
console.log(1 !== '1'); // true // string strict not equal to
console.log('1' !== 1); // true // string strict not equal to
console.log('hello' !== 1); // true // string strict not equal to
console.log(1 !== 'hello'); // true // string strict not equal to
console.log('hello' !== 'world'); // true // string strict not equal to
console.log(1 !== true); // true // true is converted to 1
console.log(1 !== false); // true // false is converted to 0

console.log('' !== 1); // true // string strict not equal to
console.log(' ' !== 1); // true // string strict not equal to
console.log('12313k' !== 1); // true // string strict not equal to

/ * ____________________________________________________________________________________________________ * /;

/*

20. Bitwise And

    Bitwise and is a binary operation that operates on two bit patterns or binary numerals. 
    It is similar to logical and, except that it operates on bits rather than boolean values. 
    It is a bitwise operation that is performed on each pair of corresponding bits, which is similar to the logical AND operator. 
    The result of the bitwise AND operation is 1 if both bits are 1, otherwise it is 0. The bitwise AND operation is denoted by the & operator.

    Order of operations to resolve the bitwise and operation:
        1. Number bitwise and
        2. String bitwise and

*/

console.log(1 & 1); // 1 // number bitwise and
console.log('1' & '1'); // NaN // string bitwise and
console.log(1 & '1'); // NaN // string bitwise and
console.log('1' & 1); // NaN // string bitwise and
console.log('hello' & 1); // NaN // string bitwise and
console.log(1 & 'hello'); // NaN // string bitwise and
console.log('hello' & 'world'); // NaN // string bitwise and
console.log(1 & true); // 1 // true is converted to 1
console.log(1 & false); // 0 // false is converted to 0

console.log('' & 1); // 0 // string bitwise and
console.log(' ' & 1); // 0 // string bitwise and
console.log('12313k' & 1); // 0 // string bitwise and

/ * ____________________________________________________________________________________________________ * /;

/*

21. Bitwise Xor

    Bitwise xor is a bitwise operation that returns 1 if the bits are different and 0 if the bits are the same.

    Order of operations to resolve the bitwise xor operation:
        1. Number bitwise xor
        2. String bitwise xor

*/

console.log(1 ^ 1); // 0 // number bitwise xor
console.log('1' ^ '1'); // NaN // string bitwise xor
console.log(1 ^ '1'); // NaN // string bitwise xor
console.log('1' ^ 1); // NaN // string bitwise xor
console.log('hello' ^ 1); // NaN // string bitwise xor
console.log(1 ^ 'hello'); // NaN // string bitwise xor
console.log('hello' ^ 'world'); // NaN // string bitwise xor
console.log(1 ^ true); // 0 // true is converted to 1
console.log(1 ^ false); // 1 // false is converted to 0

console.log('' ^ 1); // 1 // string bitwise xor
console.log(' ' ^ 1); // 1 // string bitwise xor
console.log('12313k' ^ 1); // 1 // string bitwise xor

/ * ____________________________________________________________________________________________________ * /;

/*

22. Bitwise Or

    Bitwise Or is the only operation that does not have a string operation.
    It will always resolve to a number.

    Order of operations to resolve the bitwise or operation:
        1. Number bitwise or
        2. String bitwise or

*/

console.log(1 | 1); // 1 // number bitwise or
console.log('1' | '1'); // NaN // string bitwise or
console.log(1 | '1'); // NaN // string bitwise or
console.log('1' | 1); // NaN // string bitwise or
console.log('hello' | 1); // NaN // string bitwise or
console.log(1 | 'hello'); // NaN // string bitwise or
console.log('hello' | 'world'); // NaN // string bitwise or
console.log(1 | true); // 1 // true is converted to 1
console.log(1 | false); // 1 // false is converted to 0

console.log('' | 1); // 1 // string bitwise or
console.log(' ' | 1); // 1 // string bitwise or
console.log('12313k' | 1); // 1 // string bitwise or

/ * ____________________________________________________________________________________________________ * /;

/*

23. Logical And

    Logical and is a short circuit operator. If the first operand is truthy, the second operand is returned. 
    If the first operand is falsy, the first operand is returned.

    Order of operations to resolve the logical and operation:
        1. Number logical and
        2. String logical and

*/

console.log(1 && 1); // 1 // number logical and
console.log('1' && '1'); // 1 // string logical and
console.log(1 && '1'); // 1 // string logical and
console.log('1' && 1); // 1 // string logical and
console.log('hello' && 1); // 1 // string logical and
console.log(1 && 'hello'); // hello // string logical and
console.log('hello' && 'world'); // world // string logical and
console.log(1 && true); // true // true is converted to 1
console.log(1 && false); // false // false is converted to 0

console.log('' && 1); // '' // string logical and
console.log(' ' && 1); // 1 // string logical and
console.log('12313k' && 1); // 1 // string logical and

/ * ____________________________________________________________________________________________________ * /;

/*

24. Logical Or

    Logical or is a short circuit operator. If the first operand is truthy, the first operand is returned.

    Order of operations to resolve the logical or operation:
        1. Number logical or
        2. String logical or

*/

console.log(1 || 1); // 1 // number logical or
console.log('1' || '1'); // 1 // string logical or
console.log(1 || '1'); // 1 // string logical or
console.log('1' || 1); // 1 // string logical or
console.log('hello' || 1); // hello // string logical or
console.log(1 || 'hello'); // 1 // string logical or
console.log('hello' || 'world'); // hello // string logical or
console.log(1 || true); // 1 // true is converted to 1
console.log(1 || false); // 1 // false is converted to 0

console.log('' || 1); // 1 // string logical or
console.log(' ' || 1); // 1 // string logical or
console.log('12313k' || 1); // 12313k // string logical or

/ * ____________________________________________________________________________________________________ * /;

/*

25. Nullish Coalescing

    Nullish coalescing is a logical operator that returns its right-hand side operand when its left-hand 
    side operand is null or undefined, and otherwise returns its left-hand side operand.

    Order of operations to resolve the nullish coalescing operation:
        1. Number nullish coalescing
        2. String nullish coalescing

*/

console.log(1 ?? 1); // 1 // number nullish coalescing
console.log('1' ?? '1'); // 1 // string nullish coalescing
console.log(1 ?? '1'); // 1 // string nullish coalescing
console.log('1' ?? 1); // 1 // string nullish coalescing
console.log('hello' ?? 1); // hello // string nullish coalescing
console.log(1 ?? 'hello'); // 1 // string nullish coalescing
console.log('hello' ?? 'world'); // hello // string nullish coalescing
console.log(1 ?? true); // 1 // true is converted to 1
console.log(1 ?? false); // 1 // false is converted to 0

console.log('' ?? 1); // 1 // string nullish coalescing
console.log(' ' ?? 1); // 1 // string nullish coalescing
console.log('12313k' ?? 1); // 12313k // string nullish coalescing

/ * ____________________________________________________________________________________________________ * /;

/*

26. Assignment

    Order of operations to resolve the assignment operation:
        1. Number assignment
        2. String assignment

*/

console.log(1 = 1); // 1 // number assignment
console.log('1' = '1'); // 1 // string assignment
console.log(1 = '1'); // 1 // string assignment
console.log('1' = 1); // 1 // string assignment
console.log('hello' = 1); // 1 // string assignment
console.log(1 = 'hello'); // hello // string assignment
console.log('hello' = 'world'); // world // string assignment
console.log(1 = true); // true // true is converted to 1
console.log(1 = false); // false // false is converted to 0

console.log('' = 1); // 1 // string assignment
console.log(' ' = 1); // 1 // string assignment
console.log('12313k' = 1); // 1 // string assignment

/ * ____________________________________________________________________________________________________ * /;

/*

27. Comma



    Order of operations to resolve the comma operation:
        1. Number comma
        2. String comma

*/

console.log(1 , 1); // 1 // number comma
console.log('1' , '1'); // 1 // string comma
console.log(1 , '1'); // 1 // string comma
console.log('1' , 1); // 1 // string comma
console.log('hello' , 1); // 1 // string comma
console.log(1 , 'hello'); // hello // string comma
console.log('hello' , 'world'); // world // string comma
console.log(1 , true); // true // true is converted to 1
console.log(1 , false); // false // false is converted to 0

console.log('' , 1); // 1 // string comma
console.log(' ' , 1); // 1 // string comma
console.log('12313k' , 1); // 1 // string comma

/ * ____________________________________________________________________________________________________ * /;

/*

28. Conditional

    Order of operations to resolve the conditional operation:
        1. Number conditional
        2. String conditional

*/

console.log(1 ? 1 : 1); // 1 // number conditional
console.log('1' ? '1' : '1'); // 1 // string conditional
console.log(1 ? '1' : '1'); // 1 // string conditional
console.log('1' ? 1 : '1'); // 1 // string conditional
console.log('hello' ? 1 : '1'); // 1 // string conditional
console.log(1 ? 'hello' : '1'); // hello // string conditional
console.log('hello' ? 'world' : '1'); // world // string conditional
console.log(1 ? true : '1'); // true // true is converted to 1
console.log(1 ? false : '1'); // false // false is converted to 0

console.log('' ? 1 : '1'); // 1 // string conditional
console.log(' ' ? 1 : '1'); // 1 // string conditional
console.log('12313k' ? 1 : '1'); // 1 // string conditional

/ * ____________________________________________________________________________________________________ * /;
