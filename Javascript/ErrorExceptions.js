"use strict script"

// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);

// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);

// let multiply = (a, b) => a + b;  
// let result = multiply(10, 20);
// console.log(result); // -> 30  // -> Logical Error

let multiply = (a, b) => a * b;
let result = multiply(10, 20);
console.log(result); // -> 200

// try and catch
try {
    console.log('abc'); // -> abc
    conole.log('abc');
} 
catch (error) {  
    console.log(error.message); // -> conole is not defined 
}

// errors without exceptions
console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
x = Number(sX);
y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}

// basic errors

// Reference error
try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!

// Type error

try {
    const someConstValue = 5;
    someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

} catch (error) {
   console.log("Caught " + error); // -> Caught TypeError: Assignment to constant variable.
}
console.log("We handled the exception!"); // -> we handled the exception!


try {
    let someNumber = 10;
    someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function


} catch (error) {
   console.log("Caught " + error); // -> Caught TypeError: someNumber.length is not a function
}
console.log("We handled the exception!"); // -> we handled the exception!

// Range error

try {
    let testArray1 = Array(10);
   console.log(testArray1.length); // -> 10
    let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
    console.log(testArray2.length);



} catch (error) {
   console.log("Caught " + error); // -> Caught RangeError: Invalid array length
}
console.log("We handled the exception!"); // -> we handled the exception!

// conditional exception handling

a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2

// The finally statement 

a= 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5

// a = 10;
// try {
//     a = b;  // ReferenceError
// } finally {
//     console.log(a); // -> 10
// }
// console.log(a);

a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10

// Try .. catch ... finally
a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}

// throw statement and custom error

// console.log("start"); // -> start
// throw 100; // -> Uncaught 100
// console.log("end");

console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

try{
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
}
catch(error)
{
    console.log(error);
}

/*
Exercise 1: Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.
*/

function div(a,b)
{
    if(b==0)
    {
        throw new RangeError("Can't divide by zero");
    }
    console.log(`${a}/${b}=${a/b}`);
}

try{
    div(10,2);
    div(100,0);
}
catch(error)
{
    console.log(error);
}

/*
Exercise 2: The following array of numbers has been declared:
let numbers = [10, 40, 0, 20, 50];
Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).
*/

numbers = [10, 40, 0, 20, 50];
for(i of numbers)
{
    try{
        div(1000,i);
    }
    catch(error)
    {
        console.log(error);
    }
}