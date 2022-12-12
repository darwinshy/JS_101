// Data Types
/ * ____________________________________________________________________________________________________ * /;

/* 
1. String
    String is a primitive data type in JavaScript.
    It is used to represent textual data.
    It is a sequence of characters.
*/

var a = 'javascript';
console.log(a); // javascript
console.log(typeof a); // string

/ * ____________________________________________________________________________________________________ * /;

/*
2. undefined
    undefined is a primitive data type in JavaScript.
    It is used to represent a variable that has not been assigned a value.
    It is also used to represent a function that does not return a value.
    undefined is a falsy value.
*/

var b;
console.log(b); // undefined
console.log(typeof b); // undefined

/ * ____________________________________________________________________________________________________ * /;

/*
3. null
    null is a primitive data type in JavaScript.
    It is used to represent a variable that has been assigned a value of null.
    It is also used to represent a function that returns a null value.
*/

var c = null;
console.log(c); // null
console.log(typeof c); // object

/*
4. Number
    Number is a primitive data type in JavaScript.
    It is used to represent numeric data.
    It is a 64-bit floating point number.
*/

var d = 10;
console.log(d); // 10
console.log(typeof d); // number

var d = 10.5;
console.log(d); // 10.5
console.log(typeof d); // number

/ * ____________________________________________________________________________________________________ * /;

/*
5. Boolean
    Boolean is a primitive data type in JavaScript.
    It is used to represent a logical entity and can have two values: true or false.
*/

var e = true;
console.log(e); // true

var e = false;
console.log(e); // false

/ * ____________________________________________________________________________________________________ * /;

/*
6. Symbol
    Symbol is a primitive data type in JavaScript.
    It is used to represent a unique identifier.
    It is a new data type introduced in ES6.
*/

var f = Symbol('javascript');
console.log(f); // Symbol(javascript)
console.log(typeof f); // symbol
console.log(f.description); // javascript

/ * ____________________________________________________________________________________________________ * /;

/*
7. BigInt
    BigInt is a primitive data type in JavaScript.
    It is used to represent a large integer.
    It is a new data type introduced in ES2020.
*/

var g = 1234567890123456789012345678901234567890n;
console.log(g); // 1234567890123456789012345678901234567890n
console.log(typeof g); // bigint

/ * ____________________________________________________________________________________________________ * /;

/*
8. Object
    Object is a non-primitive data type in JavaScript.
    It is used to represent a collection of data.
    It is a key-value pair.
*/

var h = {
  name: 'javascript',
  version: 1.0,
};

console.log(h); // { name: 'javascript', version: 1 }
console.log(typeof h); // object

/ * ____________________________________________________________________________________________________ * /;

/*
9. Array
    Array is a non-primitive data type in JavaScript.
    It is used to represent a collection of elements.
    It is a list of elements.
*/

var i = ['javascript', 'python', 'java'];
console.log(i); // [ 'javascript', 'python', 'java' ]
console.log(typeof i); // object

/ * ____________________________________________________________________________________________________ * /;


/*
10. Function
    Function is a non-primitive data type in JavaScript.
    It is used to represent a set of statements that perform a task or calculates a value.
*/

function j() {
  console.log('javascript');
}

console.log(j); // [Function: j]
console.log(typeof j); // function
j(); // javascript

/ * ____________________________________________________________________________________________________ * /;


/*
11. Date
    Date is a non-primitive data type in JavaScript.
    It is used to represent a date and time.
*/

var k = new Date();
console.log(k); // 2021-07-01T06:48:48.000Z
console.log(typeof k); // object

console.log(k.toDateString()); // Wed Jul 01 2021
console.log(k.toTimeString()); // 13:18:48 GMT+0530 (India Standard Time)
console.log(k.toLocaleDateString()); // 7/1/2021
console.log(k.toLocaleTimeString()); // 1:18:48 PM
console.log(k.toUTCString()); // Wed, 30 Jun 2021 22:48:48 GMT

/ * ____________________________________________________________________________________________________ * /;


/*
12. RegExp
    RegExp is a non-primitive data type in JavaScript.
    It is used to represent a regular expression.
*/

var l = /javascript/;
console.log(l); // /javascript/
console.log(typeof l); // object

/ * ____________________________________________________________________________________________________ * /;


/*
13. Map
    Map is a non-primitive data type in JavaScript.
    It is used to represent a collection of key-value pairs.
*/

var m = new Map();
m.set('name', 'javascript');
m.set('version', 1.0);
console.log(m); // Map(2) { 'name' => 'javascript', 'version' => 1 }

/ * ____________________________________________________________________________________________________ * /;


/*
14. Set
    Set is a non-primitive data type in JavaScript.
    It is used to represent a collection of unique values.
*/

var n = new Set();
n.add('javascript');
n.add('python');
n.add('java');

console.log(n); // Set(3) { 'javascript', 'python', 'java' }

/ * ____________________________________________________________________________________________________ * /;


/*
15. WeakMap
    WeakMap is a non-primitive data type in JavaScript.
    It is used to represent a collection of key-value pairs.
    It is a new data type introduced in ES6.
*/

var o = new WeakMap();

var key1 = {
  name: 'javascript',
};

o.set(key1, 'javascript');
console.log(o); // WeakMap { { name: 'javascript' } => 'javascript' }
console.log(o.get(key1)); // javascript

/ * ____________________________________________________________________________________________________ * /;


/*
16. WeakSet
    WeakSet is a non-primitive data type in JavaScript.
    It is used to represent a collection of unique values.
    It is a new data type introduced in ES6.
*/

var p = new WeakSet();

var key2 = {
  name: 'javascript',
};

p.add(key2);
console.log(p); // WeakSet { { name: 'javascript' } }
console.log(p.has(key2)); // true

/ * ____________________________________________________________________________________________________ * /;


/*

17. ArrayBuffer
    ArrayBuffer is a non-primitive data type in JavaScript.
    It is used to represent a fixed-length raw binary data buffer.
    It is a new data type introduced in ES6.
*/

var q = new ArrayBuffer(8);
console.log(q); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00 00 00>, byteLength: 8 }
console.log(q.byteLength); // 8

/ * ____________________________________________________________________________________________________ * /;


/*
18. SharedArrayBuffer
    SharedArrayBuffer is a non-primitive data type in JavaScript.
    It is used to represent a fixed-length raw binary data buffer.
    It is a new data type introduced in ES2017.
*/

var r = new SharedArrayBuffer(8);
console.log(r); // SharedArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00 00 00>, byteLength: 8 }
console.log(r.byteLength); // 8

/ * ____________________________________________________________________________________________________ * /;


/*
19. DataView
    DataView is a non-primitive data type in JavaScript.
    It is used to represent a low-level interface for reading and writing multiple number types in an ArrayBuffer regardless of the platform's endianness.
    It is a new data type introduced in ES6.
*/

var s = new DataView(new ArrayBuffer(8));

s.setInt8(0, 1);
s.setInt8(1, 2);
s.setInt8(2, 3);
s.setInt8(3, 4);
s.setInt8(4, 5);

console.log(s); // DataView { byteLength: 8, byteOffset: 0, buffer: ArrayBuffer { [Uint8Contents]: <01 02 03 04 05 00 00 00>, byteLength: 8 } }
console.log(s.getInt8(0)); // 1
console.log(s.getInt8(1)); // 2
console.log(s.getInt8(2)); // 3
console.log(s.getInt8(3)); // 4
console.log(s.getInt8(4)); // 5

/ * ____________________________________________________________________________________________________ * /;


/*
20. Promise
    Promise is a non-primitive data type in JavaScript.
    It is used to represent a proxy for a value not necessarily known when the promise is created.
    It is a new data type introduced in ES6.
*/

var t = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log('ran after 2 seconds'));
  }, 2000);
});

console.log(t); // Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 7, Symbol(trigger_async_id_symbol): 1}
console.log(typeof t); // object

t.then((value) => {
  value(); // ran after 2 seconds
});

/ * ____________________________________________________________________________________________________ * /;


/*
21. Generator
    Generator is a non-primitive data type in JavaScript.
    It is used to represent a function that returns a generator object.
    It is a new data type introduced in ES6.
*/

function* u() {
  yield 'javascript';
}

console.log(u); // [GeneratorFunction: u]
console.log(typeof u); // function

var v = u();
console.log(v); // [Generator] {}
console.log(typeof v); // object

console.log(v.next()); // { value: 'javascript', done: false }
console.log(v.next()); // { value: undefined, done: true }

/ * ____________________________________________________________________________________________________ * /;


/*
22. GeneratorFunction
    GeneratorFunction is a non-primitive data type in JavaScript.
    It is used to represent a function that returns a Generator object.
    It is a new data type introduced in ES6.
*/

var w = function* () {
  yield 'javascript';
};

console.log(w); // [GeneratorFunction: w]
console.log(typeof w); // function

/ * ____________________________________________________________________________________________________ * /;

