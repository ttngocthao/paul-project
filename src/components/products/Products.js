import React from "react"
import PropTypes from "prop-types"
import ProductItem from "./ProductItem"

const Products = props => {
  return (
    <ul>
      <ProductItem />
      <ProductItem />
    </ul>
  )
}

Products.propTypes = {}

export default Products
