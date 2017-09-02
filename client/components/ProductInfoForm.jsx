import React from 'react';
import TitleInput from './TitleInput.jsx';
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

  render() {
    return (
      <form className= "container-fluid form-horizontal">
        <h3 id="form-title" className="row">Enter Product Info</h3>
        <TitleInput  handleTitleInputChange={this.props.handleTitleInput}/>
        <UrlInput handleUrlInputChange={this.props.handleUrlInput}/>
        <QtyInput handleQtyInputChange={this.props.handleQtyInput}/>
        <AddProductButton handleButtonClick={this.props.handleProductAdd}/>
      </form>
    );
  }
}