const express = require('express');
const app = express();
let sampleData = require('./lib/sample-data.js')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  //res.status(200).send()
  //console.log(sampleData);
  res.status(200).send(JSON.stringify(sampleData));
})

app.post('/products', function(req, res) {
  //console.log(req.body)
  sampleData.push(req.body)
  res.status(200).send();
})



module.exports = app;

