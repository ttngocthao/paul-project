import React from "react"

import { graphql, StaticQuery } from "gatsby"
import styles from "./bgImgSection.module.scss"

import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const BgImgSection = ({ imgRelativePath }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={` ${styles.bgImg}`}
      fluid={imgRelativePath}
      backgroundColor={`#040e18`}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  )
}

BgImgSection.propTypes = {
  imgRelativePath: PropTypes.string,
}

export default BgImgSection
