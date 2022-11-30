/*
Create a Function
Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named name. Your task is to create a method inside this object named setter, such that this method will print the value of the data member named as name.
*/

function Check(obj) {
    obj.setter = function () {
      console.log(this.name);
    };
  }
  
  const obj = {
    name: "Sanjeev",
  };
  
  console.log(Check(obj));

  /*
Delete a Parameter
Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.
*/

function Check(obj) {
    delete obj.rollno;
    return obj;
  }

  /*
Check whether the Package is Dream Package or not
Complete the function in the editor. In which you are given an object as a parameter.
In that object, there is one property named as salary if the salary is maximum than 5 lakh then return "Dream" otherwise  return "NotDream".
*/

function Check(obj) {
    if (obj.salary > 500000) return "Dream";
    else return "NotDream";
  }

  /*
Check whether the Object has a parameter or not
Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".
*/

function Check(obj) {
    if (Object.keys(obj).length === 0) return "false";
    else return "true";
  }

  /*
Merge the Objects
Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two objects and return a single object.
*/

function Check(obj1, obj2) {
    let newObject = Object.assign(obj1, obj2);
    return newObject;
  }

  /*
Object Multiplyer
Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.
*/

function Check(a, obj) {
    obj.id *= a;
    obj.houseno *= a;
    return obj;
  }

  /*
Find the  sum of Object Members
You are given a function Check which takes an object Obj as a parameter.
Your task is to find out the sum of the three data members of the object. The data members are named as p1, p2, p3.
Note: You have to complete Check function. No need to take any input.
*/

function Check(obj) {
    let sum = obj.p1 + obj.p2 + obj.p3;
    return sum;
  }

  /*
Check whether the Objects are same or not.
Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
Return "true" if new_name and id are same as objects name and id otherwise return  "false".
*/

function check(obj, a, b) {
    if (obj.name === a && obj.id === b) return "true";
    else return "false";
  }

