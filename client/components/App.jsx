import React from 'react';
import Search from './Search.jsx';
import SearchResultsList from './SearchResultsList.jsx';
import FavoritesList from './FavoritesList.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h3>Enter a Product</h3>
        <Search />
        <SearchResultsList />
        <FavoritesList />
      </div>);
  }
}