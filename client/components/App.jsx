import React from 'react';
import NewProduct from './container/NewProduct.jsx';
import FavoritesList from './container/FavoritesList.jsx'

class App extends React.Component {


  // updateProduct(id, url) {
  //   console.log('Updating Product with ID:', id);
  //   window.open(url)
  //     axios.put('http://localhost:3000/products', {id: id})
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