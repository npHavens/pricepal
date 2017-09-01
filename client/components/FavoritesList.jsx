import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = (props) => (
  <div>
    <label htmlFor="favorites">
      {JSON.stringify(props.products.length) + ' '}
      Saved Products
    </label>
    <table className="table table-hover" id="favorites">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date Purchased</th>
          <th>Quantity Left</th>
        </tr>
      </thead>
      {props.products.map((product, i) => {
        return <FavoriteEntry product={product} key={i}/>
      })}
    </table>
  </div>
);

FavoritesList.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default FavoritesList;