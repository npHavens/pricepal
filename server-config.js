const express = require('express');
const app = express();
const sampleData = require('./lib/sample-data.js')

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function(req, res) {
  //res.status(200).send()
  console.log(sampleData);
  res.status(200).send(JSON.stringify(sampleData));
})



module.exports = app;

