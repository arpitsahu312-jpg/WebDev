"use strict script";
let temperatures;
sum;
let meanTemp;
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
     sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

// Function
function getMeanTemp(temperatures) {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;   
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(temperatures)}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(temperatures)}`); // -> mean: 18.083333333333332

name = "Alice";
function showName() {
     console.log(name);
}
showName(); // -> Alice

// return statement

function showMsg() {
     console.log("message 1");
     return;
     console.log("message 2");
}
showMsg(); // -> message 1

function getTrue() {
     return true;
}
test = getTrue();
console.log(test); // -> true

function add(first, second) {
return first + second;
}

let result = add(5, 7);
console.log(result); // -> 12

function getElement(elements, index) {
return elements[index];
}

names = ["Alice", "Bob", "Eve", "John"];
name = getElement(names, 2);
console.log(name); // -> Eve


first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120

a = 100, b = 200, c = 300;
function test_1(a) {
     let b = 10;
     console.log(a); // parameter a
     console.log(b); // local variable b
     console.log(c); // global variable c
}
test_1(1);   // -> 1
      // -> 10
      // -> 300
console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
