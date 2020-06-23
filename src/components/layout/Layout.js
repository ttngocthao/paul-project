import React from "react"
import "../../styles/style.scss"
import PropTypes from "prop-types"
import Header from "../header/Header"
import styles from "./layout.module.scss"
import Footer from "../footer/Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {}

export default Layout
