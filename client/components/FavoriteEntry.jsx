import React from 'react';
import moment from 'moment';

let FavoriteEntry = (props) => (
    <tbody>
      <tr>
        <td src={props.product.url}>{props.product.title}</td>
        <td>{props.product.datePurchased} </td>
        <td>{props.product.qtyPurchased} </td>
        <td
            className="btn"
            id="remove"
            type="remove"
            onClick=''
          >Remove
        </td>
      </tr>
    </tbody>
);


FavoriteEntry.propTypes = {
  product: React.PropTypes.object.isRequired
};


export default FavoriteEntry;