// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1 Solution   O(1)

// function reverse(str) {
//    return str.split('').reverse().join('')
// }

// 2 Solution without reversed O(n)

// function reverse(str) {
//     let reversed = '';
//
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed
// }

// 3 Solution array helper

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf')

module.exports = reverse;
