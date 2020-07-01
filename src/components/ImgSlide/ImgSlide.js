import React, { useState, useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import styles from "./imgSlide.module.scss"
import TouchIcon from "../../images/touchIcon_small.png"

import ImgCard from "../ImgCard/ImgCard"
import Modal from "../modal/Modal"
const ImgSlide = ({ thumbnails, productPrice }) => {
  //thumbnails array and running time will be passed from parent component

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setInterval(() => {
      if (currentSlide >= thumbnails.length - 1) {
        setCurrentSlide(0)
      } else if (currentSlide < 0) {
        setCurrentSlide(thumbnails.length - 1)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
      // console.log("change image", currentSlide)
    }, 60000)
  })
  return (
    <Fragment>
      <div className={styles.slideWrap}>
        <span className={`${styles.priceTag}`}>£ {productPrice}</span>
        <div className={styles.imgList}>
          {thumbnails.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.wrap} ${
                  currentSlide === index ? styles.activePhoto : ""
                }`}
                style={{
                  backgroundImage: `url(${item.productImage.publicURL})`,
                }}
              ></div>
            )
          })}
        </div>

        <span
          className={styles.touchIcon}
          style={{ backgroundImage: `url(${TouchIcon})` }}
          onClick={() => setModalOpen(true)}
        ></span>
      </div>

      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)}>
          <div className={styles.libraryModal}>
            <div className={styles.inView}></div>
            <div className={styles.viewList}>
              {thumbnails &&
                thumbnails.map((item, index) => {
                  return (
                    <ImgCard
                      key={index}
                      src={item.productImage.publicURL}
                      alt={item.productImageCap}
                      className={styles.detailImg}
                    />
                  )
                })}
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}
Modal.propTypes = {
  thumbnails: PropTypes.array.isRequired,
}
export default ImgSlide
