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
            <a href="tel:+447547432860">Phone: +44 (0)7538282716</a>
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
            <a href="https://wa.me/447538282716?text=I'm%20interested%20in%20your%20candlesticks%20for%20sale">
              <span className="sr-only">What's app link</span>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
            </a>
          </li>
          <li className={styles.quickActionItem}>
            <a href="https://www.facebook.com/Paul-Chaindlesticks-113619010411661">
              <span className="sr-only">facebook link</span>
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className={styles.icon}
              />
              {/* App Id: 2906481236117520 */}
              {/*access token EAApTbeWgCBABAO7ZBbuEOMs9SRUGLSLvX8GHcGijNJJRkm7FcBvaleU2kEfGwBem10QuaDCBvypdnSRzouXGZCNPZBAI5AlahvbWqWu0JoTo8zb9dzareCkyOUla5OfQGmqDq3QmfxxmOdx3jIUyR5Wlktpm0DNHWC1P6Rk2ZCRv0MwZBnyudSrQPRSKnwx0ZD */}
            </a>
          </li>
          <li className={styles.quickActionItem}>
            <a href="https://www.facebook.com/Paul-Chaindlesticks-113619010411661">
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
