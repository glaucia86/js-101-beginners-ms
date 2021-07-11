/**
 * file: reverse.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar usar comentários em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

function reverseString(value) {
  let reversedValue = '';

  value.split('').forEach((char) => {
    reversedValue = char + reversedValue;
  });

  return reversedValue;
}

console.log(reverseString('Reverse Me'));
