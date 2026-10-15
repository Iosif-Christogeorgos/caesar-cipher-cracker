"use strict";

function caesar(message, shift) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const numCode = message.charCodeAt(i);
    if ((numCode >= 65 && numCode <= 90) || (numCode >= 95 && numCode <= 122)) {
      result += String.fromCharCode(numCode + shift);
    } else {
      result += message[i];
    }
  }
  return result;
}

console.log(caesar("z", 3)); // should print KHOOR
