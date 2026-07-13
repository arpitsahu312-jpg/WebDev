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