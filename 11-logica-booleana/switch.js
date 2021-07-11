/**
 * file: switch.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de switch/case em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

const status = 500;

switch (status) {
  case 200:
    console.log("OK!");
    break;
  case 400: // or
  case 500: // or
    console.log("Error!");
    break;
  default:
    // else
    console.log("Unknown status");
    break;
}
