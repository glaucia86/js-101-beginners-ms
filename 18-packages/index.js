/**
 * file: index.js
 * data: 10/07/2021
 * description: arquivo responsável para ensinar uso de async/await.
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:3000');
});
