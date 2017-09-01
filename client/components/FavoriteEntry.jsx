import React from 'react';

let FavoriteEntry = (props) => (
    <li className="list-group-item">
      <a src={props.product.url}>{props.product.title}</a>
      <a> Quantity Left: {props.product.qtyPurchased} </a>
      <button
          className="btn"
          id="remove"
          type="remove"
          onClick=''
        >Remove</button>
    </li>
);


FavoriteEntry.propTypes = {
  product: React.PropTypes.object.isRequired
};


export default FavoriteEntry;