import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookMessenger,
  faFacebookF,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import styles from "./contact.module.scss"
import Button from "../button/Button"
const Contact = props => {
  return (
    <Fragment>
      <div className={styles.spareWrap} id="contact"></div>
      <div className={styles.wrap}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>Contact Paul</h2>
        </div>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            {/* <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} /> */}
            <a href="tell:+447547432860">Phone: +44 (0)7538282716</a>
          </li>
          <li className={styles.contactItem}>
            {/* <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> */}
            <a href="mailto:pauldenman1@hotmail.com">
              Email: pauldenman1@hotmail.com
            </a>
          </li>
        </ul>
        <ul className={styles.quickActionList}>
          {/* https://wa.me/447538282716?text=I'm%20interested%20in%20your%20candlesticks%20for%20sale */}
          <li className={styles.quickActionItem}>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
            </a>
          </li>
          <li className={styles.quickActionItem}>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className={styles.icon}
              />
            </a>
          </li>
          <li className={styles.quickActionItem}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </a>
          </li>
          <li className={styles.quickActionItem}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

Contact.propTypes = {}

export default Contact
