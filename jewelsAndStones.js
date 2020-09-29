/*
This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

Ex: Given the following jewels and stones...

jewels = "abc", stones = "ac", return 2
jewels = "Af", stones = "AaaddfFf", return 3
jewels = "AYOPD", stones = "ayopd", return 0
*/

"use strict";

function jewelsAndStones(jewels, stones) {
  let stonesThatAreJewels = 0;
  const allJewels = new Set();

  for (let i = 0; i < jewels.length; i++) {
    if (!allJewels.has(jewels[i])) {
      allJewels.add(jewels[i]);
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (allJewels.has(stones[i])) {
      stonesThatAreJewels++;
    }
  }

  return stonesThatAreJewels;
}

console.log(jewelsAndStones("abc", "ac"));
console.log(jewelsAndStones("Af", "AaaddfFf"));
console.log(jewelsAndStones("AYOPD", "ayopd"));
