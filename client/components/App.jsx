import React from 'react';
import TitleInput from './TitleInput.jsx';
import UrlInput from './UrlInput.jsx';
import ProductInfoForm from './ProductInfoForm.jsx';
import FavoritesList from './FavoritesList.jsx'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      currentProductTitle: '',
      currentProductUrl: '',
      currentQty: 0
    };
  }

  componentDidMount() {
    this.getSavedProducts();
  }

  setTitle(title) {
    this.setState({
      currentProductTitle: title
    });
  }

  setUrl(url) {
    this.setState({
      currentProductUrl: url
    });
  }

  setQty(qty) {
    this.setState({
      currentQty: qty
    });
  }

  getSavedProducts() {
    setTimeout(this.getSavedProducts.bind(this), 10000);
    console.log('Getting saved products');
    axios.get('http://localhost:4568/')
    .then(function(res) {
      this.setState({products: res.data});
    }.bind(this))
  }

  addProduct() {
    console.log('Adding Product'),
    axios.post('http://localhost:4568/products',
      {
        id: this.state.products.length,
        title: this.state.currentProductTitle,
        url: this.state.currentProductUrl,
        datePurchased: new Date(),
        qtyPurchased: this.state.currentQty
      }).then(function(res) {
          this.setState({products: res.data});
      }.bind(this));
  }

  updateProduct(id) {
    console.log('Updating Product with ID:', id);
      axios.put('http://localhost:4568/products',
      { id: id}).then(function(res) {
          this.setState({products: res.data});
      }.bind(this));
  }

  removeProduct() {
    console.log('Removing Product');
  }


  render() {
    return (
     <div className="container-fluid">
        <ProductInfoForm
          handleProductAdd={this.addProduct.bind(this)}
          handleTitleInput={this.setTitle.bind(this)}
          handleUrlInput={this.setUrl.bind(this)}
          handleQtyInput={this.setQty.bind(this)}
        />
        {!this.state.products ? <p>Loading</p> :
        <FavoritesList
          products={this.state.products}
          handleProductUpdate={this.updateProduct.bind(this)}
          handleProductDelete={this.removeProduct.bind(this)}
        />}
    </div>);
  }
}