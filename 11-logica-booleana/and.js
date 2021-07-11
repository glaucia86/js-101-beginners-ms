/**
 * file: and.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso lógica booleana em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

const status = 500;

if (status === 200) {
  console.log("OK!");
} else if (status === 400 || status === 500) {
  console.log("Error!");
} else {
  console.log("Unknown status");
}
