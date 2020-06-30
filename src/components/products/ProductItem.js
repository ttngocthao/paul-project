import React, { useState } from "react"
import PropTypes from "prop-types"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./products.module.scss"
import ImgSlide from "../ImgSlide/ImgSlide"

const ProductItem = props => {
  const [showDescription, setShowDescription] = useState(true)
  const thumbnails = [
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/rustic-chains-dillon-thompson.jpg",
    "https://www.lens2print.co.uk/cms/upload_area/images/149_processed/crop/zob7f5mtfhbg09_45_21.jpg",
    "https://live.staticflickr.com/2863/10961430453_528c6b2267_c.jpg",
  ]
  return (
    <li className={styles.itemWrap}>
      {/* <ImgCard
        src="https://live.staticflickr.com/2863/10961430453_528c6b2267_c.jpg"
        alt="item"
        className={styles.photo}
      /> */}
      <ImgSlide thumbnails={thumbnails} />
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
          <p>
            Description: Lorem sint nisi et Lorem nulla ea magna elit commodo.
            Anim tempor culpa officia ea aute occaecat eiusmod culpa tempor et
            qui deserunt aliqua anim. Eu incididunt non ut sunt ea nostrud
            nostrud. Voluptate incididunt do culpa elit deserunt ut veniam ipsum
            aute quis ullamco ea est.
          </p>
        </div>
      ) : (
        <div className={styles.tabContent}>
          <p>
            Details: Minim enim mollit voluptate fugiat adipisicing elit
            incididunt. Anim quis ea minim id ex consectetur. Nostrud tempor sit
            aliquip enim laborum est. Dolor ea do Lorem aliquip in mollit
            exercitation proident.
          </p>
        </div>
      )}
    </li>
  )
}

ProductItem.propTypes = {}

export default ProductItem
