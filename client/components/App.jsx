import React from 'react';
import Search from './Search.jsx';
import SearchResultsList from './SearchResultsList.jsx';
import FavoritesList from './FavoritesList.jsx';

export default class App extends React.Component {
  getProducts(query) {
    let options = {
      key:'',
      query: query
    };
  }

  render() {
    return (
     <div>
        <h3>Enter a Product</h3>
        <Search handleSearchInputChange={this.getProducts.bind(this)}/>
        <SearchResultsList />
        <FavoritesList />
      </div>);
  }
}