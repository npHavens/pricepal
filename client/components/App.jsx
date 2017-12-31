import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../src/actions/productActions.js';
import React from 'react';
import TitleInput from './TitleInput.jsx';
import UrlInput from './UrlInput.jsx';
import NewProduct from './container/NewProduct.jsx';
import FavoritesList from './container/FavoritesList.jsx'
import axios from 'axios';
import AddProductButton from './AddProductButton.jsx';
import '../css/styles.css';

class App extends React.Component {
  // setTitle(title) {
  //   this.setState({
  //     currentProductTitle: title
  //   });
  // }

  // setUrl(url) {
  //   this.setState({
  //     currentProductUrl: url
  //   });
  // }

  // setQty(qty) {
  //   this.setState({
  //     currentQty: qty
  //   });
  // }

  // addProduct() {
  //   console.log('Adding Product'),
  //   axios.post('http://localhost:3000/products',
  //     {
  //       title: this.state.currentProductTitle,
  //       url: this.state.currentProductUrl,
  //       qtyPurchased: this.state.currentQty
  //     }).then(function(res) {
  //         this.setState({products: res.data});
  //     }.bind(this));
  // }

  // updateProduct(id, url) {
  //   console.log('Updating Product with ID:', id);
  //   window.open(url)
  //     axios.put('http://localhost:3000/products', {id: id})
  //     .then(function(res) {
  //       this.getSavedProducts();
  //     }.bind(this));
  // }

  // removeProduct(id) {
  //   console.log('Removing Product with ID:', id);
  //     axios.delete('http://localhost:3000/products', {params:{ id: id}})
  //     .then(function(res) {
  //       this.getSavedProducts();
  //     }.bind(this));
  // }

  render() {
    return (
      <div >
        <NewProduct/>
        <FavoritesList/>
      </div>
    );
  }
}

export default App;