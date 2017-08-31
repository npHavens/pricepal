import React from 'react';
import UrlInput from './UrlInput.jsx';
import FavoritesList from './FavoritesList.jsx';

export default class App extends React.Component {

  render() {
    return (
     <div>
        <h3>Enter Product Info</h3>
        <UrlInput />
        <FavoritesList />
      </div>);
  }
}