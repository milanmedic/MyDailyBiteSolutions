/*
This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings.
Note: you may assume all strings only contain lowercase alphabetical characters.

Ex: Given the following arrays...

["colorado", "color", "cold"], return "col"
["a", "b", "c"], return ""
["spot", "spotty", "spotted"], return "spot"
*/

function findShortestString(inputArray) {
  let smallestLength = Number.MAX_VALUE;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length < smallestLength) {
      smallestLength = inputArray[i].length;
    }
  }

  return smallestLength;
}

function findLongestCommonPrefix(inputStringArray) {
  let longestCommonPrefix = "";
  let length = findShortestString(inputStringArray);

  for (let i = 0; i < length; i++) {
    if (
      inputStringArray[0][i] == inputStringArray[1][i] &&
      inputStringArray[1][i] == inputStringArray[2][i]
    ) {
      longestCommonPrefix += inputStringArray[0][i];
    }
  }

  return longestCommonPrefix;
}

console.log(findLongestCommonPrefix(["colorado", "color", "cold"]));
console.log(findLongestCommonPrefix(["a", "b", "c"]));
console.log(findLongestCommonPrefix(["spot", "spotty", "spotted"]));
