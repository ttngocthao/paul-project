import React from "react"
import PropTypes from "prop-types"
import styles from "./grid.module.scss"
import ImgCard from "../ImgCard/ImgCard"

const Grid = ({ itemData }) => {
  const { image01, image02, image03, image04, title } = itemData
  return (
    <div className="grid">
      <div className="info-block gold-block">
        {/* { shortInto.heading && <h2 className="block-heading">Build Your Amazing Website</h2>} */}
        <p>
          Quisque non est velit. Phasellus ac enim facilisis, pulvinar turpis
          sit amet, faucibus erat. Aliquam ac ex consectetur, venenatis mi et,
          dignissim tortor. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Proin faucibus bibendum
          felis ac ullamcorper. Quisque non pulvinar enim, blandit laoreet
          dolor.
        </p>
        <a className="view-btn white">Read more about us</a>
      </div>
      <div className="img-block img-01"></div>
      <div className="img-block img-02"></div>
      <div className="title-block">
        <h1>{title}</h1>
      </div>
      <div className="black-block"></div>
      <div className="img-block img-03"></div>
      <div className="img-block img-04"></div>
      <div className="info-block white-block">
        <p>
          Morbi eros lorem, imperdiet a dictum ac, consectetur vel lacus. Aenean
          gravida posuere elit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Duis lacinia et urna sit
          amet congue. Pellentesque vel leo a eros sollicitudin varius a ac
          lacus. Aliquam viverra laoreet aliquet.
        </p>
        <a className="view-btn black">View more products</a>
      </div>
    </div>
  )
}

Grid.propTypes = {}

export default Grid
