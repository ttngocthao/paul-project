import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styles from "./modal.module.scss"
const Modal = ({ children, closeModal }) => {
  return (
    <div className={styles.overlay}>
      <FontAwesomeIcon
        icon={faTimes}
        color={"#333"}
        className={styles.closeBtn}
        onClick={closeModal}
      />
      <div className={styles.modalContainer}>{children}</div>
    </div>
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default Modal
