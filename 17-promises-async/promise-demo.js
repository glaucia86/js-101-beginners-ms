/**
 * file: promise-demo.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de async/await.
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log("Done!!");
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log("Also done!!");
    return Promise.resolve(42);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Error!");
  });
