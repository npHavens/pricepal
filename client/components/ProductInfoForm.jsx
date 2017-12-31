import React from 'react';
import { bindActionCreators } from 'redux';
import * as productActions from '../src/actions/productActions.js';
import { connect } from 'react-redux';
import TitleInput from './TitleInput.jsx';
import UrlInput from './UrlInput.jsx';
import QtyInput from './QtyInput.jsx';
import AddProductButton from './AddProductButton.jsx';

const ProductInfoForm = ({ productActions }) => (
  <form>
    <h3>Enter Product Info</h3>
    <TitleInput handleChange={productActions.setNewProductInfo}/>
    <UrlInput handleChange={productActions.setNewProductInfo}/>
    <QtyInput handleChange={productActions.setNewProductInfo}/>
    <AddProductButton handleClick={productActions.addProduct}/>
  </form>
);

export default ProductInfoForm;