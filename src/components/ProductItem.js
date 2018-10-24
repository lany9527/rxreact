import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    const addToCartAction = (
      <button
        onClick={this.props.onAddToCartClicked}
        disabled={product.inventory > 0 ? "" : "disabled"}
      >
        {product.inventory > 0 ? "加入购物车" : "已售完"}
      </button>
    );

    return (
      <div style={{ marginBottom: 20, display:'flex', flexDirection:'row' }}>
        <Product
          title={product.title}
          price={product.price}
          action={addToCartAction}
        />
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};
