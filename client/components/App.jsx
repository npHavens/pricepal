import React from 'react';
import Search from './Search.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h3>Enter a Product</h3>
        <Search />
      </div>);
  }
}