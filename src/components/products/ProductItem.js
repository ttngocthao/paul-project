import React, { useState } from "react"
import PropTypes from "prop-types"

import styles from "./products.module.scss"
import ImgSlide from "../ImgSlide/ImgSlide"

const ProductItem = ({ itemData }) => {
  console.log(itemData)
  const thumbnails = itemData && itemData.productImages
  const {
    productCode,
    productName,
    productDescription,
    productMoreDetail,
    productPrice,
  } = itemData
  const [showDescription, setShowDescription] = useState(true)

  return (
    <li className={styles.itemWrap}>
      <ImgSlide thumbnails={thumbnails} productPrice={productPrice} />
      <ul className={styles.tabList}>
        <li
          className={`${styles.tabItem} ${showDescription && styles.activeTab}`}
          onClick={() => setShowDescription(true)}
        >
          Description
        </li>
        <li
          className={`${styles.tabItem} ${
            !showDescription && styles.activeTab
          }`}
          onClick={() => setShowDescription(false)}
        >
          Details
        </li>
      </ul>
      {showDescription ? (
        <div className={styles.tabContent}>
          {productDescription &&
            productDescription.length !== 0 &&
            productDescription.map((p, i) => {
              return <p key={i}>{p.paragraph}</p>
            })}
        </div>
      ) : (
        <div className={styles.tabContent}>
          {productMoreDetail &&
            productMoreDetail.length !== 0 &&
            productMoreDetail.map((p, i) => {
              return <p key={i}>{p.paragraph}</p>
            })}
        </div>
      )}
    </li>
  )
}

ProductItem.propTypes = { itemData: PropTypes.object.isRequired }

export default ProductItem
