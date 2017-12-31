import React from 'react';
import { bindActionCreators } from 'redux';
import * as productActions from '../../src/actions/productActions.js';
import { connect } from 'react-redux';
import TitleInput from '../TitleInput.jsx';
import UrlInput from '../UrlInput.jsx';
import QtyInput from '../QtyInput.jsx';
import AddProductButton from '../AddProductButton.jsx';
import ProductInfoForm from '../ProductInfoForm.jsx';

const mapStateToProps = state => {
  console.log(state)
  return {
    currentProduct: state.newProduct
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoForm);