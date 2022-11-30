// What is JavaScript?
//JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.
// JavaScript is the programming language of the Web.
//avaScript is Case Sensitive
//interpreted language
// JavaScript is easy to learn.
//JavaScript to program the behavior of web pages.

//JavaScript to program the behavior of web pages.


//Single line comments start with //.
// Multi-line Comments
// Multi-line comments start with /* and end with */.
// Any text between /* and */ will be ignored by JavaScript.

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/

//JavaScript accepts both double and single quotes:
// console.log("hello");
// console.log('object');


//output
// JavaScript Display Possibilities
// Writing into an HTML element, using innerHTML.

//1- Using innerHTML
// To access an HTML element, JavaScript can use the document.getElementById(id) method.
//  document.getElementById("demo").innerHTML = 5 + 6;

// Using document.write()
// For testing purposes, it is convenient to use document.write():
// document.write('hello')


// Writing into an alert box, using window.alert().

// window.alert('h');


// Writing into the browser console, using console.log().
// Using console.log() you can call the console.log() method in the browser to display data.
// console.log(5 + 6);

//hide an element, set the style display property to “none”.
//document.getElementById("change").style.display = "none";

//JavaScript Statements
//  let x, y, z;    // Statement 1
//  x = 5;          // Statement 2
// y = 6;          // Statement 3
// z = x + y; 
// console.log(z)

// Add a semicolon at the end of each executable statement:

// When separated by semicolons, multiple statements on one line are allowed:
// a = 5; b = 6; c = a + b;
// console.log(c);
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable
// // let person ="Hello";
// let person="Hi";

// console.log(person);

// function myFunction() {
//     document.getElementById("demo1").innerHTML = "Hello Dolly!";
//     document.getElementById("demo2").innerHTML = "How are you?";
//   }

// JavaScript Variables
// Using var
// Using let
// Using const 
// Using nothing

//var
// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

//let
// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);

// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// let x = "hello";
// let x = 0;
// SyntaxError: 'x' has already been declared



//const
// const price1 = 5;
// price1 =10;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total);

//Block Scope
// Variables declared inside a { } block cannot be accessed from outside the block:
//  {
//      var x = 2;
// console.log(x);
//   }
  // x can NOT be used here
// console.log(x);
// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// {
//     var x = 2;
    
//   }
  // x CAN be used here
 
//   Redeclaring Variables
//   Redeclaring a variable using the var keyword can impose problems.
//   Redeclaring a variable inside a block will also redeclare the variable outside the block:
// var  x = 15;
// // Here x is 15

// {  
// var x = 20;
// console.log(x);
// // Here x is 20
// }
// console.log(x);
// Here x is 20


// Redeclaring a variable inside a block will not redeclare the variable outside the block:
// let x = 10;
// {
// let x = 2;
// }


//Redeclaring a JavaScript variable with var is allowed anywhere in a program:
// var x = 2;
// // Now x is 2
// var x = 3;
// Now x is 3
// document.getElementById("demo").innerHTML = x;

// With let, redeclaring a variable in the same block is NOT allowed:
// var x = 2;   // Allowed
// let x = 3;   // Not allowed
//  {
// let x = 2;   // Allowed
// // let x = 3;
// console.log(x);   // Not allowed
//  }
// //  console.log(x);

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }

// Redeclaring a variable with let, in another block, IS allowed
// let x = 2;   // Allowed

// {
// let x = 3;   // Allowed
// }

// {
// let x = 4;    // Allowed
// }


//Const
// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope
// const P = 3;
// P = 33;      // This will give an error
// P = PI + 10;   // This will also give an error



// x = 5;
// y = 6;
// z = x + y;
// x stores the value 5
// y stores the value 6
// z stores the value 11

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.
// let $ = "Hello World";
// let $$$ = 2;
// let $myMoney = 5;
// let _lastName = "Johnson";
// let _x = 2;
// let _100 = 5;



// Declaring a JavaScript Variable
// var carName;
// let carName;

// let carName = "Volvo"; //create a variable called carName and assign the value "Volvo" to it.

// One Statement, Many Variables
// let person = "John Doe", carName = "Volvo", price = 200;

// Value = undefined
// A variable declared without a value will have the value undefined.
// let carName;

// Re-Declaring JavaScript Variables
// var carName = "Volvo";
// var carName;

// You cannot re-declare a variable declared with let or const.
// let carName = "Volvo";
// let carName;

//start
//1

// console.log("This program adds 1, 2 and 54")

// function addThreeNumbers(a, b, c) {
//     return a + b + c;
// }
// let c = addThreeNumbers(1, 2, 54)
// console.log(c)




// rules of choosing variable
// letter digit underscor $ &
//must begin with a $ _ letter 
//reserves keworrd not use
//case sensitive
// let $ =5;
// console.log($);

// let var = 6;
// console.log(var); not valid


//2

// console.log("hello ")
// var a = 60 // a contains 60
// console.log(a)
// a = "sunday"
// console.log(a)
// let 8sun = 4 // Not allowed this will throw an error
// let var = 7

//3
// console.log(" var, let and const")
// var a = 45;
// //  var a = p"'
// console.log(a);
// // let b = "Hello";
// const author = "Hello"
// author = 5 // Throws an error because constant cannot be changed
// b = 4
// const hello = 0;
// let c = null
// console.log(c);
// let d  = undefined  
// {
//   var b = 'this'
//   console.log(b)//this
// }
// console.log(b)//this

// {
//   let b = 'this'
//   console.log(b)//this
// }

//4
// nn bb ss u - Primitives in Js
// let a = null;
// console.log(a);
// let b = 345;
//  let c = true;
//  console.log(c);// // can also be false

//  let d = BigInt("567") + BigInt("3")
// console.log(d);
// let e = "Harry"
// let f = Symbol("I am a nice symbol")
// let g
// console.log(a, b, c , d, e, f, g)
// console.log(typeof c)

// // Non Primitive Data Type - Objects in Js
// const item = {
//   "Harry": true,
//   "Shubh": false,
//   "Lovish": 67,
//   "Rohan": undefined
// }
// console.log(item["Shubh"])

// //practice


// // Chapter 1 - Q1
// let a = "HELLO"
// let b = 6
// console.log(a + b)

// // Chapter 1 - Q2
// console.log(typeof (a+b))

// // Chapter 1 - Q3
// const a1 = {
//   name: "Harry",
//   section: 1,
//   isPrincipal: false
// }
// // a1 = 45
// // a1 = {}

// // Chapter 1 - Q4
// a1['friend'] = "Shubham"  
// a1['name'] = "Lovish"  
// console.log(a1)

// // Chapter 1 - Q5
// const dict = {
//   appreciate: "recognize the full worth of.",
//   ataraxia: "a state of freedom from emotional disturbance and anxiety",
//   yakka: "work, especially hard work."
// }
// console.log(dict.ataraxia);
// console.log(dict['yakka'])


//5
// console.log("Operators in Js")
// // Arithmetic Operators 
// let a = 10;
// let b = 4;
// console.log("a + b = ", a + b)
// console.log("a - b = ", a - b)
// console.log("a / b = ", a / b)
// console.log("a * b = ", a * b)
// console.log("a ** b = ", a ** b)
// console.log("a % b = ", a % b)
//  icrement and dicreament
 //a++   a= a+1 
//a-- a= a-1
// post increament a++ //10  a=a+1 //11 a//11  
// post dicreament a-- //10   a =a-1  //9    a/9
// ++a pre increment  //11  a//11
// --a pre dicreament //9   a//9

// let a = 10;
// let b = 4;

// console.log("++a = ", ++a)//11  //a//11
// console.log("a++ = ", a++)  //11   a = a+1 //12  
// console.log("--a = ", --a) //11   a/11
// console.log("a-- = ", a--) //11     a//10
// console.log("a = ", a)  //10
// console.log("a-- = ", a--)//10
 
// y=5 ;x =6;
// // Assignment Operators 
// let assignment = 1;    //x=1
// assignment += 5 // same as assignment = assignment + 5 //  y+=5
        //  x +=y
        //  console.log(x);
// console.log("a is now = ", a)
// assignment -= 5 // same as assignment = assignment - 5
// console.log("a is now = ", a)
// assignment *= 5 // same as assignment = assignment * 5
// console.log("a is now = ", a)
// assignment /= 5 // same as assignment = assignment / 5
// console.log("a is now = ", a)

// Comparison Operators 
// let comp1 = 6;  
// let comp2 = 7;
// console.log("comp1 == comp2 is ", comp1 == comp2)
// console.log("comp1 != comp2 is ", comp1 != comp2)
// console.log("comp1 === comp2 is ", comp1 === comp2)
// console.log("comp1 !== comp2 is ", comp1 !== comp2)
// console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
// let x = 5;
// let y = 6;
// console.log(x>y && x==5);//
// // console.log(x>y || x==5)
// console.log(!false)
// console.log(!true)

// Comments
// This is a single line comment
/* MULTI line comments
hght
hh
*/

//  let a = prompt("Hey whats you age?");
//  a = Number.parseInt(a);
//  console.log(a);
 // Converting the string to a number
// if(a<0){
//   console.log("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// // HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))

//practice-
/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 5
// let age = 19
// let a = age > 18 ? "You can drive" : "You cannot drive"
// console.log(a)

// let d = 3, e = 4;
// console.log(d++ + ++e);// //8     //d//3  //d//4  e//5
// console.log(d+e);//9

// console.log(--d - e--);// 8   //3-5  //-2
