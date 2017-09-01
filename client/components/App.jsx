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


  getSavedProducts() {
    console.log('Getting saved products');
  }

  addProduct(productObj) {
   console.log('Adding Product');
   console.log(productObj);
   this.getSavedProducts();
  }

  render() {
    return (
     <div>
        <ProductInfoForm handleProductAdd={this.addProduct.bind(this)}/>
        <FavoritesList />
      </div>);
  }
}