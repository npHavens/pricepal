import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = (props) => (
  <div>
    <label htmlFor="favorites">
      {JSON.stringify(props.products.length) + ' '}
      Saved Products
    </label>
    <ul className="list-group" id="favorites">
      {props.products.map((product, i) => {
        return <FavoriteEntry product={product} key={i}/>
      })}
    </ul>
  </div>
);

FavoritesList.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default FavoritesList;