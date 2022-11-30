console.log("connected🌹")
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



// //🎁🌹

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

// const arr = [1,1,2,2,3,4,4,6,7,8,6,7,9,2,5,0,2,4,5,3];
// const Unique = arr => {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//   return newArr;
// }
// console.log(Unique(arr));


// var numbers = [3, 5, 7, 2];
// var sum = numbers.reduce((x, y) => x + y);
// console.log(sum); // returns 17

//  x = sumAll(1, 123, 500, 115, 44, 88);
// function sumAll() {
//   var i;
//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

//string
//1-Write a JavaScript function to check whether an 'input' is a string or not
// is_string = function(input) {
//     if (Object.prototype.toString.call(input) === '[object String]')
//       return true;
//     else
//       return false;   
//       };
//   console.log(is_string('helloworld'));
//   console.log(is_string([1, 2, 4, 0]));
// const mystring = "hello everyone $ i hope you are enjoying learning javascript 2$$$";
// console.log(mystring.repeat(3));//hello everyone $ i hope you are enjoying learning javascript 2$$$hello everyone $ i hope you are enjoying learning javascript 2$$$hello everyone $ i hope you are enjoying learning javascript 2$$$
// console.log(mystring.substr(2,9));//llo every FIRTST value is start character and second is character from the position
// console.log(mystring.substring(2,9));//llo eve second index value is exclusive
// console.log(mystring.substring(9,2));  //llo eve  //if substring has the first index value in greater than the second index value they are reverse in position otherwise no change

// console.log(mystring.slice(2,9));//llo eve
// console.log(mystring.slice(9,2));// out put empty//this will not the index number if first is larger than second ,will  return empty value
// const myString = "hey   people    lets learn trim method";
// console.log(myString);
// console.log(myString.trim());//remove the extra spaces from the starting and ending of the string
// const names = "HARI-BAJAJ-SONI";
// const names1 = "HARI@BAJAJ@SONI";
// console.log(names.split("-"));
// console.log(names1.split("@")[1]);//BAJAJ
// console.log(names1[0]);//H

//map 
//// Maps - 

// Maps are collection of key, value pairs.
//It preserves the order of insertion of properties.
//It also preserves the data type of properties/keys, i.e. can have properties of any data type.

//How do we create a Map? 
//two methods

// 1. Inserting arrays as key value pairs to Map
//first method box 
// const mapone = new Map([
//     ['fname' , "shidhant"],
//     ['mname' , "gupta"],
//     ['lname' , "kaashhyup"],
//     [25 , 'age'],
//     ['hobby' , 'gynming'],//left side is key and right side is value
//     [true , 'adult']//[key , value]
// ]);
// console.log(mapone);

//second  using the set method
// const mymaptwo = new mapone();
// mymaptwo.set('fname','shidhant');
// mymaptwo.set('mname' , "gupta");
// mymaptwo.set('lname' , "kaashhyup");
// mymaptwo.set(25 , 'age');
// mymaptwo.set('hobby' , 'gynming');
// console.log(mymaptwo);
// mymaptwo.set( true , 'adult');

// console.log(myMapTwa.size);

// for(const keys of myMapTwo.keys()){
// console.log(keys);
// }

// for (const values of myMapTwo.values())
// { console.log(values);
// }

// for(const [keys, values] of myMapTwo.entries())
// { console.log(keys, values);
// }
// console.log("..............................")

// setTwo.forEach(function(value,key){//if two parans then first is always value and then key console.log(key, value');
// console.log(key ,value);})

// arr.forEach(callfunction);

//Sets

// Sets are collection of UNIQUE values .does not contain key value
// All the values can occur only once. They don't allow duplicate values
// It can hold values of any data type.

// methods to create a Set

// two method
const setOne = new Set(["apples", "Oranges", "Oranges", "Kiwi", "Mangoes"]);
 console.log(setOne);
const setTwo = new Set();

setTwo.add("Redmi"); //add method is used to add the values of the set

setTwo.add("Oppo");

setTwo.add("Oppo");

setTwo.add("Oppo");

setTwo.add("Oppo");

setTwo.add("Vivo");

setTwo.add("Lenovo");

console.log(setTwo);//

// setTwo.delete("Lenovo");

// console.log(setTwo);

// // setTwo.clear(); // console.log(setTwo);


const setOne = new Set(["apples","Oranges","Oranges","Kiwi","Mangoes"]);
console.log(setOne);
//
const setTwo = new Set();
setTwo.add("Redmi");//add method is used to add the values of the set
setTwo.add("Oppo");
setTwo.add("Oppo");
setTwo.add("Oppo");
setTwo.add("Oppo");
setTwo.add("Vivo");
setTwo.add("Lenovo");
console.log(setTwo);//

setTwo.delete("Lenovo");
console.log(setTwo);

// setTwo.clear();
console.log(setTwo);

console.log(setTwo.has("Oppo"));
//Sets

// Sets are collection of UNIQUE values
// All the values can occur only once. They don't allow duplicate values
// It can hold values of any data type.

// methods to create a Set

// two method
From Steve Hogan to Everyone 08:15 PM
+1
From Sidhant Gupta to Everyone 08:37 PM
setTwo.add("Vivo");
setTwo.add("Lenovo");
console.log(setTwo);//

setTwo.delete("Lenovo");
console.log(setTwo);

// setTwo.clear();
console.log(setTwo);

console.log(setTwo.has("Oppo"));
})
