/*
This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

Ex: Given the following strings...

"LR", return true
"URURD", return false
"RUULLDRD", return true
*/

"use strict";

function checkRobotRoute(inputRoute) {
  const movements = new Map();

  for (let i = 0; i < inputRoute.length; i++) {
    if (!movements.has(inputRoute[i])) {
      movements.set(inputRoute[i], 0);
    } else {
      movements.set(inputRoute[i], movements.get(inputRoute[i]) + 1);
    }
  }

  if (
    movements.get("R") == movements.get("L") &&
    movements.get("U") == movements.get("D")
  ) {
    return true;
  }
  return false;
}

console.log(checkRobotRoute("LR"));
console.log(checkRobotRoute("URURD"));
console.log(checkRobotRoute("RUULLDRD"));
