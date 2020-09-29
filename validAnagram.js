/*
This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t.
Note: An anagram is a word formed by reordering the letters of another word.

Ex: Given the following strings...

s = "cat", t = "tac", return true
s = "listen", t = "silent", return true
s = "program", t = "function", return false
*/

function populateCharacterDictionary(inputString) {
  const characterDictionary = new Map();

  for (let i = 0; i < inputString.length; i++) {
    if (!characterDictionary.has(inputString[i])) {
      characterDictionary.set(inputString[i], 1);
    } else {
      characterDictionary.set(
        inputString[i],
        characterDictionary.get(inputString[i]) + 1
      );
    }
  }

  return characterDictionary;
}

function checkValidCharactersInDictionary(
  characterDictionary,
  potentialAnagram
) {
  for (let i = 0; i < potentialAnagram.length; i++) {
    if (characterDictionary.has(potentialAnagram[i])) {
      characterDictionary.set(
        potentialAnagram[i],
        characterDictionary.get(potentialAnagram[i]) - 1
      );
    }
  }
}
function checkForLetterCompatibility(characterDictionary) {
  for (let [key, value] of characterDictionary) {
    if (value != 0) {
      return false;
    }
  }
  return true;
}

function validAnagram(stringToBeChecked, potentialAnagram) {
  let toBeCheckedStringDictionary = {};
  toBeCheckedStringDictionary = populateCharacterDictionary(stringToBeChecked);

  checkValidCharactersInDictionary(
    toBeCheckedStringDictionary,
    potentialAnagram
  );

  if (!checkForLetterCompatibility(toBeCheckedStringDictionary)) {
    return false;
  }
  return true;
}

console.log(validAnagram("cat", "tac"));
console.log(validAnagram("listen", "silent"));
console.log(validAnagram("program", "function"));
