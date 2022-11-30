// Create one function with zero parameter having a console statement;

const greet = () => {
    console.log("Hello");
  };
  
  greet();
  
  // Output --> Hello

  // Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

const sum = (x, y) => {
    console.log(`Sum of ${x}, ${y} is ${x + y}`);
  };
  
  sum(3, 4);
  
  // Output --> Sum of 3, 4 is 7

  const arrowFunction = () => {
    console.log("This is an Arrow Function");
  };
  
  arrowFunction();
  
  // Output --> This is an Arrow Function


  // Print output:
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

// Output --> Undefined

// Print output:
var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}

// Output -->
// Undefined
// 21

// Print output

var x = 21;
a();
b();
console.log(a);
a = function () {
  x = 20;
  console.log(x);
};
b = function () {
  x = 40;
  console.log(x);
};

// Output --> a is not defined

// Write a function that accepts parameter n and returns factorial of n

const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  };
  
  console.log(factorial(5));
  
  // Output --> 120
