import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import ProductItem from "./ProductItem"
import styles from "./products.module.scss"
import Button from "../button/Button"
import Modal from "../modal/Modal"
const Products = ({ data }) => {
  const { productList, shortIntro, deliveryInfo } = data

  const [isDeliveryModalOpenned, setDeliveryModalOpenned] = useState(false)
  return (
    <Fragment>
      <div className={styles.spareWrap} id="products"></div>
      <div className={styles.wrap}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>PRODUCTS</h2>
          <div className={styles.shortIntro}>
            {shortIntro &&
              shortIntro.length !== 0 &&
              shortIntro.map((p, i) => {
                return <p key={i}>{p.paragraph}</p>
              })}
          </div>
          <div className={styles.btnList}>
            <Button
              href="#contact"
              label="Contact Paul"
              color="white"
              className={styles.contactBtn}
            />
            <Button
              href="#facebook link"
              label="Delivery/Shipping"
              color="white"
              className={styles.followBtn}
              onClick={() => setDeliveryModalOpenned(true)}
            />
          </div>
        </div>
        <div className={styles.mainSection}>
          <ul className={styles.productList}>
            {productList &&
              productList.length !== 0 &&
              productList.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ProductItem key={index} itemData={item} />
                    <ProductItem key={`${index}-extra`} itemData={item} />
                  </Fragment>
                )
              })}
          </ul>
        </div>
      </div>
      {isDeliveryModalOpenned && (
        <Modal closeModal={() => setDeliveryModalOpenned(false)}>
          <div className={styles.deliveryWrap}>
            {deliveryInfo &&
              deliveryInfo.length !== 0 &&
              deliveryInfo.map((p, i) => {
                return <p key={i}>{p.paragraph}</p>
              })}
          </div>
        </Modal>
      )}
    </Fragment>
  )
}

Products.propTypes = { data: PropTypes.object.isRequired }

export default Products
