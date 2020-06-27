import React from "react"
import PropTypes from "prop-types"
import styles from "./grid.module.scss"
import ImgCard from "../ImgCard/ImgCard"

const Grid = ({ itemData }) => {
  const {
    image01,
    image02,
    image03,
    image04,
    title,
    shortIntro,
    productsIntro,
  } = itemData
  return (
    <div className="grid">
      <div className="info-block gold-block">
        {shortIntro.heading && (
          <h2 className="block-heading">{shortIntro.heading}</h2>
        )}
        {shortIntro.text &&
          shortIntro.text.length !== 0 &&
          shortIntro.text.map((p, index) => {
            return <p key={index}>{p}</p>
          })}

        <a className="view-btn white">Read more about us</a>
      </div>
      <div
        className="img-block img-01"
        style={{ backgroundImage: `url(${image01})` }}
      ></div>
      <div
        className="img-block img-02"
        style={{ backgroundImage: `url(${image02})` }}
      ></div>
      <div className="title-block">
        <h1>{title}</h1>
      </div>
      <div className="black-block"></div>
      <div
        className="img-block img-03"
        style={{ backgroundImage: `url(${image03})` }}
      ></div>
      <div
        className="img-block img-04"
        style={{ backgroundImage: `url(${image04})` }}
      ></div>
      <div className="info-block white-block">
        {productsIntro.heading && (
          <h2 className="block-heading">{productsIntro.heading}</h2>
        )}
        {productsIntro.text &&
          productsIntro.text.length !== 0 &&
          productsIntro.text.map((p, index) => {
            return <p key={index}>{p}</p>
          })}

        <a className="view-btn black">View more products</a>
      </div>
    </div>
  )
}

Grid.propTypes = {}

export default Grid
