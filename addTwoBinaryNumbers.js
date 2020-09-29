/*
This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
Note: neither binary string will contain leading 0s unless the string itself is 0

Ex: Given the following binary strings...

"100" + "1", return "101"
"11" + "1", return "100"
"1" + "0", return  "1"
*/

"use strict";

function addTwoBinaryNumbers(firstNumber, secondNumber) {
  firstNumber = parseInt(firstNumber, 2);
  secondNumber = parseInt(secondNumber, 2);

  let sum = firstNumber + secondNumber;

  return sum.toString(2);
}

console.log(addTwoBinaryNumbers("100", "1"));
console.log(addTwoBinaryNumbers("11", "1"));
console.log(addTwoBinaryNumbers("1", "0"));
