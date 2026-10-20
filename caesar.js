export { caesar, crackCipher };

const commonWords = "the and you to a of is it are in on at have".split(" ");

function caesar(message, shift) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const numCode = message.charCodeAt(i);
    if (numCode >= 65 && numCode <= 90) {
      let alphabeticCode = numCode - 65 + shift;

      if (alphabeticCode > 25) {
        alphabeticCode = alphabeticCode % 26;
      } else if (alphabeticCode < 0) {
        alphabeticCode = (alphabeticCode % 26) + 26;
        if (alphabeticCode === 26) alphabeticCode = 0;
      }
      alphabeticCode += 65;
      result += String.fromCharCode(alphabeticCode);
    } else if (numCode >= 97 && numCode <= 122) {
      let alphabeticCode = numCode - 97 + shift;

      if (alphabeticCode > 25) {
        alphabeticCode = alphabeticCode % 26;
      } else if (alphabeticCode < 0) {
        alphabeticCode = (alphabeticCode % 26) + 26;
        if (alphabeticCode === 26) alphabeticCode = 0;
      }
      alphabeticCode += 97;
      result += String.fromCharCode(alphabeticCode);
    } else {
      result += message[i];
    }
  }
  return result;
}

function crackCipher(input) {
  let maxCommonWordCounter = 0;
  let chosenSentence = "";
  for (let i = 0; i < 26; i++) {
    let decryptedData = caesar(input, i);
    let checkwordsArray = decryptedData.toLowerCase().split(" ");
    let words = 0;
    for (let word of checkwordsArray) {
      if (commonWords.includes(word)) {
        words++;
      }
    }
    if (words > maxCommonWordCounter) {
      chosenSentence = decryptedData;
      maxCommonWordCounter = words;
    }
  }
  if (maxCommonWordCounter > 0) return chosenSentence;
  else return "No English found";
}
