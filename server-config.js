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
  res.status(200).send(JSON.stringify(sampleData));
});

app.post('/products', function(req, res) {
  sampleData.push(req.body);
  res.status(200).send(sampleData);
});

app.put('/products', function(req, res) {
  sampleData.forEach(function(product) {
    if (product.id === req.body.id) {
      console.log('Updating purchase date in DB')
      product.datePurchased = new Date();
    }
  })
  res.status(200).send(sampleData);
});

module.exports = app;

