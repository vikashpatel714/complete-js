/*
Count Characters
You are given a string S, and your task is to return an array B (having a size of 2), where B[0] contains the count of haracter A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
Note: You have to complete countCharacters function. No need to take any input.
*/

const countCharacters = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let character of S) {
        if (character === "A") {
            countOfA++;
        } else if (character === "D") {
            countOfD++;
        }
    }
    let B = [countOfA, countOfD];
    return B;
};

console.log(countCharacters("AbaDd"));

/*
Count the Heads
Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.
*/

var Count_Occ = (s) => {
    let newString = "";
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let count = 0;
    for (let letter of letters) {
      for (let character of s) {
        if (letter === character) {
          count++;
        }
      }
      if (count > 1) {
        newString += `${letter}${count}`;
      }
      count = 0;
    }
    return newString;
  };
  
  console.log(Count_Occ("prepbytes"));

  /*
Count the Vowels
You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.
*/

var Count_Vowels = (S) => {
    let vowels = "aeiou";
    let count = 0;
    for (letter of vowels) {
      for (character of S) {
        if (letter === character) {
          count++;
        }
      }
    }
    return count;
  };
  
  console.log(Count_Vowels("prepbytes"));

  /*
Concatenate the Strings
You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the concatenation of both the given strings.
*/

var Concatenate_Strings = (S1, S2) => {
    return S1.concat(S2);
  };
  
  console.log(Concatenate_Strings("Prepbytes"));

  /*
Find Length
You are given a string S, and your task is to return the length of the string S.
Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
*/

const findLength = (S) => {
    let count = 0;
    for (let letter of S) {
      count++;
    }
    return count;
  };

  /*
Find the Winner
You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish.
You need to find out the that which player wins the maximum number of games or there is a draw between them.
Note: You have to complete Game_Winner function. No need to take any input.
*/

var Game_Winner = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let letter of S) {
      if (letter === "A") {
        countOfA++;
      } else {
        countOfD++;
      }
    }
  
    if (countOfA > countOfD) {
      return "Aditya";
    } else if (countOfA < countOfD) {
      return "Danish";
    } else {
      return "Draw";
    }
  };
  
  console.log(Game_Winner("ADDAAADDDDD"));

  /*
Join Strings
You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
Note: You have to complete joinStrings function. No need to take any input.
*/

const joinStrings = (S, P) => {
    return S.concat(P);
  };

  /*
Palindrome Check
You are given a string S, Your task is to check wether the given string is a Palindrome or not.A Palindrome is a string, which turnout same when read in reverse direction.
Example: "naman" is a Palindrome.
String can contain both upppercase lowercase letters.
Note: You have to complete Plain_Check function. No need to take any input.
*/

var Palin_Check = (str) => {
    let reversedString = "";
    for (let i = str.length-1; i >= 0; i--) {
      reversedString += str[i];
    }
  
    if (str === reversedString) {
      return "True";
    } else {
      return "False";
    }
  };
  
  console.log(Palin_Check("naman"));

  /*
Reverse the String
You are given a string S, Your task is to Reverse the string.
String can contain both upppercase lowercase letters. 
Note: You have to complete Reverse_String function. No need to take any input.
*/

var Reverse_String = (str) => {
    let reverseString = "";
    let length = str.length;
  
    while (length > 0) {
      reverseString += str[length - 1];
      length--;
    }
  
    //! Time exceeded.
    //   for (let i = str.length - 1; i >= 0; i++) {
    //     reverseString += str[i];
    //   }
  
    return reverseString;
  };
  
  Reverse_String("I am utkarsh raj");

  /*
Match the Strings
You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
Note: You have to complete String_Match function. No need to take any input.
*/

var String_Match = (S1, S2) => {
    return S1 === S2 ? "YES" : "NO";
  };
  
  String_Match("Prepbytes", "Prepbytes");

  /*
String Replace
You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
Note: You have to complete Replace function. No need to take any input.
*/

var Replace = (S, pattern, text) => {
    return S.replace(pattern, text);
  };
  
  Replace("Hi, I am You.", "You", "Prepbytes");

  /*
Split the String
You are given a string S, Your task is to split the string with respect to spaces.
Note: You have to complete Split_the_String function. No need to take any input.
*/

var Split_the_string = (S) => {
    return S.split(" ");
  };
  
  Split_the_string("I am utkarsh raj");

  
/*
Count the Vowels and Consonants
You are given a string S containing both uppercase and lowercase letters. 
You need to find out the number of vowels and the number of consonants in the given string.
Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
*/

var Count_Vowels = (S) => {
    S = S.toLowerCase();
    let vowels = "aeiou";
    let count = 0;
    for (let letter of S) {
      for (let vowel of vowels) {
        if (vowel === letter) {
          count++;
        }
      }
    }
    return count;
  };
  
  var Count_Consonants = (S) => {
    S = S.toLowerCase();
    let vowels = "aeiou";
    let count = 0;
    for (let letter of S) {
      if (
        letter !== "a" &&
        letter !== "e" &&
        letter !== "i" &&
        letter !== "o" &&
        letter !== "u"
      ) {
        count++;
      }
    }
    return count;
  };
  
  console.log(Count_Consonants("Prepbytes"));