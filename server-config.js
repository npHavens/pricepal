const express = require('express');
const app = express();

app.get('/', function(req, res) {
  //res.status(200).send()
  res.status(200).send('');
})



module.exports = app;

