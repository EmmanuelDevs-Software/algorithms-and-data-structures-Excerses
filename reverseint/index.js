// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let arrN = n.toString().split("").reverse().join("");
  // || Number(arrN)
  // if(n<0){
  //     return parseInt(arrN) * -1;
  // }

  return parseInt(arrN) * Math.sign(n); // or Math.floor(arrN)
}

reverseInt(51);

module.exports = reverseInt;
