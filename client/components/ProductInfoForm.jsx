import React from 'react';
import UrlInput from './UrlInput.jsx';
import QtyInput from './QtyInput.jsx';
import AddProductButton from './AddProductButton.jsx';

export default class ProductInfoForm extends React.Component {
  constructor(props) {
    //console.log(props)
    super(props);
    this.state = {
    };
  }

  // handleInputChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  render() {
    return (
     <div className="form-group">
        Enter Product Info
        <UrlInput handleUrlInputChange={this.props.handleUrlInput}/>
        <QtyInput handleQtyInputChange={this.props.handleQtyInput}/>
        <AddProductButton handleButtonClick={this.props.handleProductAdd}/>
      </div>);
  }
}