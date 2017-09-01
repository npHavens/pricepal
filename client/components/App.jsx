import React from 'react';
import UrlInput from './UrlInput.jsx';
import ProductInfoForm from './ProductInfoForm.jsx';
import FavoritesList from './FavoritesList.jsx'

export default class App extends React.Component {

  GetSavedProducts() {

  }

  AddProduct(productObj) {
   console.log('Adding Product')
   console.log(productObj)
   this.setState(pr)
  }

  render() {
    return (
     <div>
        <ProductInfoForm handleProductAdd={this.AddProduct.bind(this)}/>
        <FavoritesList />
      </div>);
  }
}