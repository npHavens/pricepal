import React from 'react';
import UpdateProductButton from './UpdateProductButton.jsx';
import RemoveProductButton from './RemoveProductButton.jsx';

export default class FavoriteEntry extends React.Component {
  constructor(props) {
    super(props);
      //console.log(props)
    this.state = {
      rawPurchaseDate: new Date(this.props.product.updatedAt)
    }
  }



  render() {
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>Purchased on{
          ` ${this.state.rawPurchaseDate.getMonth() + 1}-${this.state.rawPurchaseDate.getDate()}-${this.state.rawPurchaseDate.getFullYear()}
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

