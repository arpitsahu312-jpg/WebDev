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

result = add(5, 7);
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

//Parameter validation

function getMeanTempnew(temperatures) {
     if (!(temperatures instanceof Array)) {
         return NaN;
     }
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
console.log(getMeanTempnew(10));       // -> NaN
console.log(getMeanTempnew([10, 30])); // -> 20

// Recursion
function factorial (n) {
     let result = 1;
     while (n > 0) {
         result *= n;
         n--;
     }
     return result;
}
console.log(factorial(6)); // -> 720

function factorial_recursion(n)
{
     if(n<0) return 0;
     if(n==0) return 1;
     return n*factorial_recursion(n-1);
}
console.log(factorial_recursion(6));

// Fumction as first class members
function showMessage(message) {
     console.log(`Message: ${message}`);
}
let sm = showMessage;
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function

function doNothing() {
     return undefined;
}
a = doNothing(); // assign result of function call
b = doNothing;   // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

function addnew(a, b) {
     return a + b;
}
function multiplynew(a, b) {
     return a * b;
}
function operation(func, first, second) {
     return func(first, second);
}
console.log(operation(addnew, 10, 20)); // -> 30
console.log(operation(multiplynew, 10, 20)); // -> 200

//Function expressions
let myAdd = function(a, b) {
     return a + b;
}
console.log(myAdd(10, 20)); // -> 30

function operation1(func, first, second) {
     return func(first, second);
}
let myAdd1 = function(a, b) {
     return a + b;
}
console.log(operation1(myAdd1, 10, 20)); // -> 30
console.log(operation1(function(a, b) {
     return a * b;
}, 10, 20)); // -> 200

// Callbacks

// Synchronous
let inner = function() {
     console.log('inner 1');
}
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

// Asynchronous
inner = function() {
console.log('inner 1');
}
outer = function(callback) {
console.log('outer 1');
setTimeout(callback, 1000) /*ms*/;
console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

console.log("\n");

// setTimerOut && setIntervalFunction
inner = function() {
console.log('inner 1');
}
outer = function(callback) {
console.log('outer 1');
let timerId = setInterval(callback, 1000) /*ms*/;
console.log('outer 2');
setTimeout(function(){
     clearInterval(timerId);
}, 5500);
}
console.log('test 1');
outer(inner);
console.log('test 2');

// click function user-generated events
window.addEventListener("click", function() {
     console.log("clicked!");
});

// Arrow Function
add_new = (a, b) => a + b;
console.log(add_new(10, 20)); // -> 30

names = ['Alice', 'Eve', 'John'];
function showName(element) {
     console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John

//Exercise 1: Arrays in JavaScript have a sort method available which, as you might guess, allows you to sort its elements. This method takes as an argument a function that will compare two elements of the array. The function should return zero if we consider the arguments to be the same, a value less than zero if we consider the first one to be smaller than the second, and a value larger than zero otherwise. Take a look at the example:

numbers=[50,10,40,30,20];
let sorted=numbers.sort((a,b)=>{
     if(a==b) return 0;
     else if(a<b) return -1;
     return 1;
});
console.log(sorted);
sorted=numbers.sort((a,b)=>b-a);
console.log(sorted);

//Exercise 2: Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement.

function addnum(a,b)
{
     if(Number.isInteger(a) && Number.isInteger(b)) return a+b;
     return NaN;
}
function subnum(a,b)
{
     if(Number.isInteger(a) && Number.isInteger(b)) return a-b;
     return NaN;
}
function mulnum(a,b)
{
     if(Number.isInteger(a) && Number.isInteger(b)) return a*b;
     return NaN;
}
console.log(addnum(12,10));
console.log(subnum(12,10));
console.log(mulnum(12,10));
console.log(addnum("a","b"));

//Exercise 3: Rewrite the functions from the previous task using an arrow function expression, trying to write them in the shortest possible form.

addnum1=(a,b)=>Number.isInteger(a) && Number.isInteger(b) ? a+b:NaN;
subnum1=(a,b)=>Number.isInteger(a) && Number.isInteger(b) ? a-b:NaN;
mulnum1=(a,b)=>Number.isInteger(a) && Number.isInteger(b) ? a*b:NaN;
console.log(addnum1(12,10));
console.log(subnum1(12,10));
console.log(mulnum1(12,10));
console.log(addnum1("a","b"));

//Exercise 4: Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The callback function will accept the second and third arguments from the action call.

action=(callback,a,b)=>callback(a,b);
console.log(action(addnum1, 12, 10)); // -> 22
console.log(action(subnum1, 12, 10)); // -> 2
console.log(action(mulnum1, 10, 10.1)); // -> NaN

//Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
count=1;
let TimerId=setInterval(()=>console.log(count++),2000);
setTimeout(()=>clearInterval(TimerId),20000);

//Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence.This sequence is defined by a formula: F(n)={0,1,F(n-1)+F(n-2)};
// So each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).

function Fibonacci(n)
{
    if(n==1 || n==0) return n;
    return Fibonacci(n-1)+Fibonacci(n-2);
}
console.log(Fibonacci(1));// -> 1
console.log(Fibonacci(4)); // -> 3
console.log(Fibonacci(7)); // -> 13

//Exercise 7: Rewrite the function from Task 6 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use additional variables other than the parameter n).

let fib=(n)=>n==0||n==1? n:fib(n-1)+fib(n-2);
console.log(fib(1));// -> 1
console.log(fib(4)); // -> 3
console.log(fib(7)); // -> 13

//Exercise 8: Write an iterative version of the function from Exercise 6 (use the for loop). Declare the function using a function statement.

function Fibonacci_iterative(n)
{
     if(n==0||n==1) return n;
     let a=0;
     let b=1;
     let c;
     while(n>1)
     {
        c=a+b;
        a=b;
        b=c;
        n--;
     }
     return c;
}
console.log(Fibonacci_iterative(1));// -> 1
console.log(Fibonacci_iterative(4)); // -> 3
console.log(Fibonacci_iterative(7)); // -> 13

/*
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.

*/
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(contacts,index)
{
     if(contacts instanceof Array && index>=0 && index<contacts.length)
          {
          alert(`name:${contacts[index].name} \n phone:${contacts[index].phone} \n email:${contacts[index].email}`);
          return;
          }
     alert("Invalid Input");
     return;
}

function showAllContacts(contacts)
{
     if(contacts instanceof Array)
     {
          for(let i=0;i<contacts.length;i++)
          {
               alert(`name:${contacts[i].name} \n phone:${contacts[i].phone} \n email:${contacts[i].email}`);
          }
          return;
     }
     alert("Invalid Input");
     return;
}

function addNewContact(contacts,name,email,phone)
{
     if(contacts instanceof Array && name && email && phone)
     {
        contacts.push({name:name,phone:phone,email:email});
        alert("New contact added");
        return;
     }
     alert("Invalid Input");
     return;
}

is_bool=true;
while(is_bool)
{
alert(" For showing the first contact enter (first) \n For showing the last contact enter (last) \n For showing all contacts enter (all) \n for adding a new contact enter (new) \n For exit the program enter (quit)");
op=prompt('Enter your choice');
switch(op)
{
    case "first":
        showContact(contacts,0);
        break;
    
    case "last":
        showContact(contacts,contacts.length-1);
       break;

    case "new":
        let new_name=prompt("Enter the name of new contact");
        let new_phone=prompt("Enter the phone number of new contact");
        let new_email=prompt("Enter the email of new contact");
        addNewContact(contacts,new_name,new_phone,new_email);
        break;

    case "all":
        showAllContacts(contacts);
        break;

    case "quit":
        is_bool=false;
        break;
        
    default:
        alert("Invalid Choice");
}
}

/*
We will use the functions to add one more item of functionality. Arrays have a sort method that allows us to sort their elements. To this method, we pass a function which should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero, if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:
Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.
*/

function contactssort(contacts,way)
{
   switch(way)
   {
       case "name":
           contacts=contacts.sort((a,b)=>(a.name).length-b.name.length);
           break;
       case "phone":
           contacts=contacts.sort((a,b)=>(a.phone).length-b.phone.length);
           break;
      case "email":
           contacts=contacts.sort((a,b)=>(a.email).length-b.email.length);
           break;
      default:
          alert("Invalid Field");
   };
   return contacts;
}
contacts=contactssort(contacts,"name");


is_bool=true;
while(is_bool)
{
alert(" For showing the first contact enter (first) \n For showing the last contact enter (last) \n For showing all contacts enter (all) \n for adding a new contact enter (new) \n For sorting contacts enter (sort) \n For exit the program enter (quit)");
op=prompt('Enter your choice');
switch(op)
{
    case "first":
        showContact(contacts,0);
        break;
    
    case "last":
        showContact(contacts,contacts.length-1);
       break;

    case "new":
        let new_name=prompt("Enter the name of new contact");
        let new_phone=prompt("Enter the phone number of new contact");
        let new_email=prompt("Enter the email of new contact");
        addNewContact(contacts,new_name,new_phone,new_email);
        break;

    case "all":
        showAllContacts(contacts);
        break;

    case "sort":
        let way=prompt("Enter the field to be sorted by:");
        contacts=contactssort(contacts,way);
        break;

    case "quit":
        is_bool=false;
        break;
        
    default:
        alert("Invalid Choice");
}
}