// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * using sort()
 */

/**
 * Solution 1
 */

function anagrams(stringA, stringB) {
  let newArrA = cleanStringSolution1(stringA);
  let newArrB = cleanStringSolution1(stringB);
  return newArrA === newArrB;
}

/**
 * Helper function for 1
 */

function cleanStringSolution1(str) {
  return str.replace(/[^\w]/g, "").toLoweCase().sort().join("");
}

/**
 * Solution 2
 */

// function anagrams(stringA, stringB) {
//   let newArrA = cleanStringSolution2(stringA);
//   let newArrB = cleanStringSolution2(stringB);
//   return newArrA === newArrB;
// }

/**
 * Helper function for 1
 */

function cleanStringSolution2(str) {
  return str.replace(/[^\w]/g, "").toLoweCase().sort().join("");
}

/**
 * Solution 3
 */

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (const key in aCharMap) {
//     if (aCharMap[key] !== bCharMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

/**
 * Help'er function for solution 3
 */

// function buildCharMapSolution3(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = (charMap[char] + 1) | 1;
//   }
//   return charMap;
// }

anagrams("Whoa! Hi!", "Hi! Whoa!");

module.exports = anagrams;
