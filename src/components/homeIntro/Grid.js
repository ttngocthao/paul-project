import React from "react"
import PropTypes from "prop-types"
import styles from "./grid.module.scss"
import ImgCard from "../ImgCard/ImgCard"

const Grid = props => {
  return (
    <div>
      <div className={`${styles.whiteBlock}`}>
        <div>
          <h2>Ho</h2>
          <p>
            Quisque non est velit. Phasellus ac enim facilisis, pulvinar turpis
            sit amet, faucibus erat. Aliquam ac ex consectetur, venenatis mi et,
            dignissim tortor. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Proin faucibus bibendum
            felis ac ullamcorper. Quisque non pulvinar enim, blandit laoreet
            dolor.
          </p>
          <p>Read more about us</p>
        </div>
        <div>
          <ImgCard
            src="https://images01.nicepage.io/93/ca/93ca41f399f3196923c769da96fc2aec.jpeg"
            alt=""
          />
        </div>
        <div>
          <ImgCard
            src="https://images01.nicepage.io/d0/75/d07586f450baf06b5db84a6382f91981.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className={`${styles.darkBlock}`}>
        <h1>CHAINDLE STICKS</h1>
        <div>
          <ImgCard
            src="https://images01.nicepage.io/74/42/7442a5ae603d27d1cf50ce8be906c2bd.jpeg"
            alt=""
          />
        </div>
        <div>
          <ImgCard
            src="https://images01.nicepage.io/80/f4/80f453473d2af41f179584713b791fd7.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

Grid.propTypes = {}

export default Grid
