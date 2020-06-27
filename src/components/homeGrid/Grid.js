import React from "react"
import PropTypes from "prop-types"
import styles from "./grid.module.scss"
import ImgCard from "../ImgCard/ImgCard"
import Button from "../button/Button"

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
    <div className={styles.grid}>
      <div className={`${styles.infoBlock} ${styles.goldBlock}`}>
        {shortIntro.heading && (
          <h2 className={styles.blockHeading}>{shortIntro.heading}</h2>
        )}
        {shortIntro.text &&
          shortIntro.text.length !== 0 &&
          shortIntro.text.map((item, index) => {
            return <p key={index}>{item.paragraph}</p>
          })}
        <Button label="read more about us" href="#about" color="white" />
      </div>
      <div
        className={`${styles.imgBlock} ${styles.img01}`}
        style={{ backgroundImage: `url(${image01.publicURL})` }}
      ></div>
      <div
        className={`${styles.imgBlock} ${styles.img02}`}
        style={{ backgroundImage: `url(${image02.publicURL})` }}
      ></div>
      <div className={styles.titleBlock}>
        <h1>{title}</h1>
      </div>
      <div className={styles.blackBlock}></div>
      <div
        className={`${styles.imgBlock} ${styles.img03}`}
        style={{ backgroundImage: `url(${image03.publicURL})` }}
      ></div>
      <div
        className={`${styles.imgBlock} ${styles.img04}`}
        style={{ backgroundImage: `url(${image04.publicURL})` }}
      ></div>
      <div className={`${styles.infoBlock} ${styles.whiteBlock}`}>
        {productsIntro.heading && (
          <h2 className={styles.blockHeading}>{productsIntro.heading}</h2>
        )}
        {productsIntro.text &&
          productsIntro.text.length !== 0 &&
          productsIntro.text.map((item, index) => {
            return <p key={index}>{item.paragraph}</p>
          })}
        <Button href="#products" color="black" label="View our products" />
      </div>
    </div>
  )
}

Grid.propTypes = {}

export default Grid
