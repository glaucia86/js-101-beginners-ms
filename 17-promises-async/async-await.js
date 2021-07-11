/**
 * file: async-await.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de async/await.
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function longRunningOperation() {
  // logic
  return 42;
}

async function run() {
  // logic
  console.log("Start!!");
  await promiseTimeout(2000);

  const response = await longRunningOperation();
  console.log(response);

  console.log("Stop!!");
}

run();
