import React from 'react';
import UrlInput from './UrlInput.jsx';
import ProductInfoForm from './ProductInfoForm.jsx';
import FavoritesList from './FavoritesList.jsx'

export default class App extends React.Component {

  render() {
    return (
     <div>
        <ProductInfoForm />
        <FavoritesList />
      </div>);
  }
}