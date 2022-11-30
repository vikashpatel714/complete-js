/*
Find the Smaller Angle
PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.
Note: You have to complete Minimal_Angle function. No need to take any input.
*/

var Minimal_Angle = (h, m) => {
    if (h == 12) {
      h = 0;
    }
  
    if (m == 60) {
      m = 0;
      h += 1;
      if (h > 12) {
        h -= 12;
      }
    }
  
    let hourAngle = 0.5 * (h * 60 + m);
    let minuteAngle = 6 * m;
  
    let angle = Math.abs(hourAngle - minuteAngle);
    angle = Math.min(360 - angle, angle);
    return angle;
  };
  
  console.log(Minimal_Angle(5, 30));

  /*
Check whether the year is Leap year or not.
Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.
Note: You have to complete Check_Leap function. No need to take any input.
*/

var Check_Leap = (year) => {
    result =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? "Leap Year"
        : "Non Leap Year";
    return result;
  };
  
  console.log(Check_Leap(2016));

  /*
Perfect Number Check.
Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.
Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.
Note: You have to complete Perfect _Check function. No need to take any input.
*/

var Perfect_Check = (N) => {
    let result = 0;
    for (let divisor = 0; divisor < N; divisor++) {
      if (N % divisor === 0) {
        result += divisor;
      }
    }
    return result === N ? "YES" : "NO";
  };
  
  console.log(Perfect_Check(6));

  /*
Reverse a Number.
Write a program which takes a number N as input from the user and You need to reverse the number.
Note: You have to complete Reverse_Number function. No need to take any input.
*/

var Reverse_Number = (N) => {
    let lastDigit = 0;
    let reverse = 0;
    while (N != 0) {
      lastDigit = N % 10;
      reverse = reverse * 10 + lastDigit;
      N = Math.floor(N / 10);
    }
    return reverse;
  };
  
  console.log(Reverse_Number(1900));

  /*
Substring Check.
You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.
Note: You have to complete Substring_Check function. No need to take any input.
*/

var Substring_Check = (S1, S2) => {
    let result = S1.includes(S2) ? "YES" : "NO";
    return result;
  };