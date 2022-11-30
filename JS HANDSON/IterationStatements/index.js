/*
Find the number of digits
Take a number from the user and print the count of digits in that number.
Note: You have to complete Find_Digits. No need to take any input.
*/

const Find_Digits = (N) => {
    let count = 0;
    
    while (N > 0) {
        N = Math.floor(N / 10);
        count++;
    }
    return count;
};

/*
Find the Fives.
Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
Note: You have to complete Find_Five. No need to take any input.
*/

const Find_Five = (N) => {
    let count = 0;
  
    while (N > 0) {
      number = N % 10;
      if (number === 5) {
        count++;
      }
      N = Math.floor(N / 10);
    }
    return count;
  };
  
  Find_Five(345654);

  /*
Find Sum
You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).
Note: You have to complete findSum function. No need to take any input.
*/

const findSum = (n) => {
    let sum = 0;
    let i = 0;
    for (i = n; i > 0; i--) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    // return sum;
    console.log(sum);
  };
  
  findSum(6);

  /*
Find the sum of the digits of a given number.
Write a program that takes a number from the user and get the sum of the digits present in the number.
Note: You have to complete Number_Sum. No need to take any input.
*/

const Number_Sum = (N) => {
    let sum = 0;
    while (N >= 1) {
        sum += N % 10;
        N = Math.floor(N / 10);
    }
    // console.log(sum);
    return sum;
};

Number_Sum(1234);


/*
Print the Odds.
Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
Note: You have to complete Print_Odd. No need to take any input.
*/

const Print_Odd = (N) => {
    let index;
    for (index = 2; index <= N; index++) {
        if (index === 2 || index % 2 !== 0) {
            console.log(index);
        }
    }
};

Print_Odd(10);

/*
Print the Pattern.
Write a program which ask user for no of lines and print a pattern using an asterik .
Note: You have to complete Print_pattern. No need to take any input.
*/

const Print_pattern = (N) => {
    for (let row = 1; row <= N; row++) {
      // console.log("*".repeat(index));
      let pattern = "";
      for (let i = 0; i < row; i++) pattern += "*";
      console.log(pattern);
    }
  };
  
  Print_pattern(5);

  /*
Check whether a Number is a prime or not.
Write a program which takes  a number from user and check whether number is prime number or not a prime number.
Note: You have to complete Prime_Check. No need to take any input.
*/

const Prime_Check = (N) => {
    // if (N === 1) {
    //   return "NO";
    // } else if (N === 2) {
    //     return "YES";
    // } else {
    //     if (N % 2 !== 0 && N % 3 !== 0) {
    //         return "YES";
    //     }
    //     return "NO";
    // }
  
    // for (let number = 2; number <= N; number++)
    if (isPrime(N)) {
      return "YES";
    }
    return "NO";
  
    function isPrime(number) {
      for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) return false;
  
      return true;
    }
  };
  
  console.log(Prime_Check(7));

  /*
Print Numbers
You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).
Note: You have to complete printNumbers function. No need to take any input.
*/


const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

printNumbers(10);

/*
Print the Table
Write a program which takes a number from user and print the table.
Note: You have to complete Print_Table. No need to take any input.
*/

const Print_Table = (N) => {
    if (N >= 1) {
      for (let i = 1; i <= 10; i++) {
        console.log(`${N} * ${i} = ${N * i}`);
      }
    }
  };
  
  Print_Table(3);