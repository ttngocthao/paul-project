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
            <span>Logo</span>
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
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Products</li>
          <li className={styles.menuItem}>Contact</li>
          <li className={styles.menuItem}>Delievery</li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {}

export default Header
