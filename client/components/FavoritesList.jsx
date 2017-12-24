import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../src/actions/productActions.js';
import PropTypes from 'prop-types';
import React from 'react';
import FavoriteEntry from './FavoriteEntry.jsx';

class FavoritesList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.productActions.fetchStuff();
  }

  render() {
    return (
      <div>
        <label htmlFor="favorites">
          {JSON.stringify(this.props.products.length) + ' '}
          Saved Product{this.props.products.length > 1  || this.props.products.length === 0 ? 's' : ''}
        </label>
        <table className="table table-hover" id="favorites">
          <tbody>
            {this.props.products.map((product, i) => {
              return <FavoriteEntry
                product={product}
                key={i}
                handleProductUpdate = {this.props.handleProductUpdate}
                handleProductDelete = {this.props.handleProductDelete}
              />
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
};

FavoritesList.propTypes = {
  productActions: PropTypes.object,
  products: PropTypes.array
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);