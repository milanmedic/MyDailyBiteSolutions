/*
This question is asked by Google. Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/

"use strict";

function addAllNumbers(inputArray) {
  const allNumbers = new Set();
  for (let i = 0; i < inputArray.length; i++) {
    if (!allNumbers.has(inputArray[i])) {
      allNumbers.add(inputArray[i], 1);
    }
  }
  return allNumbers;
}

function findIntersection(setOfNumbers, searchedNumbers) {
  const intersection = [];
  for (let i = 0; i < searchedNumbers.length; i++) {
    if (setOfNumbers.has(searchedNumbers[i])) {
      intersection.push(searchedNumbers[i]);
      setOfNumbers.delete(searchedNumbers[i]);
    }
  }
  return intersection;
}

function intersectionOfNumbers(allNumbers, searchedNumbers) {
  const setOfNumbers = addAllNumbers(allNumbers);
  const intersection = findIntersection(setOfNumbers, searchedNumbers);

  return intersection;
}

console.log(intersectionOfNumbers([2, 4, 4, 2], [2, 4]));
console.log(intersectionOfNumbers([1, 2, 3, 3], [3, 3]));
console.log(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7]));
