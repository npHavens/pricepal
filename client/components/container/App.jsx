import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../src/actions/productActions.js';
import React from 'react';
import TitleInput from '../TitleInput.jsx';
import UrlInput from '../UrlInput.jsx';
import ProductInfoForm from '../ProductInfoForm.jsx';
import FavoritesList from '../FavoritesList.jsx'
import axios from 'axios';
import '../../css/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //this.getSavedProducts();
    this.props.productActions.getProducts();
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

  addProduct() {
    console.log('Adding Product'),
    axios.post('http://localhost:3000/products',
      {
        title: this.state.currentProductTitle,
        url: this.state.currentProductUrl,
        qtyPurchased: this.state.currentQty
      }).then(function(res) {
          this.setState({products: res.data});
      }.bind(this));
  }

  updateProduct(id, url) {
    console.log('Updating Product with ID:', id);
    window.open(url)
      axios.put('http://localhost:3000/products', {id: id})
      .then(function(res) {
        this.getSavedProducts();
      }.bind(this));
  }

  removeProduct(id) {
    console.log('Removing Product with ID:', id);
      axios.delete('http://localhost:3000/products', {params:{ id: id}})
      .then(function(res) {
        this.getSavedProducts();
      }.bind(this));
  }

  render() {
    return (
      <div >
      <div>TEST2</div>
        <ProductInfoForm
          handleProductAdd={this.addProduct.bind(this)}
          handleTitleInput={this.setTitle.bind(this)}
          handleUrlInput={this.setUrl.bind(this)}
          handleQtyInput={this.setQty.bind(this)}
        />
        {!this.props.products ? <p>Loading</p> :
          <FavoritesList
            products={this.props.products}
            handleProductUpdate={this.updateProduct.bind(this)}
            handleProductDelete={this.removeProduct.bind(this)}
        />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);