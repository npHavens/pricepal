import React from 'react';
import UpdateProductButton from './UpdateProductButton.jsx';
import RemoveProductButton from './RemoveProductButton.jsx';

export default class FavoriteEntry extends React.Component {

  render() {
    let rawPurchaseDate = new Date(this.props.product.updatedAt);
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>Purchased on{
          ` ${rawPurchaseDate.getMonth() + 1}-${rawPurchaseDate.getDate()}-${rawPurchaseDate.getFullYear()}
          `
        }</td>
         <td>{this.props.product.daysRemaining + ' '}Days Remaining</td>
         <td><UpdateProductButton
           handleButtonClick={this.props.handleProductUpdate}
           productId={this.props.product.id}
           productUrl={this.props.product.url}
         /></td>
         <td><RemoveProductButton
           handleButtonClick={this.props.handleProductDelete}
           productId={this.props.product.id}
         /></td>
      </tr>
    )
  }
};

