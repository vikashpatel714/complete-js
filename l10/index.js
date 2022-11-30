console.log("connected🌹")
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

//array 
//array is asimilar data structure which helps us store varieties of value (differtent data type)altjough not nec esssary
//number (integet type pure number),float(dessimal),string (single or double quotes),boolean (true or false)

// const arrayofnumbers = [1,2,3,4,5,6,7,8,9,0];
// const arrayofmanes =  ["adarsh" , "vikash","hari","ram"];
// const detailsofstudent = [ "abhinandan","surana",12,95541757**,"gt road", false];
// array can hold many values
//why do need 
//Arrays help maintain large sets of data under a single variable name to avoid confusion that can occur when using several variables.

//method to creat asn array
//3 method
//index position start with 0 to n-1 
//1 - method
// const listof names = ["adarsh" , "vikash","hari","ram"];

//2-method
// const listofnumbers = [];
// listofnumbers[0] = 23;
// listofnumbers[1] = 12;
// listofnumbers[2] = 32;
// listofnumbers[3] = 52;
// listofnumbers[4] = 52;
// listofnumbers[7] = 52;
// console.log(listofnumbers[5]); //undefined
// console.log(listofnumbers); [23, 12, 32, 52, 52, empty × 2, 52]

//3- method array constructor
// const listofplaces = new Array("bombay","varanasi","up","delhi");
// console.log(listofplaces);//(4) ['bombay', 'varanasi', 'up', 'delhi']
// console.log(listofplaces.length);//4 length of array


// //push method - it add a new values at the end of the array.
// const arrayofnumbers = [1,2,3,4,5,6,7,8,9,0];
// console.log(arrayofnumbers);
// arrayofnumbers.push(24);//(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 24]
// console.log(arrayofnumbers);

// //pop method - it always the remove the last element from the array.
// arrayofnumbers.pop();//(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(arrayofnumbers);

// //shift method - it always removes values from the starting position of the array.
// arrayofnumbers.shift();// [2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(arrayofnumbers);

// //unshift method -it always add new values at the starting position of the array.
// arrayofnumbers.unshift(10);//[10, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(arrayofnumbers);

// console.log(typeof(arrayofnumbers));//index.js:154 object

// console.log(arrayofnumbers[arrayofnumbers.length -1]);//0

// console.log(arrayofnumbers[arrayofnumbers.length]);//undefined

// const fruit = [ "guava","apple","orange","mango","litchi","orange"];
// console.log(fruit.indexOf("orange"));// 2 
// console.log(fruit.includes("orange"));//true
// console.log(fruit.lastIndexOf("orange"));//5 add extra orange

// console.log(fruit.slice(1,4));//(3) ['apple', 'orange', 'mango']last index value is exclusive

// console.log(fruit);//(6) ['guava', 'apple', 'orange', 'mango', 'litchi', 'orange']
// console.log(fruit.splice(1,4,"Kiwi","sweetpotato"));//last index value is exclusive
// //(4) ['apple', 'orange', 'mango', 'litchi']
// console.log(fruit);//(4) ['guava', 'Kiwi', 'sweetpotato', 'orange']

// console.log(fruit.sort());//(4) ['Kiwi', 'guava', 'orange', 'sweetpotato']//alphabetical vise
// console.log(fruit.reverse());//(4) ['sweetpotato', 'orange', 'guava', 'Kiwi'] reverse  my array

// console.log(fruit.sort().reverse());//(4) ['sweetpotato', 'orange', 'guava', 'Kiwi']

// const groupofletters = ["a","aa","aac","aba","acbac"];
// console.log(groupofletters.sort());
// //(5) ['a', 'aa', 'aac', 'aba', 'acbac']
// console.log(groupofletters.sort().reverse());
// //5) ['acbac', 'aba', 'aac', 'aa', 'a']
// const listofrandomnumber = [1,23,101,1656,2435,11134];
// console.log(listofrandomnumber.sort());//(6) [1, 101, 11134, 1656, 23, 2435] for number sort will not giv e u the number is assending order

//for of loop and for in loop

// for(const values of fruit){
//     console.log(values);
// }// allow you to access the value of the array
//sweetpotato
// index.js:188 orange
// index.js:188 guava
// index.js:188 Kiwi

// for(const index in fruit){
//     console.log(index);
// }//allow u to access the indexes of the array
// index.js:195  0
// index.js:195 1
// index.js:195 2
// index.js:195 3

// const arr1 = [10,20,30,40,50]
// const arr2 = arr1
// arr2[5] = 1000
// console.log(arr1);
// console.log(arr2);

arr1 = [10,20,30,40,50]
//spread operator
 arr2 = arr1
arr2[5] = 1000
console.log(arr1);
console.log(arr2);