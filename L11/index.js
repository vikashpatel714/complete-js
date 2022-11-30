console.log("connected🌹")
// array is asimilar data structure which helps us store varieties of value (differtent data type)altjough not nec esssary
// //number (integet type pure number),float(dessimal),string (single or double quotes),boolean (true or false)

// // const arrayofnumbers = [1,2,3,4,5,6,7,8,9,0];
// // const arrayofmanes =  ["adarsh" , "vikash","hari","ram"];
// // const detailsofstudent = [ "abhinandan","surana",12,95541757**,"gt road", false];
// // array can hold many values
// //why do need 
// //Arrays help maintain large sets of data under a single variable name to avoid confusion that can occur when using several variables.

// //method to creat asn array
// //3 method
// //index position start with 0 to n-1 
// //1 - method
// // const listof names = ["adarsh" , "vikash","hari","ram"];

// //2-method
// // const listofnumbers = [];
// // listofnumbers[0] = 23;
// // listofnumbers[1] = 12;
// // listofnumbers[2] = 32;
// // listofnumbers[3] = 52;
// // listofnumbers[4] = 52;
// // listofnumbers[7] = 52;
// // console.log(listofnumbers[5]); //undefined
// // console.log(listofnumbers); [23, 12, 32, 52, 52, empty × 2, 52]

// //3- method array constructor
// // const listofplaces = new Array("bombay","varanasi","up","delhi");
// // console.log(listofplaces);//(4) ['bombay', 'varanasi', 'up', 'delhi']
// // console.log(listofplaces.length);//4 length of array


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

// //for of loop and for in loop

// // for(const values of fruit){
// //     console.log(values);
// // }// allow you to access the value of the array
// //sweetpotato
// // index.js:188 orange
// // index.js:188 guava
// // index.js:188 Kiwi

// for(const index in fruit){
//     console.log(index);
// }//allow u to access the indexes of the array
// // index.js:195  0
// // index.js:195 1
// // index.js:195 2
// // index.js:195 3
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// function uniqueArray2(arr) {
//     var a = [1,2,3,4,2,5,6,7,8,3,4,5,8];
//     for (var i=1, l=arr.length; i<l; i++)
//         if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
//             a.push(arr[i]);
//     return a;

//map filter ,reduce ,some
//map filter and reduce are one linear function ,built for specific task
// const listofnumbers = [2,3,5,6,4,1,8,4];
// const mapnumbers = listofnumbers.map(item => item*2);
// console.log(mapnumbers);//multiply the 2 every elelment
// console.log(listofnumbers);
// console.log(mapnumbers);//updated array after multiply

// const filternumbers = listofnumbers.filter(item => item > 2);
// console.log(filternumbers);//(6) [3, 5, 6, 4, 8, 4]

// const reducenumbers = listofnumbers.reduce((acc,curr) =>acc=acc+curr,0);
// console.log(reducenumbers);//33

// let resultone = fruit.some(checkfruit);
// functioncheckfruits(resultone){
//     return fruit === "orange";
// }
// console.log(resultone);//true

// let resultwo = fruit.every(checkfruit);
// functioncheckfruits(resultone){
//     return fruit === "orange";
// }
// console.log(resulttwo);//false

// let resultOne = fruits.some(checkFruits);

// function checkFruits(fruit) {
//     return fruit === "Orange";
// }
// console.log(resultOne);

// let resultTwo = fruits.every(checkFruits);

// function checkFruits(fruit) {
//     return fruit === "Orange";
// }
// console.log(resultTwo);
// const myaddress  = "545 , G.T road 'Howrah' - 711101";
// const myString = "hello everyone $ i hope you are enjoying learning javascript 2$$$";
// console.log(myString);

// console.log(myString.charAt(10));//y
// console.log(myString.concat(myaddress));//concate with two string each other



//🎁🌹

// console.log(myString.charAt(10));//gives us the character present at the
// //  particular index value mentioned inside the parenthesis

// console.log(myString.concat(myAddress));//concatenates two strings with each other.

// console.log(myString.startsWith("Hello Everyone"));//checks if the original
// // string starts with the string  mentioned inside the parenthesis.

// console.log(myString.endsWith(" 2!!!"));//checks if the original
// // string ends with the string  mentioned inside the parenthesis.
// 107
// strings


// let resultOne = fruits.some(checkFruits);

// function checkFruits(fruit) {
//     return fruit === "Orange";
// }
// console.log(resultOne);

// let resultTwo = fruits.every(checkFruits);

// function checkFruits(fruit) {
//     return fruit === "Orange";
// }
// console.log(resultTwo);

// // string starts with the string  mentioned inside the parenthesis.

// console.log(myString.endsWith(" 2!!!"));//checks if the original
// // string ends with the string  mentioned inside the parenthesis.
// 107
// strings
