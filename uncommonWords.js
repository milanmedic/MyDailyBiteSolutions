/*
This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

"use strict";

function createWordSet(sentence) {
  const wordSet = new Set();
  for (let i = 0; i < sentence.length; i++) {
    wordSet.add(sentence[i]);
  }
  return wordSet;
}

function removeAWord(wordSet, word) {
  wordSet.delete(word);
  return;
}

function filterCommonWords(firstWordSet, secondWordSet) {
  for (let word of firstWordSet) {
    if (secondWordSet.has(word)) {
      removeAWord(secondWordSet, word);
      removeAWord(firstWordSet, word);
    }
  }
  return;
}

function findUncommonWords(firstSentence, secondSentence) {
  firstSentence = firstSentence.split(" ");
  secondSentence = secondSentence.split(" ");
  const firstSentenceWords = createWordSet(firstSentence);
  const secondSentenceWords = createWordSet(secondSentence);

  filterCommonWords(firstSentenceWords, secondSentenceWords);

  return [...firstSentenceWords, ...secondSentenceWords];
}

console.log(findUncommonWords("the quick", "brown fox"));
console.log(findUncommonWords("copper coffee pot", "hot coffee pot"));
console.log(
  findUncommonWords(
    "the tortoise beat the haire",
    "the tortoise lost to the haire"
  )
);
