import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

class ProductList extends React.Component {
  componentWillMount() {
    this.props.productActions.getProducts();
  }

  render () {
    return (
      <div>
        <label htmlFor="favorites">
          {JSON.stringify(this.props.products.length) + ' '}
          Saved Product{this.props.products.length > 1  || this.props.products.length === 0 ? 's' : ''}
        </label>
        <table id="favorites">
          <tbody>
            {this.props.products.map((product, i) => {
              return <FavoriteEntry
                product={product}
                key={product.id}
                handleProductUpdate = {this.props.handleProductUpdate}
                handleProductDelete = {this.props.productActions.removeProduct}
              />
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;