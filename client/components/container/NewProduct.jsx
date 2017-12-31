import React from 'react';
import { bindActionCreators } from 'redux';
import * as NewProductActions from '../../src/actions/NewProductActions.js';
import { connect } from 'react-redux';
import TitleInput from '../TitleInput.jsx';
import UrlInput from '../UrlInput.jsx';
import QtyInput from '../QtyInput.jsx';
import AddProductButton from '../AddProductButton.jsx';
import ProductInfoForm from '../ProductInfoForm.jsx';

const mapStateToProps = state => {
  return {
    currentProduct: state.newProduct
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(NewProductActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoForm);