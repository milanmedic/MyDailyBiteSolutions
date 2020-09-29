/*
This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

Ex: Given the following strings...

"level", return true
"algorithm", return false
"A man, a plan, a canal: Panama.", return true
*/

"use strict";

function formatInputString(inputString) {
  inputString = inputString.toLowerCase();
  inputString = removeNonAlphabeticCharacters(inputString);

  return inputString;
}

function removeNonAlphabeticCharacters(inputString) {
  let cleanString = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charCodeAt(i) >= 97 && inputString.charCodeAt(i) <= 122) {
      cleanString += inputString[i];
    }
  }

  return cleanString;
}

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

function checkIfPalindrome(inputString) {
  inputString = formatInputString(inputString);
  let reversedString = reverseString(inputString);
  return reversedString == inputString;
}

console.log(checkIfPalindrome("level"));
console.log(checkIfPalindrome("algorithm"));
console.log(checkIfPalindrome("A man, a plan, a canal: Panama."));
