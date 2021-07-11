/**
 * file: dates.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de datas em JavaScript
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

const now = new Date();
const win95Launch = new Date(1995, 7, 24);

console.log(now);
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);
