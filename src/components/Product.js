import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { price, quantity, title, action } = this.props;
    return (
      <div style={{padding: 10, borderWidth:1, borderColor: '#ddd', borderStyle: 'solid', width: '120px'}}>
        {title}
        <div>${price} {quantity ? `x ${quantity}` : null}</div>
        {' '}
        <div>{action}</div>
      </div>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  action: PropTypes.node
}
