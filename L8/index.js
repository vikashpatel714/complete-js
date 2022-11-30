console.log("connected🌹")
// for loops

// let x=1;
// // x=(x++ , x++ ,x);
// // x=(x++ , x++ ,++x);
// x=(x++ , x++ ,x++); //flow moves from left to right //always the right value are assignrd
// // postfix is exception assign the original value
// console.log(x);

// run the same code over and over again, each time with a different value.


// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.
// for (let i = 2; i <= ; i=i + 2) {
// 	console.log('I am ', i);
//  }

// for(let count=1 ; count<=20; count++){
//     console.log(count);
// }

// for(let count= 2; count<=20; count= count + 2){
//     console.log(count);
// }

// let counter=1;
// while(counter <= 20){
//     console.log(counter);
//     counter=counter+2;
// }
// table in 2
// let counter=2;
// while(counter <= 20){
//     console.log(counter);
//     counter=counter+2;
// }

// on do while loop we execute the statement for the first time ,also the increament operation if exists,
//and then go for the condition chec king
// table in 2
// let counters = 0;
// do {
//   counters = counters + 2;
//   console.log(counters);
// } while (counters < 20);

// let i = 0;
// do {
//   i = i + 2;
//   console.log(i);
// } while (i < 20);

// table of 7

// using for loop
// for(let i = 1; i <= 10; i++) {

//     console.log(   "  7  *  "  +i+  "  =  "  +i*7 );}
    
    
//     // using while loop
//     let d=1;
//     while(d <= 10){
//         console.log("  7  *  "  +d+  "  =  "  +d*7);
//         d=d+1;}
    
    
    // using do while looop
    // let a = 0;
    // do {
    //   a = a + 1;
    //   console.log(  "  7  *  "  +a+  "  =  "  +a*7 );
    // } while (a < 10);


    // let e = 6;
		// 	let x = e++;
		// 	console.log(x + e);  //(6+7)
		// 	x = ++e;
		// 	console.log(x + e);//(8+8)

    // let f = 6;
    // let y = f--;
    // console.log(y + f);//(6+5)
    // y = - -a;
    // console.log(y + f);//(10+5)

//     // nested loop
//     for(var z = 1; z<=4; z++){
//         for(var j = 1; j<=3; j++){
//             console.log(z);
//         }
//     }
// function add(p1, p2) {
//     let result;
//     result=p1+p2;
//  // The function returns the sum of p1 and p2
// console.log(result);
// }
// add(5,6);

// arrow function
// const addition = (p1, p2)=> {
//     let result;
//     result=p1+p2;
//  // The function returns the sum of p1 and p2
// console.log(result);
// }
// console.log(addition);
// addition(5,6);

//result🌹
// (p1, p2)=> {
//     let result;
//     result=p1+p2;
//  // The function returns the sum of p1 and p2
// console.log(result);
// }
// index.js:112 

//function expression
// const subtract= function(){
//     console.log("i am function");
// }
// console.log(subtract);
// subtract();
// result🌹
// index.js:121 ƒ (){
//     console.log("i am function");
// }
// index.js:119

//return
// const adding = (p1, p2)=> {
//         let result;
//         result=p1+p2;
//      // The function returns the sum of p1 and p2
//    return result;
//     }
// let finalresult = adding(2,5);
// console.log(finalresult);
// result🌹
//7

// //let is a block scope
// {let a = 10;
//  console.log(a);
// }console.log(a);//reference error


// let a = 15;
// const b = 30;
// {
//   let a = 10;
//   console.log(a);//10
//   const b = 20;
//   console.log(b);//20
// //  console.log(a);
// }
// console.log(b);//30
// console.log(a);//15
// // result🌹


// let a = 15;//block scope
// const b = 30;
// var c = 5;//var are not block scope,they get space in global scope
// {
//   let a = 10;
//   console.log(a);//10
//   const b = 20;
//   console.log(b);//20
// //  console.log(a);
// console.log(c);
// var c = 7;
// console.log(c);
// }
// console.log(b);//30
// console.log(a);//15
// console.log(c);//7 last value is overwrite
// // result🌹
// console.log("-------------------");


// let d = 20;
// console.log(d);//20
// {
//   let d = 30;
//   console.log(d);//30
// }
// console.log(d);
//var can be legally shadowed with the let in the block scope but vice versa isn't allowed its illegal shadowing

// let x = 2;
// const add = (y) => {
//   x += y;
// };
// add(4); // x === 6 (the first time)

// let f = 15;
// function one(){
//   let f = 15;
//   console.log(f);//15

// function two(){
//   let g = 20;
//   console.log(f,g);//15
// }

// function three(){
//   let h = 30;
//   console.log(f, g,h);//15
// }
// one()


//nested function is those function inside this function
//🌹
// let f = 10;
// function one(){
//     let f = 15;
//    console.log(f);//15

//     two();
//     function two(){
//         let g = 20;
//         console.log(f,g);//15,20,

//         three();
//         function three(){
//             let h = 30;
//             console.log(f,g,h);//15,20,30
//         }
//         console.log(f,g);//15,20

//     }
//     console.log(f);//15
//     four();
//     function four(){
//         let i = 40;
//         console.log("four",f,i);//15,40
//     }
// }
// one();

// arrow function
// const addition = (p1, p2)=> {
//     let result;
//     result=p1+p2;
// console.log(result);
// }
// console.log(addition);
// addition(3,4);


// function myfunction(x) {
//   console.log("This is a sample alert");
// }
// const girl = (p1, p2)=> {
//   let result;
//   result=p1+p2;
// console.log(result);
// }
// console.log(addition);
// girl(3,4);

// //7
// function factorial(n) {
//   if (n < 0) return;
//   if (n < 2) return 1;
//   return n * factorial(n - 1);

//2
// arrow function
// const addition = (p1, p2)=> {
//     let result;
//     result=p1+p2;
// console.log(result);
// }
// console.log(addition);
// addition(3,4);

//3
// const Add = (a,b) => {
//   return a+b;
// };
// console.log(Add(4,3));

//5
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
//21


//4
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
//undefined


//6
// var x = 21;
// a();
// b();
// //console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };
//ReferenceError: a is not defined

//  var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// girl ();

// //6
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };