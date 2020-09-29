/*
This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

Ex: Given the following strings...

"abcba", return true
"foobof", return true (remove the first 'o', the second 'o', or 'b')
"abccab", return false
*/

"use strict";

function reverseString(inputString) {
  if (typeof inputString != "string") {
    return "Not a string";
  }
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

function checkIfPalindrome(inputString) {
  let reversedString = reverseString(inputString);
  if (reversedString == inputString) {
    return true;
  }
  return false;
}

function checkPalindromeWithRemoval(inputString) {
  if (checkIfPalindrome(inputString)) {
    return true;
  }
  let str = "";
  for (let i = 0; i < inputString.length; i++) {
    str += inputString.slice(0, i);
    str += inputString.slice(i + 1, inputString.length);
    if (checkIfPalindrome(str)) {
      return true;
    }
    str = "";
  }
  return false;
}

console.log(checkPalindromeWithRemoval("abcba"));
console.log(checkPalindromeWithRemoval("foobof"));
console.log(checkPalindromeWithRemoval("abccab"));
