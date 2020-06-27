import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"
const Button = ({ label, href, color, display, className }) => {
  return (
    <a href={href} className={`${className} ${styles.btn} ${styles[color]}`}>
      {label}
    </a>
  )
}

Button.propTypes = {}

export default Button
