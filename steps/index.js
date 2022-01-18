// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 1

function steps(n) {
  //the first for iterate through rows
  for (let row = 0; row < n; row++) {
    let step = "";
    // from 0 to n (iterate through columns)
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

// solution 2

// function steps(n, row = 0, step = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === step.length) {
//     console.log(step);
//      steps(n, row + 1);
//      return
//   }

//   const add = step.length <= row ? '#' : ' ';
//   steps(n, row, step + add);
// }

// steps(4);
module.exports = steps;
