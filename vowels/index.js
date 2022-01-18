// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution 1
// function vowels(str) {
//   let counter = 0;
//   const vowelsChecker = ["a", "e", "i", "o", "u"];
//   for (const char of str.toLowerCase()) {
//     if (vowelsChecker.includes(char)) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// Solution 2
function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
