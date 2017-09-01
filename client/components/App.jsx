import React from 'react';
import UrlInput from './UrlInput.jsx';
import ProductInfoForm from './ProductInfoForm.jsx';
import FavoritesList from './FavoritesList.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      products: [],
      currentProductUrl: '',
      currentQty: 0
    };
  }

  setUrl(url) {

    this.setState({
      currentProductUrl: url
    });
  }

  setQty(qty) {
    console.log('setting qty to', qty)
    this.setState({
      currentQty: qty
    });
  }

  getSavedProducts() {
    console.log('Getting saved products');
  }

  addProduct() {
   console.log('Adding Product');
   this.getSavedProducts();
  }

  render() {
    return (
     <div>
        <ProductInfoForm
          handleProductAdd={this.addProduct.bind(this)}
          handleUrlInput={this.setUrl.bind(this)}
          handleQtyInput={this.setQty.bind(this)}
        />
        <FavoritesList />
      </div>);
  }
}