import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = (props) => (
  <div className="container">
    <label htmlFor="favorites">
      {JSON.stringify(props.products.length) + ' '}
      Saved Product{props.products.length > 1  || props.products.length === 0 ? 's' : ''}
    </label>
    <table className="table table-hover" id="favorites">
      <tbody>
        {props.products.map((product, i) => {
          return <FavoriteEntry
            product={product}
            key={i}
            handleProductUpdate = {props.handleProductUpdate}
            handleProductDelete = {props.handleProductDelete}
          />
        })
      }
      </tbody>
    </table>
  </div>
);

FavoritesList.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default FavoritesList;