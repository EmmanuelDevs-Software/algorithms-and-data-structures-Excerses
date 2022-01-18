// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let newCharacterObject = {};
  let iteratorNumberForTheLoop = 0;
  let theCommonlyCharacterUsedIs = "";

  for (const i of str) {
    if (!newCharacterObject[i]) {
      newCharacterObject[i] = 1;
    } else {
      newCharacterObject[i]++;
    }

    //In one line logic conditional    newCharacterObject[char] = newCharacterObject[char] + 1 || 1;
  }

  for (let j in newCharacterObject) {
    if (newCharacterObject[j] > iteratorNumberForTheLoop) {
      iteratorNumberForTheLoop = newCharacterObject[j];
      theCommonlyCharacterUsedIs = j;
    }
  }

  return theCommonlyCharacterUsedIs;
}

maxChar("abcccccccd");

module.exports = maxChar;
