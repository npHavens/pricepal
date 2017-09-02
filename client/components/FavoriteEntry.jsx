import React from 'react';
import UpdateProductButton from './UpdateProductButton.jsx';
import RemoveProductButton from './RemoveProductButton.jsx';

export default class FavoriteEntry extends React.Component {
  constructor(props) {
    super(props);
      //console.log(props)
    this.state = {
      rawPurchaseDate: new Date(this.props.product.datePurchased),
      daysRemaining: this.props.product.qtyPurchased
    }
  }

  componentDidMount() {
    this.getDaysRemaining();
  }

  getDaysRemaining() {
    let start = Date.parse(this.state.rawPurchaseDate);
    let timeDiff = Date.now() - start;

    this.setState({
      daysRemaining: Math.floor(this.state.daysRemaining - (timeDiff / (1000 * 3600 * 24)))
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.product.title}</td>
        <td>Purchased on{
          ` ${this.state.rawPurchaseDate.getMonth() + 1}-${this.state.rawPurchaseDate.getDate()}-${this.state.rawPurchaseDate.getFullYear()}
          `
        }</td>
         <td>{this.state.daysRemaining + ' '}Days Remaining</td>
         <td><UpdateProductButton /></td>
         <td><RemoveProductButton /></td>
      </tr>
    )
  }
};

