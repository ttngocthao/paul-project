import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"
const Button = ({ label, href, color, display, className, onClick }) => {
  return (
    <a
      href={href}
      className={`${className} ${styles.btn} ${styles[color]}`}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

Button.propTypes = {}

export default Button
