/*
This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.

Ex: Given the following...

[1, 3, 8, 2], k = 10, return true (8 + 2)
[3, 9, 13, 7], k = 8, return false
[4, 2, 6, 5, 2], k = 4, return true (2 + 2)
*/
"use strict";

function twoSum(inputArray, targetSum) {
  const sumCandidates = new Map();
  for (let i = 0; i < inputArray.length; i++) {
    let difference = targetSum - inputArray[i];
    if (sumCandidates.has(difference)) {
      return true;
    }
    sumCandidates.set(inputArray[i], i);
  }
  return false;
}

console.log(twoSum([1, 3, 8, 2], 10));
console.log(twoSum([3, 9, 13, 7], 8));
console.log(twoSum([4, 2, 6, 5, 2], 4));
