"use strict";

function caesar(message, shift) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const numCode = message.charCodeAt(i);
    if (numCode >= 65 && numCode <= 90) {
      let alphabeticCode = numCode - 65 + shift;

      if (alphabeticCode > 25) {
        alphabeticCode -= 26;
      }
      alphabeticCode += 65;
      result += String.fromCharCode(alphabeticCode);
    } else if (numCode >= 97 && numCode <= 122) {
      let alphabeticCode = numCode - 97 + shift;

      if (alphabeticCode > 25) {
        alphabeticCode -= 26;
      }
      alphabeticCode += 97;
      result += String.fromCharCode(alphabeticCode);
    } else {
      result += message[i];
    }
  }
  return result;
}

console.log(caesar("Hello, Worlz!", -3));
