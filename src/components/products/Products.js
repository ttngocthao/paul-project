import React, { Fragment } from "react"
import PropTypes from "prop-types"
import ProductItem from "./ProductItem"
import styles from "./products.module.scss"
import Button from "../button/Button"
const Products = ({ data }) => {
  const { productList, shortIntro } = data
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
              color="gold"
              className={styles.contactBtn}
            />
            <Button
              href="#facebook link"
              label="follow Paul"
              color="gold"
              className={styles.followBtn}
            />
          </div>
        </div>
        <div className={styles.mainSection}>
          <ul>
            {productList &&
              productList.length !== 0 &&
              productList.map((item, index) => {
                return <ProductItem key={index} itemData={item} />
              })}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

Products.propTypes = { data: PropTypes.object.isRequired }

export default Products
