"use strict script";
 
// Assigment Operators

let name="Alice";
console.log(name);

// let year=2050;
let newYear = year =2051;
console.log(newYear);

console.log(2+2*2);//-> 6
console.log(2+(2*2));//-> 6
console.log((2+2)*2);//-> 8

// Arithmetic operator
a=5;
b=2;
console.log("addition: ",a+b); //-> 7
console.log("substraction: ",a-b); //-> 3
console.log("multiplication: ",a*b); //->10
console.log("division: ",a/b); //-> 2.5
console.log("division remainder: ",a%b); //->1
console.log("exponent: ", a**b); //-> 25

// Unary aritmetic operators

str = "123";
 n1 = +str;
 n2 = -str;
 n3 = -n2;
 n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

// Unary increment and decrement operator

 n1 = 10;
 n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

 n3 = 20;
 n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19

console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996

// Compound Assignment Operator

x = 10;
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4

// Logical Operators

// AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

//OR
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

// NOT
console.log(!true); // -> false
console.log(!false); // -> true

 a = false;
 b = true;
 c = false;
 d = true;
 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

 nr = 0;
 year = 1970;
 name = "Alice";
let empty = "";
 
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
 
console.log(!!nr); // -> false
console.log(!!name); // -> true

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

// Logiacl operators and non-Boolean values

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

// short- circuit evaluation
x = 0;
y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0

// Compound Assigment Operators

a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true

//Exercise 1: Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):

/*
console.log(2 _ 3 _ 1);      // expected 7  
console.log(2 _ 4);          // expected 16  
console.log(5 _ 1);          // expected 5  
console.log(8 _ 2 _ 5 _ 2);   // expected 39
 */

console.log(2 +3+1);      // expected 7  
console.log(2**4);          // expected 16  
console.log(5/1);          // expected 5  
console.log(8**2-5**2);   // expected 39

/*
Exercise 2: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):

console.log(4 * 5 _ 20);
console.log(6 * 5 _ "30");
console.log(-17 _ 0);  
console.log(25 _ 1);  
console.log(2 + 2 * 2 _ 4);
*/

console.log(4 * 5==20);
console.log(6 * 5=="30");
console.log(-17<0);  
console.log(25>1);  
console.log(2 + 2 * 2 !=4);

/*
Exercise 3: Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):

console.log(true _ false);  
console.log(false _ false);  
console.log(false _ false _ true);  
console.log(true _ false _ false && true);
*/
 
console.log(true || false);  
console.log(false || ! false);  
console.log(false || false || true);  
console.log(true || false && false && true);

// String comparison and other js operator

greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
 
sentence = "Happy New Year ";
let newSentence = sentence + 10191;
 
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true

// Other operators

// typeof

year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

//Instaneof

names = ["Patti", "Bob"];
name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

// delete
user = {
     name: "Alice",
     age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

// ternary
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob

