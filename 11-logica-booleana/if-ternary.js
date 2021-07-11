/**
 * file: if-ternary.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso if (ternário) em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

const status = 200;
// let message = '';

// if (status === 200) {
//     message = 'OK!'
// } else {
//     message = 'Error!';
// }

const message = status === 200 ? "OK!" : "Error!";

console.log(message);
