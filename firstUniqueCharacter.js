/*
This question is asked by Microsoft. Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0
*/

"use strict";

function populateDictionary(inputString) {
  const characters = new Map();
  for (let character of inputString) {
    if (!characters.has(character)) {
      characters.set(character, 1);
    } else {
      characters.set(character, characters.get(character) + 1);
    }
  }

  return characters;
}

function findUniqueCharacter(characters) {
  for (let [key, value] of characters) {
    if (value == 1) {
      return key;
    }
  }
}

function getFirstUniqueCharacter(inputString) {
  let characters = populateDictionary(inputString);
  let firstUniqueCharacter = findUniqueCharacter(characters);

  return inputString.indexOf(firstUniqueCharacter);
}

console.log(getFirstUniqueCharacter("abcabd"));
console.log(getFirstUniqueCharacter("thedailybyte"));
console.log(getFirstUniqueCharacter("developer"));
