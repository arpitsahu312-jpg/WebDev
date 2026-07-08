console.log("Hello,World!");
console.log("Arpit Sahu");
console.log("2007");
console.log(2007);
console.log("Arpit Sahu","\n","31-Oct-2007");
console.log("Arpit"+" "+"Sahu");


// Variables 
var height;
console.log(height); // -> undefined
// console.log(weight); // -> Uncaught Reference Error : weight is not defined

let length;
console.log(length); // ->undefined

var name;
var name;
console.log(height); // ->undefined

let size;
// let size;
// console.log(size); //-> Uncaught SyntaxError: Identifier 'size' has already been

let height1=180;
let anotherHeight=height1;
let weight1;
console.log(height1); //->180
console.log(anotherHeight); // ->180
weight1=70;
console.log(weight1); // ->70
console.log("height1"); // -> height1

let steps=100;
console.log(steps); //->100
steps=120; //->120
console.log(steps); //->120
steps=steps+200;
console.log(steps); //->320

let greeting="Hello!";
let counter=100;
console.log(greeting); //->Hello!
greeting=1;
console.log(greeting); //->1

greeting ="Hello!";
greeting =greeting+counter;
console.log(greeting); // ->Hello!100

//Constraints

const greet="Hello!";

// const age; // -> Uncaught SyntaxError : Missing initializer in const declaration
// age=10;

// greet="Hi"; //-> Uncaught TypeError:Assigment to constant variable

// Scope of variables & costraints

let count;
console.log(count); //->undefined
{
    count=1;
    console.log(count); // ->1
}
count=count+1;
console.log(count); //->2

let height_2=180;
{
    let weight_1=70;
    console.log(height_2); // ->180
    console.log(weight_1); //->70
}
console.log(height_2); // ->180
// console.log(weight_1); //->Uncaught ReferenceError: weight_1 is not defined

let h1=200;
{
    let w1=100;
    {
        let info ="tall";
        console.log(h1); //->200
        console.log(w1); //->100
        console.log(info); //->tall
    }
     console.log(h1); //->200
     console.log(w1); //->100
    // console.log(info); //->Uncaught ReferenceError: info is not defined
}

var h2=180;
{
   var w2=70;
   console.log(h2); //->180
   console.log(w2); //->70
}
console.log(h2); // ->180
console.log(w2); // ->70

function testFunction()
{
    console.log("Hello");
    console.log("World");
}

testFunction(); // -> function call

console.log("Let's begin:");
testFunction();
console.log("and again:");
testFunction();
console.log("and once more:");
testFunction();

var globalGreeting="Good";

function  TestFunction(){
    var localGreeting ="Morning";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

TestFunction();

console.log("Main program:");
console.log(globalGreeting);
// console.log(localGreeting); // ->Uncaught ReferenceError: localGreeting is not defined

// Variable shadowing
let temp=100;
console.log(temp); // ->100
{
    let temp=200;
    console.log(temp); // ->200
}
console.log(temp); //-> 100

var n=100;

function func()
{
    var n=200;
    console.log(n);
}
console.log(n); //->100
func(); //->200
console.log(n); //->100

// Hosting
var h3=180;
console.log(h3); //->180
console.log(w3); //-> undefined
var w3=70;
console.log(w3); //->70

/* Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)
*/

const u_rose=8;
const u_lily=10;
const u_tulip=2;

let q_rose=70;
let q_lily=50;
let q_tulip=120;

let total=u_rose*q_rose+u_lily*q_lily+u_tulip*q_tulip;

console.log("Rose - unit price:",u_rose,", quantity:",q_rose,", value:",u_rose*q_rose)
console.log("Lily - unit price:",u_lily,", quantity:",q_lily,", value:",u_lily*q_lily)
console.log("Tulip - unit price:",u_tulip,", quantity:",q_tulip,", value:",u_tulip*q_tulip)
console.log("Total: ", total);

/*Question 2: Modify the code from the previous example.

Assume that the prices of flowers will be constant (they will not change). Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.

Display all the collected information in the console again.
*/

q_rose=q_rose-20;
q_lily=q_lily-30;
total=u_rose*q_rose+u_lily*q_lily+u_tulip*q_tulip;
console.log("Rose - unit price:",u_rose,", quantity:",q_rose,", value:",u_rose*q_rose)
console.log("Lily - unit price:",u_lily,", quantity:",q_lily,", value:",u_lily*q_lily)
console.log("Tulip - unit price:",u_tulip,", quantity:",q_tulip,", value:",u_tulip*q_tulip)
console.log("Total: ", total);

let name1="Maxwell Wright";
let name2="Raja Vilarrela";
let name3="Helen Richards";

let Phone1="(0191) 719 6495";
let Phone2="0866 398 2895";
let Phone3="0800 1111";

let email1="Curabitur.egestas.nunc@nonummyac.co.uk";
let email2="posuere.vulputate@sed.com";
let email3="libero@convallis.edu";

console.log("Name"," ","Phone"," ","Email");
console.log(name1," ",Phone1," ",email1);
console.log(name2," ",Phone2," ",email2);
console.log(name3," ",Phone3," ",email3);