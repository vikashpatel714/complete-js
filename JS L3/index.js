console.log("connected🌹")

// DATA TYPE
// a=true
// console.log(typeof(a));
// string  number undefined null symbol object

// object
// a=[]
// console.log(typeof(a));
// a=34;
// // declaration:
// console.log(typeof(a));

// var
// var a = 12;
// console.log(a);
// {
// var a = 45;
// console.log(a);
// }
// console.log(a);
// 12
// 45
// 45

// let a = 12;
// console.log(a);
// {
// let a = 45;
// console.log(a);
// }
// console.log(a);
// 12
// 45
// 12 
// let a = 12;
// console.log(a);
// {
// let a = 45;
// console.log(a);
// }
// console.log(a);
// var language="JavaScript";
// function trex(){
//     console.log('hello ');
// }
// trex() 
// trex()

// trex() 
// console.log(language);
// var language="JavaScript is here";
// function trex(){
//     console.log('hello ');
// }
// var name1="javaScript"
// console.log(name1);

// let name2="python"
// console.log(name2)

// const name3="dart"
// console.log(name3);

// console.log(name1);
// console.log(name2)



// declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Hoisting allows functions to be safely used in code before they are declared.

// console.log(12+45);
// console.log(12-45);
// console.log(12*45);
// console.log(2**8);
// console.log(256/12);
// console.log("vikash"/4);
// console.log(243%2);
// console.log("hello"+45);
// console.log("java"+"script");

// let a=5;
// a=a+1;
// console.log(a)
// a+=1
// // a++   +a(pre increment) vs a++(post inc)
// console.log(++a)
// console.log(++a)

// let b=5;
// let c= ++b + b++;
// console.log(b)
// console.log(c)
// let d=5;
// // d=d-34
// d+=34
// let c= ++b + b++;
// console.log(b)


// undefined - when we try to access a variable that is declared but not initialized for var keywords.
//null - Its a value that we initialize to a variable which will later be replaced with some other/true value


//not defined - when we try to access a variable that is not declared.

// let myCountry = null;
// console.log(myCountry);
// myCountry = "India";
// console.log(myCountry);
// ++=+1
// --=-1

// let a=5;
// console.log(a++);  
// console.log(a++);
// console.log(a++);
// console.log(a);


// let b=3;
// console.log(++b);  
// console.log(++b);


// ++ = + 1;
// -- = - 1;
// a++ = a + 1;
//++a = a + 1;


// let a = 0;
// console.log(a++);//0  zero is first printed and then goes for 
// console.log(a++);
// console.log(a++);
// postfix operations //a = a + 1; 
//Finally value become a = 1; 
// console.log(++a);//   first the value will be incremented and then the value will be updated. //a = a + 1;
//
// let c = 5;
// console.log(c++);//4
// console.log(c++);//5
// console.log(++c);//7
// console.log(++c);//[8
// let d = 3, e = 4;
// console.log(d++ + --d);
// console.log(d);

// console.log(d,e);//d=3,e=4
// console.log((d>5) && 10);//

// console.log((d>5) || (e<10));//

// console.log(!10);//always gives u o/p in true and false only

// et a = 2, b = 3;

// console.log(a++);//2 //[a++//a+1//2+1//a=3]
// console.log(a++);//3 //[a++//a+1//3+1//a=4]
// console.log(++b);//[++b//b+1//3+1//b=4] //4

// let c = 4;
// console.log(c++);//4 //[c++//c+1//4+1//c=5]
// console.log(c++);//5 //[c++//c+1//5+1//c=6]
// console.log(++c);//[c++//c+1//6+1//c=7] //7
// console.log(++c);//[c++//c+1//7+1//c=8] //8 

// let d = 3, e = 4;
// console.log(d++ + ++e);// d=3//[d++//d+1//3+1//d=4] + [e++//e+1//4+1//e=5] // 3 + 5
// console.log(d+e);//4+5//9
// //d = 4, e = 5
// console.log(--d - e--);// [--d//d-1//4-1//d=3] - e = 5 //[e--//e-1//5-1//e=4](occur after o/p) //(3-5)

// console.log(d,e);//d=3,e=4
// console.log((d>5) && 10);//

// console.log((d>5) || (e<10));//

// console.log(!10);//always gives u o/p in true and false only

// //--------------------------------------------------------------------------------------------------------

// ternary operators
// d = 3, e = 4;
// e > 10 ? console.log('true') : console.log('false');//

// d > 10 ? console.log(d++): console.log(--e);//--e//e-1//4-1//e=3//3
// console.log(d++ + --d);//6/4/5/
// console.log(d);//3


// let dell =3;
// if (dell > 1) {
//     console.log("dell");
//   }


//   let age =25;
// if (age >= 18) {
//     console.log("eligiable for vote");
//   }
// else{
//     console.log("not eligiable") ;
// }


// age >= 18 ? console.log('eligible for vote') : console.log('not eligible');


// let age = 25;
// if (age >= 18) {
// //ternary operators are an alternative to the if else condition
// age >= 18 ? console.log('Eligible for voting!!') : console.log('Not Eligible for voting!!!');
// if (age >= 18 && age < 60) {
// 	console.log('I am an Adult!!!');//
// } else if (age >= 60) {
// 	console.log('I am Senior Citizen');
// } else {
// 	console.log('I am still a kiddo!!');
// }

// if (age >= 18 && age < 60) {
// 	console.log('I am an Adult!!!');//
// } 
// else if (age >= 60) {
// 	console.log('I am Senior Citizen');
// } 
// else {
// 	console.log('I am still a kiddo!!');
// }
// else if{	console.log("I am still a kiddo!!");
// }

// else if( age >=18 && age < 30){
// 	console.log('I am a Youngster!!!');//
// }
// else if(age >=30 && age < 60){
// 	console.log('I am an Adult!!!');
// }
// else{
// 	console.log('I am Senior Citizen');

// }


// let value = 2;
// switch (value) {
// 	case 1:
// 		console.log('I am case 1');
// 		break;
// 	case 2:
// 		console.log('I am case 2');
// 		// break;
// 	case 3:
// 		console.log('I am case 3');
// 		break;
// 	case 4:
// 		console.log('I am case 4');
// 		break;
// 	case 5:
// 		console.log('I am case 5');
// 		// break;
// 	default:
// 		console.log('I am case 7');
// 		break;
// }

//

// for loops

// for (let i = 0; i <= 10; i++) {
// 	console.log('I am ', i);
// }

// if statement: It is used if some statement has to be executed based on single condition. It is used to decide whether a certain statement or block of statements will be executed or not i.e. if a certain condition is true then the block of statement is executed otherwise not.
// if (condition)
// {
//     // Set of statement which has
//     // to be executed if condition
//     // is satisfied
// }


// if condition
// let a = 10;
  
// if (a > 0) {
//     console.log(a + " is a natural number.");
// }

// if-else statement: It is used when some set of code has to be executed based on some given conditions otherwise another set of code has to be executed. The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false then else block executed. We can use the else statement with if statement to execute a block of code when the condition is false.
// if (condition) {

//     // Set of statement which has
//     // to be executed if condition 
//     // is satisfied
// } 
// else {

//     // Set of statement which has
//     // to be executed if condition 
//     // is not satisfied
// }

// switch-case: It is used when multiple condition has to be evaluated based on single variable expression.
// Syntax:

// switch(expression) {
//     case_I :
//        // statements for case_I
//        break;

//     case_II :
//        // statements for case_II
//        break;

//     case_n :
//        // statements for case_n
//        break;

//     default :
//        // statements for default
// }

// Ternary Operator: It is also an if-else shorthand method. It takes three argument as input, condition, statement if condition satisfied, and statement if condition not satisfied.

// Syntax:

// (condition expression) ? statement for true : statement for false;

