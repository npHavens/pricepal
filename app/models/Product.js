const Sequelize = require('sequelize');
const db = require('./config.js');

const Product = db.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    defualtValue: 0,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  qtyPurchased: Sequelize.INTEGER,
  datePurchased: Sequalize.STRING
});

Product.createNew = function(data) {
  Product.sync()
    .then(function() {
      return Product.create({
        title: data.title,
        url: data.url,
        qtyPurchased: data.qtyPurchased,
        datePurchased: data.datePurchased
      });
    })
    .catch(function(err) {
      console.log(err);
      db.close();
    })
};

module.exports = Product;