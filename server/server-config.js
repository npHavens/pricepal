const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const Product = require('./models/Product.js');

let config = process.env.NODE_ENV = 'production' ? require('../webpack.dev.js') : config = require('../webpack.prod.js');

const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const webpackDevMiddlewareInstance = webpackDevMiddleware( compiler, {
  publicPath: config.output.publicPath
});

app.use(webpackDevMiddlewareInstance);
app.use(webpackHotMiddleware(compiler));

app.get('/products', function(req, res) {
  Product.getAll(function(array) {
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

