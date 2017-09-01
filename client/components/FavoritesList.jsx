import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = (props) => (
  <div className="favorites">Saved Products{JSON.stringify(props.products.length)}
    {props.products.map((product, i) => {
      return <FavoriteEntry product={product} key={i}/>
    })}
  </div>
);

FavoritesList.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default FavoritesList;