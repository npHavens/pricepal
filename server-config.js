const express = require('express');
const app = express();
const sampleData = require('./lib/sample-data.js')
const cors = require('cors');
const bodyParser = require('body-parser');
const Product = require('./app/models/Product.js');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  Product.getAll(function(array) {
    array.forEach(function(product) {
      const start = Date.parse(new Date(product.updatedAt));
      const timeDiff = Date.now() - start;
      const daysRemaining = Math.floor(product.qtyPurchased - (timeDiff / (1000 * 3600 * 24)))
      product.dataValues.daysRemaining = daysRemaining;
      //console.log(product.qtyPurchased - (timeDiff / (1000 * 3600 * 24)))
      console.log(product.dataValues)
    })
    res.status(200).send(array);
  });
});

app.post('/products', function(req, res) {
  Product.createNew(req.body, function(array) {
     res.status(200).send(array);
  });
});

app.put('/products', function(req, res) {
  Product.renewPurchase(req.body.id, function() {
    res.status(200).send();
  })
});

app.delete('/products', function(req, res) {
  let productId = +req.url[req.url.length - 1];
  Product.delete(productId, function(array) {
    res.status(200).send(array);
  })
});

module.exports = app;

