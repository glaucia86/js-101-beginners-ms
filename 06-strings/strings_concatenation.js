/**
 * file: strings_concatenation.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de strings em javascript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

let str1 = "Hello";
let str2 = "World!";

//Using the + operator
console.log("********Using the + operator********\n");
console.log(str1 + str2);
console.log(str1 + "Big" + str2);

console.log("\n********Adding Spacing********\n");
//Adding Spacing
str1 = "Hello ";

console.log(str1 + str2);
console.log(str1 + "Big " + str2);

console.log("\n********Be careful with numbers!********\n");
//Be careful with numbers!
let num1 = 1;
let num2 = "1";

console.log(num1 + num2);
console.log(num1 + 1);
