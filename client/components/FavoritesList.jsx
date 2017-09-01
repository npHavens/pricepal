import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = (props) => (

  <div className="favorites">Saved Product
    <FavoriteEntry />
  </div>
);

FavoritesList.propTypes = {
  products: React.PropTypes.array.isRequired
};

export default FavoritesList;