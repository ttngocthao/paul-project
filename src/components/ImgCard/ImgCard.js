import React from "react"
import styles from "./imgCard.module.scss"
import PropTypes from "prop-types"

const ImgCard = ({ src, alt, className, width, height, caption }) => {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt ? alt : "demo photo"}
        className={styles.imgFullWidth}
        width={width}
        height={height}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

ImgCard.propTypes = {}

export default ImgCard
