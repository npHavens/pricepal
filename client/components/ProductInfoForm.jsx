import React from 'react';
import UrlInput from './UrlInput.jsx'

export default class ProductInfoForm extends React.Component {
  constructor(props) {
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
        <UrlInput />
      </div>);
  }
}