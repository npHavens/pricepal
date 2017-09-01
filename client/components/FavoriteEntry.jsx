import React from 'react';
import Iframe from 'react-iframe'

let FavoriteEntry = (props) => (
    <div className="favorite">
      <a src={props.product.url}>{props.product.title}</a>
      <a> Quantity Left: {props.product.qtyPurchased} </a>
      <a> Remove from Favorites </a>
    </div>
);


FavoriteEntry.propTypes = {
  product: React.PropTypes.object.isRequired
};


export default FavoriteEntry;