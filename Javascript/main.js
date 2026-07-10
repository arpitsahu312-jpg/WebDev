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


// Data types and type conversion

let year=19990;
console.log(year); //-> 1990
console.log(1991); //-> 1991
console.log("Alice"); //-> Alice

// typeof operator
console.log(typeof year); //-> number
console.log(typeof 1991); //->number

let new_name="Alice";
console.log(typeof new_name); //-> string
console.log(typeof "Bob"); //->string

let typeOfYear = typeof year;
console.log(typeOfYear); //-> number
console.log(typeof typeOfYear); //-> string

// Boolean
let isDataValid=true;
let isStringTooLong=false;
let isGameOver=false;
continueLoop=true;

console.log(false); //->false
console.log(typeof false); //->boolean
console.log(isDataValid); //->true
console.log(typeof isDataValid); //->boolean


// Number
const year1=1991;
let delayInSeconds=0.00016;
let area=(16*3.14);
let halfArea=area/2;

console.log(year1); //-> 1991
console.log(typeof year); //-> number;

let a=10; // decimal-default
let b=0x10; // hexadecimal
let c=0o10; // octal
let d=0b10; // binary

console.log(a); // ->10
console.log(b); // ->16
console.log(c); // ->8
console.log(d); // ->2

let x=9e3;
let y=123e-5;
console.log(x); //-> 9000
console.log(y); //-> 0.00123

a=1/0;
b=-Infinity;

console.log(a); // -> Infinity
console.group(b); //-> -Infinity
console.log(typeof a); //-> number
console.log(typeof b); //-> number

let s="it's definitely not a number";
let n1=s*10;
console.log(n1); //->NaN
console.log(typeof n1); //->number

//BigInt

let big=1234567890000000000000000n;
let big2=1n;

console.log(big); // ->1234567890000000000000000n
console.log(typeof big); //-> bigint

console.log(big2); //->1n
console.log(7n / 4n);//-> 1n

// let big3=1000n+20; // -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversion

// let big4=1000n/0n; //-> Uncaught RangeError: Division by zero

//Strings

let country="Malawi";
let continent="Africa";

console.log(country); //-> Malawi
console.log(typeof country); //-> string
console.log(continent); // ->Africa
console.log(typeof continent); //-> string

let message1="The vessel 'Mars' called at the port";
let message2='Cyclone "Cilida" to pass close to Mauritius';

console.log(message1); // -> The vessel 'Mars' called at the port
console.log(message2); // -> Cyclone "Cilida" to pass close to mauritius

let message_1="The vessel \"Mars\"called at the port";
let message_2='Cyclone \'Cilida\' to pass close to Mauritius';

console.log(message_1); // -> The vessel "Mars" called at the port
console.log(message_2); // -> Cyclone 'Cilida' to pass close to mauritius


let path = "C:\\Windows";
console.log(path); // -> C:\Windows

let path_1="C:\\Windows"  -  "Windows";
console.log(path_1);  //  ->  NaN
   
let  test1="100"-"10";
console.log(test1);  //  ->  90
console.log(typeof  test1);  //  ->  number


let path1="C:\\"+"Windows";
console.log(path1);  //  ->  C:\Windows
   
let test="100"+"10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string

//String Interpolation
let sentence=`${country} is located in ${continent}.`;
console.log(sentence);// -> Malawi is located in Africa.

// Autoboxing & Methods
let river="Mekong";
let character =river.charAt(2);
console.log(character); //-> k


// string methods

let  str  =  "java  script  language";
   
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
   
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
   
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
   
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// Undefined
let  declaredVar;
console.log(typeof  declaredVar);  //  ->  undefined
   
declaredVar  =  5;
console.log(typeof  declaredVar);  //  ->  number
   
declaredVar  =  undefined;
console.log(typeof  declaredVar);  //  ->  undefined
   
console.log(typeof  notDeclaredVar);  //  ->  undefined
// console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined

//Null
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object

// primitive construction functions

const  str_1  =  String();
const  num  =  Number();
const  bool  =  Boolean();
   
console.log(str_1);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
   
const  big1  =  BigInt(42);
console.log(big1);  //  ->  42n
   
// const  big_2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

// Conversions

const  num1  =  42;
console.log(num1);
console.log(typeof num1);
const  strFromNum1  =  String(num1);
console.log(strFromNum1);
console.log(typeof strFromNum1);
const  strFromNum2  =  String(8);
console.log(strFromNum2);
console.log(typeof strFromNum2);
const  strFromBool  =  String(true);
console.log(strFromBool);
console.log(typeof strFromBool);
const  numFromStr  =  Number("312");
console.log(numFromStr);
console.log(typeof numFromStr);
const  boolFromNumber  =  Boolean(0);
console.log(boolFromNumber);
console.log(typeof boolFromNumber);


// Conversion to String

let  str_2  =  "text";
let  strStr  =  String(str_2);
console.log(`${typeof  str_2}  :  ${str_2}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text
   
let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42
   
let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true
   
let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
   
let  N  =  null;
let  strN  =  String(N);
console.log(`${typeof  N}  :  ${N}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

// Conversion to Number

console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0

// Conversion to Boolean

console.log(Boolean(true));  //  ->  true
   
console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
   
console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false
   
console.log(Boolean(undefined));  //  ->  false
   
console.log(Boolean(null));  //  ->  false

// Conversions to BigInt

console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n
   
console.log(BigInt(true));  //  ->  1n
   
console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n
   
// console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
// console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
// console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

// Implicit Conversion
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number


//Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

let var1=32;
let var2=true;
let var3=1234567890000000n;
let var4="Arpit";
let var5=undefined;

let var_1=Number("327");
let var_2=Boolean(NaN);
let var_3=BigInt(123456);
let var_4=String(12344567);

//Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

console.log(`${var1} : ${typeof var1}`);
console.log(`${var2} : ${typeof var2}`);
console.log(`${var3} : ${typeof var3}`);
console.log(`${var4} : ${typeof var4}`);
console.log(`${var5} : ${typeof var5}`);
console.log(`${var_1} : ${typeof var_1}`);
console.log(`${var_2} : ${typeof var_2}`);
console.log(`${var_3} : ${typeof var_3}`);
console.log(`${var_4} : ${typeof var_4}`);

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

const value=Boolean(BigInt(Number(String("1234"))));
console.log(`${value}:${typeof value}`);

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

console.log(var1+var_1);
console.log(var2+var_2);
console.log(var3+var_3);
console.log(var4+var_4);
console.log(var5+undefined);

//Question 5: Try adding two values of different types and check the results.
console.log(var1+var2);
// console.log(var1+var3); -> Uncaught type error can't mix BigInt with other datatype
console.log(var1+var4);
console.log(var1+var5);

//Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)
const Str1=42+"1";
const Str_1=42+Number("1");
const Str3=42+ +"1";
console.log(`${Str1}:${typeof Str1}`);
console.log(`${Str_1}:${typeof Str_1}`);
console.log(`${Str3}:${typeof Str3}`);

// Complex Data Types

// Object

let  testObj  =  {};
console.log(typeof  testObj);  //  ->  object

let testObj1={
    nr:600,
    str:"Txt"
};

console.log(testObj1.nr); // -> 600
console.log(testObj1.str); // ->Txt

let name_1="Calavin";
let surname_1="Hart";
let age_1=66;
let email_1="CalvinMHart@teleworm.us";

let name_2="Mateus";
let surname_2="Pinto";
let age_2=21;
let email_2="MateusPinto@daryrep.com";

let user1=
{
    name:"Calavin",
    surname:"Hart",
    age:66,
    email:"CalMHart@teleworm.us"
};

let user2=
{
    name:"Mateus",
    surname:"Pinto",
    age:66,
    email:"MateusPinto@daryrep.com"
}

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Martus

console.log(user1.age); // -> 66
user1.age=67;
console.log(user1.age); // -> 67

console.log(user2.phone); // -> undefined
user2.phone="904-399-7557";
console.log(user2.phone); // -> 904-399-7557

delete user2.phone;
console.log(user2.phone); // -> undefined

// Arrays

let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

let  values  =  ["Test",  7,  12.3,  false];

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia

let  users  =[  
         {
                 name:  "Calvin",
                 surname:  "Hart",
                 age:  66,
                 email:  "CalvinMHart@teleworm.us"
         },
         {
                 name:  "Mateus",
                 surname:  "Pinto",
                 age:  21,
                 email:  "MateusPinto@dayrep.com"
         }
];
   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21

users[2]  =  {
         name:  "Irene",
         surname:  "Purnell",
         age:  32,
         email:  "IreneHPurnell@rhyta.com"
   
}
   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene

let  days_1  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(typeof  days_1);  //  ->  object

let  days1  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
let  day  =  "Sunday";
   
console.log(typeof  days1);  //  ->  object
console.log(typeof  day);  //  ->  string
   
console.log(days1  instanceof  Array);  //  ->  true
console.log(day  instanceof  Array);  //  ->  false

// Methos in Array

// Length
let  Names    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(Names.length);  //  ->  4
   
Names[5]  =  "Amelia";
console.log(Names.length);  //  ->  6
   
console.log(Names);  //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
console.log(Names[3]);  //  ->  Samuel
console.log(Names[4]);  //  ->  undefined
console.log(Names[5]);  //  ->  Amelia

//IndexOf
console.log(Names.indexOf("Mateo"));  //  ->  2
console.log(Names.indexOf("Victor"));  //  ->  -1

// Push
let  names1  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names1.length);  //  ->  4
   
names1.push("Amelia");
console.log(names1.length);  //  ->  5
console.log(names1);  //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

// Unshift
console.log(names1.unshift("Arpit"));
console.log(names1.length);
console.log(names1.indexOf("Arpit"));

//Pop
 names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
name  =  names.pop();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Samuel
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]

// Shift
names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
name  =  names.shift();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Olivia
console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]

// Reverse
 names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
names.reverse();
console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma","Olivia"]

names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
n1  =  names.slice(2);
console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
n2  =  names.slice(1,3);
console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
n3  =  names.slice(0,  -1);
console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
n4  =  names.slice(-1);
console.log(n4);  //  ->  ["Samuel"]
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]

// Concat
names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(  otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo","Samuel",  "William",  "Jane"]


/*Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:
starting station (key name from, give the name of the nearest station in your area as a value);
end station (key name to, give any other station within 100km as a value);
the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).
The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.*/

let trainticket={
    from:"BHOPAL",
    to:"Delhi",
    price:"$200",
}

console.log(trainticket.from);
console.log(trainticket.to);
console.log(trainticket.price);

//Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.

let variable={};
variable.name="Arpit";
variable.surname="Sahu";

console.log(variable.name);
console.log(variable.surname);

/*Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.*/

let bookrecord=[
    {
        title:"Speaking Javascript",
        author:"Axel Rauschmayer",
        pages:460
    },
    {
        title:"Programming JavaScript Applications",
        author:"Eric Elliott",
        pages:254
    },
    {
        title:"ECMAScript 6",
        author:"Nicholas C. Zakas",
        pages:352
    }
];

// Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.

bookrecord.push({
    title:"Learning JavaScript Desing Patterns",
    author:"Addy Osmani",
    pages:254
})

console.log(bookrecord.length);
console.log(bookrecord[0].title);
console.log(bookrecord[1].title);
console.log(bookrecord[2].title);
console.log(bookrecord[3].title);

//Question 5: Use the slice command to copy the last two books to the new array.

let record=bookrecord.slice(-2);
console.log(record);

//Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.

bookrecor=bookrecord.shift();
console.log(bookrecord.length);
console.log(bookrecord[0].title);
console.log(bookrecord[1].title);
console.log(bookrecord[2].title);

let pages=bookrecord[0].pages+bookrecord[1].pages+bookrecord[2].pages;
console.log(`Total pages:${pages}`);

/*Do you remember the contact list you created while doing the task from the previous Lab? You have to admit that at first glance it looked quite strange. We had to use nine variables to store information about just three users. What's worse, adding each new user would require the creation of three more variables. This is neither convenient nor practical. Fortunately, since then we have learned something about arrays and objects, which will allow us to save our list in a slightly more convenient way. Using the same data as in the previous Lab, create the contact list as an array, each element of which will be an object describing a single user. So we should get a three-element array, and each object placed in it will contain three pieces of information (name, phone, and email).

At the end of the list declared in this way, add a new contact using the appropriate array method. The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. Use the length property of the array to determine the index of the last element. Remember that the array elements are indexed starting at 0.*/

let contactlist=[{
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
}
];

contactlist.push({
    name:"Maisie Haley",
    phone:"0913 531 3030",
    email:"risus.Quisque@urna",
})

let l=contactlist.length;
console.log(`First contact: name:${contactlist[0].name}, phone:${contactlist[0].phone} ,email:${contactlist[0].email}`);
console.log(`First contact: name:${contactlist[l-1].name}, phone:${contactlist[l-1].phone} ,email:${contactlist[l-1].email}`);


// Comments

// Single line comments

//  This  is  a  single-line  comment
let  x1 =  42;  //  This  is  also  a  single  line  comment,  although  the  part  before  the  double  slash  is  proper  code  and  will  be  executed
//  This  line  and  the  next  one  will  be  ignored
//  x1  =  8;
console.log(x1);  //  ->  42

// MutiLine Commrents

/*
         This  is  a  block
         comment  and  it  can
         span  multiple  lines
   
         So  this  code  won't  be  executed
         console.log("Hello,  World!");
*/
   
let  y1  /*  because  no  better  name  */  =  42;
console.log(y1);

//Task: There’s a code that is currently not working. Try to fix it using only comments. Try, if possible, to use the keyboard shortcuts in your editor for this purpose.

"use  strict";  
   
const  prefix  =  "username_";  
   
let  userName  =  "Jack";  
// const  userName  =  "Adam";  
   
let  prefixedUserName;  
// const  prefixedUserName;  
   
userName  =  "John";  
prefixedUserName  =  prefix  +  userName;  
   
console.log(prefixedUserName  /*+  prefixedUserName2*/);  
// console.log(prefixedUserName2);
