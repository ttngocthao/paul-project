import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = props => {
  const [menuOpened, setMenuOpened] = useState(false)

  const menuClickHandle = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link to="/">
            <span style={{ color: "white" }}>Logo</span>
          </Link>
          <ul
            className={`${styles.menuBtn} ${menuOpened && styles.menuOpened}`}
            onClick={menuClickHandle}
            onKeyPress={() => {
              console.log("press key")
            }}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <ul
          className={`${styles.menuList} ${
            menuOpened ? styles.menuListShow : ""
          }`}
        >
          <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
            <a href="#about">About</a>
          </li>
          <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
            <a href="#products">Products</a>
          </li>
          <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.menuItem} onClick={() => setMenuOpened(false)}>
            <a href="#delievery">Delievery</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {}

export default Header
