// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1 Solution

function palindrome(str) {
    let reverseStr = '';
    // classic way
    // for(let i = 0; i < str.length; i++){
    //     reverseStr = str[i] + reverseStr;
    // }

    // ES5 way
    for (let character of str) {
        reverseStr = character + reverseStr;
    }
    return reverseStr === str;
}


// 2 Solution

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }


// 3 Solution every()


// function palindrome(str) {
//    return str.split('').every((char, index)=>{
//         return char === str[str.length - index -1];
//     });
//     return str === reversed;
// }


palindrome('abcdefg')

module.exports = palindrome;
