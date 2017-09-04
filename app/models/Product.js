const Sequelize = require('sequelize');
const db = require('../config.js');

const Product = db.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  qtyPurchased: Sequelize.INTEGER
});

Product.createNew = function(data, cb) {
  Product.sync()
    .then(function() {
      return Product.create({
        title: data.title,
        url: data.url,
        qtyPurchased: data.qtyPurchased
      })
      .then(function(products) {
        cb(products);
      })
    })
    .catch(function(err) {
      console.log(err);
      db.close();
    })
};

Product.getAll = function(cb) {
  Product.sync()
    .then(function() {
      Product.findAll()
      .then(function(products) {
        //console.log(products)
        cb(products);
      })
    })
};

Product.delete = function(productId, cb) {
  Product.sync()
  .then(function() {
    Product.destroy({where: {id: productId}})
    .then(function() {
      console.log('DELETING')
      cb();
    })
  })

};


module.exports = Product;