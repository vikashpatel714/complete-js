/*
Find the Product.
Write a program that takes an array as input from the user and find out the product of the elements.
Note: You have to complete Find_Prod. No need to take any input.
*/

const Find_Prod = (array, N) => {
    let result = 1;
    for (let i = 0; i < N; i++) {
      result *= array[i];
    }
    return result;
  };
  
  // const Find_Product = (array) => {
  //   const product = array.reduce((acc, value) => {
  //     acc = acc * value;
  //     return acc;
  //   }, 1);
  //   return product;
  // };
  
  // console.log(Find_Product([1, 2, 3, 4, 5]));

  /*
Find the Sum.
Write a program which takes an array as input from the user and find out the sum of the array elements.
Note: You have to complete Find_Sum. No need to take any input.
*/

const Find_Sum = (array, N) => {
    let result = 0;
    for (let i = 0; i < N; i++) {
      result += array[i];
    }
    return result;
};

/*
Count Occurrences
You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.
Note: You have to complete findCount function. No need to take any input.
*/

const findCount = (N, K, Arr) => {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (K === Arr[i]) {
            count += 1;
      }
    }
    return count;
  };

  /*
Even Odd
You are given an array A containing N integer elements, and your task is to return an array B (having a size equal to 2), where B [0] contains the sum of all even elements of array A and B [1] has the sum of all odd elements of the array A.
Note: You have to complete findEvenOdd function. No need to take any input.
*/

const findEvenOdd = (N, Arr) => {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            sumOfEven += Arr[i];
        } else {
            sumOfOdd += Arr[i];
        }
    }
    let newArray = [sumOfEven, sumOfOdd];

    return newArray;
};

findEvenOdd(7, [1, 2, 3, 4, 5, 6, 7]);

/*
Find whether the number is present or not
Write a program which takes an array as input from the user and a number.
Check whether the number is present or not.
Note: You have to complete Find_Num. No need to take any input.
*/

const Find_Num = (array, N, M) => {
    let isPresent = false;
    for (let i = 0; i < N; i++) {
      if (array[i] === M) {
        isPresent = true;
        break;
      }
    }
    if (isPresent) {
      return "YES";
    } else {
     return "NO";
    }
  };

  /*
Higher Age
You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).
Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.
*/

const highAge = (N, Arr) => {
    let newArray = [];
    for (let i = 0; i < N; i++) {
      if (Arr[i] >= 18) {
        newArray.push(Arr[i]);
      }
    }
    // return newArray;
    console.log(newArray);
  };
  
  highAge(6, [11, 23, 3, 45, 72, 68]);

  /*
Increment the Array Elements
You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
You have to complete Inc_Arr. No need to take any input.
*/

const Inc_Arr = (array, N) => {
    let newArray = [];
    for (let i = 0; i < N; i++) {
      newArray.push(array[i] + 1);
    }
    console.log(newArray.join(" "));
  };
  
  Inc_Arr([1, 2, 3, 4, 5], 5);

  /*
Pass or Fail
You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 
32.
If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
Note: You have to complete isAllPass function. No need to take any input.
*/

const isAllPass = (N, Arr) => {
    let allPassed = true;
    for (let i = 0; i < N; i++) {
      if (Arr[i] < 32) {
        allPassed = false;
      } else {
        continue;
      }
    }
  
    if (allPassed) {
      return "YES";
    } else {
      return "NO";
    }
  };

  /*
Unique Color Shirt
Prepbuddy is very tasteful of clothes. 
He has N numbers of shirts hanging in the hanger in his wardrobe.
Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. 
Prepbuddy wants you to find M.
Note: As there are many shades of a color so consider integers as a color name.
i.e, color of shirt is 0,1,2, … , N.
*/

function Unique_Shirts(arr, N) {
    let newArray = arr.sort();
    for (let i = 0; i < newArray.length; i++) {
      let count = 0;
      for (let j = 0; j < N; j++) {
        if (newArray[i] === newArray[j]) {
          count++;
        }
      }
      if (count > 1) {
        newArray.splice(i, count);
        i = 0;
      }
    }
    return newArray.length;
  }
  
  console.log(Unique_Shirts([3, 2, 4, 1, 2, 3], 6));

  /*
Min and Max
Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
*/

function arrayMin(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr[0];
  }
  
  function arrayMax(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr[0];
  }

  /*
* Birthday Game
Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i].
She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D. 
You must determine how many ways she can divide the chocolate.
*/

// function Birthday_Game(arr, D, M) {
//   let numberOfWays = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j < M + i && j < arr.length; j++) {
//       sum += arr[j];

//       if (sum === D) {
//         numberOfWays++;
//       }
//     }
//   }

//   return numberOfWays;
// }

function Birthday_Game(arr, D, M) {
    let numberOfWays = 0; // store the total number of ways
    let numberOfSquares = arr.length; // length of the segment
    for (let i = 0; i < numberOfSquares; i++) {
      let sum = 0; // sum of the integer of the squares
      if (i + M > numberOfSquares) {
        // sum of current index and M should be < length of the segment
        return numberOfWays;
      }
      for (let j = 0; j < M; j++) {
        sum += arr[i + j];
      }
      if (sum === D) {
        numberOfWays++;
      }
    }
    return numberOfWays;
  }
  
  console.log(Birthday_Game([2, 2, 1, 3, 2], 4, 2));