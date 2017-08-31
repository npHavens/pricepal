import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

let FavoritesList = () => (
  <div
  style={{
    'marginTop': '10px',
    'border': '1px solid black'
  }}
  className="favorites">Favorites
    <FavoriteEntry />
  </div>
);

export default FavoritesList;