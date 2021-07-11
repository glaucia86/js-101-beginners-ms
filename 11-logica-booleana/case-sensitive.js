/**
 * file: case-sensitive.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso if-else em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

const status = "error";

if (status.toUpperCase() === "ERROR") {
  console.log("Something went wrong!");
} else {
  console.log("Looks great!!");
}
