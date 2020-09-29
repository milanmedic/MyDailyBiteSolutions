/*
This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings...

"USA", return true
"Calvin", return true
"compUter", return false
"coding", return true
*/

"use strict";

function checkCapitalization(inputString) {
  let upperCaseMarkedArray = [];
  upperCaseMarkedArray.length = inputString.length;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90) {
      upperCaseMarkedArray[i] = 1;
    } else {
      upperCaseMarkedArray[i] = 0;
    }
  }

  for (let i = 0; i < upperCaseMarkedArray.length; i++) {
    if (
      i != 0 &&
      upperCaseMarkedArray[i] == 1 &&
      upperCaseMarkedArray[i - 1] != 1
    ) {
      return false;
    }
  }

  return true;
}

console.log(checkCapitalization("USA"));
console.log(checkCapitalization("Calvin"));
console.log(checkCapitalization("compUter"));
console.log(checkCapitalization("coding"));
