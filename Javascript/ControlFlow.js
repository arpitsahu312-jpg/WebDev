 "use strict script";
let isUserReady = confirm("Are you ready?");
 
// if statement

if (isUserReady)
    console.log("User ready!");
    alert("User ready!");

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total_1 = unitPrice * pieces;
    console.log(total_1);
 }
// console.log(total_1); // -> Uncaught ReferenceError: total is not defined

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
console.log(shippingCost);

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 1;
}
console.log(shippingCost);

isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
}
 
if (isUserReady == false) {
    console.log("User not ready!");
}

// if-else statement

isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}

// if-else if statement

number = prompt("Enter a number", 0);
 
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}

const INSURANCE_COST = 2.99;

 shippingCost = 9.99;
let isOrderValid = true;

 userAge = 22;
 points = 400;
 cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;


if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}


if (isOrderValid) {
console.log(shippingCost);
} else {
console.log("Cannot order if under 21");
}

// conditional operator
price = 100;
shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

price = 100;
shippingCost = price > 50 ? 0 : 5;
 
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");

start = confirm("Start?");
message = start ? "Here we go!":"Aborted";
alert(message);

// Switch Statement
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}


/* Exercise 1: Write a script that will ask the user to input a number.

Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.*/

number=window.prompt("Enter a number:",0)
if(number>90 && number<110)
{
    alert("Bingo!");
}
else{
    alert("Miss");
}

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.

number=window.prompt("Enter  a random number");
message=(number>90 && number<110)?"Bingo!":"Miss";
alert(message);

/*
Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
*/

number1=Number(window.prompt("Enter the first number:",null));
number2=Number(window.prompt("Enter the second number:",null));
ch=window.prompt("Enter the operation to be performed");


if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
switch(ch)
{
    case "+":
        alert(number1+number2);
        break;
    
    case "-":
        alert(number1-number2);
        break;

    case "*":
        alert(number1*number2);
        break;

    case "/":
        alert(number1/number2);
        break;

    default:
        alert("Error :Invalid Operator");
}
}

else {
    alert( "Error: at least one of the entered values is not a number");
}

/*
During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.
*/

contacts = [{
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

length=contacts.length;

alert(" For showing the first contact enter (first), For showing the last contact enter (last), for adding a new contact enter (new)");
let op=Number(prompt('Enter your choice',0));

switch(op)
{
    case 1:
        alert(`name:${contacts[0].name} \n phone:${contacts[0].phone} \n email:${contacts[0].email}`);
        break;
    
    case 2:
       alert(`name:${contacts[length-1].name} \n phone:${contacts[length-1].phone} \n email:${contacts[length-1].email}`);
       break;

    case 3:
        let new_name=prompt("Enter the name of new contact");
        let new_phone=prompt("Enter the phone number of new contact");
        let new_email=prompt("Enter the email of new contact");
        if(new_name && new_email && new_phone)
        {
            contacts.push({name:new_name,phone:new_phone,email:new_email});
            alert("New contact added");
        }
        else
        {
            alert("Field missing");
        }
        break;

    default:
        alert("Invalid Choice");
}

//Loops

//While loop

console.log(0); // -> 0
console.log(10); // -> 10
console.log(20); // -> 20
console.log(30); // -> 30
console.log(40); // -> 40
console.log(50); // -> 50
console.log(60); // -> 60
console.log(70); // -> 70
console.log(80); // -> 80
console.log(90); // -> 90

n = 0;
console.log(n); // -> 0
n += 10;
console.log(n); // -> 10
n += 10;
console.log(n); // -> 20
n += 10;
console.log(n); // -> 30
n += 10;
console.log(n); // -> 40
n += 10;
console.log(n); // -> 50
n += 10;
console.log(n); // -> 60
n += 10;
console.log(n); // -> 70
n += 10;
console.log(n); // -> 80
n += 10;
console.log(n); // -> 90
n += 10;

n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

let isOver = false;
counter = 1;
 
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

isOver = false;
counter = 1;
 
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}

// do while

isOver;
counter = 1;
 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);


condition = false; 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);


// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for loop ->while loop
i = 0;
while (i < 10) {
    console.log(i);
i++;
}

values = [10, 30, 50, 100];
sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

values = [10, 30, 50, 100];
sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

//loops and arrays

names = [];
isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

values = [10, 30, 50, 100];
 
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}
 
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
 
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}

// for-of loop
values = [10, 30, 50, 100];
sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

values = [10, 30, 50, 100];
sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190

cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
 
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

// for in loop

user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};


console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};

// break statement

i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}
 
alert(`Exited the loop with a break (${i}).`);


//continue statement
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.

i=100
while(i>=0)
{
   console.log(i);
   i-=10;
}

/* Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
Check if the entered values are correct (that the initial value is greater than the final value).*/

let first=Number(prompt("Enter first number:"));
let last=Number(prompt("Enter the last number:"));

if(!Number.isNaN(first) && !Number.isNaN(last) && last<=first)
{
    for(i=first;i>=last;i-=10)
    {
        console.log(i);
    }
}
else
{
    alert("Invalid Input")
}

/*Exercise 3: There are ten different numbers in the following numbers array:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];


Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.*/ 

numbers=[21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for(i of numbers)
{
  console.log(i);
}

for(i of numbers)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

for(i of numbers)
{
    if(i>10 && i<60)
    {
        console.log(i);
    }
}

/*
Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.: */

isBool=true;
let movie=[];
while(isBool)
{
    let title_1=prompt("Enter the title of the book");
    if(title_1==null)
    {
        break;
    }
    let imbd_1=prompt("Enter the imbd rating:");
    if(imbd_1==null)
    {
        break;
    }
   movie.push({title:title_1,imbd:imbd_1});
}
console.log("All movies with imbd rating less than 7");
for(i of movie)
{
    if(i.imbd <7)
    {
        console.log(`${i.title}:${i.imbd}`);
    }
}
console.log("All movies with imbd rating greater than or equal to 7");
for(i of movie)
{
    if(i.imbd <=7)
    {
        console.log(`${i.title}:${i.imbd}`);
    }
}

// Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:
/*Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:


LATITUDE -> 40.07288 
LONGITUDE -> 154.48535 
COURSE -> 285.6 
SPEED -> 14.0 
IMO -> 9175717 
NAME -> MARENO

The code presented below is used for this. Complete the program by declaring the missing object in place of the three dots:


let vessel = ... 
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`);  */

vessel ={
    LATITUDE:40.07288, 
LONGITUDE:154.48535, 
COURSE:285.6, 
SPEED:14.0,
IMO:9175717, 
NAME:"MARENO"
}
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`);
}

/*
Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.
 */

let is_bool=true
while (is_bool) {
    firstNumber = prompt("Enter first number");
    secondNumber = prompt("Enter second number");
    operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
                is_bool=false;
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
        is_bool=false;
    }
    alert(result);
}

/*
We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.
*/

contacts = [{
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

is_bool=true;
while(is_bool)
{
length=contacts.length;
alert(" For showing the first contact enter (first) \n For showing the last contact enter (last) \n For showing all contacts enter (all) \n for adding a new contact enter (new) \n For exit the program enter (quit)");
op=prompt('Enter your choice');
switch(op)
{
    case "first":
        alert(`name:${contacts[0].name} \n phone:${contacts[0].phone} \n email:${contacts[0].email}`);
        break;
    
    case "last":
       alert(`name:${contacts[length-1].name} \n phone:${contacts[length-1].phone} \n email:${contacts[length-1].email}`);
       break;

    case "new":
        let new_name=prompt("Enter the name of new contact");
        let new_phone=prompt("Enter the phone number of new contact");
        let new_email=prompt("Enter the email of new contact");
        if(new_name && new_email && new_phone)
        {
            contacts.push({name:new_name,phone:new_phone,email:new_email});
            alert("New contact added");
        }
        else
        {
            alert("Field missing");
        }
        break;

    case "all":
        for(i of contacts)
        { 
         alert(`name:${i.name} \n phone:${i.phone} \n email:${i.email}`);
        }
        break;

    case "quit":
        is_bool=false;
        break;
        
    default:
        alert("Invalid Choice");
}
}