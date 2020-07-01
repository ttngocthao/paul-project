import React from "react"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SocialMediaIcon from "../socialMediaIcon/SocialMediaIcon"
import styles from "./footer.module.scss"
//import PropTypes from "prop-types"

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.iconList}>
          <SocialMediaIcon iconName={faFacebookF} color="#BFA065" linkUrl="#" />
          <SocialMediaIcon iconName={faInstagram} color="#BFA065" linkUrl="#" />
        </div>
        <div className={styles.smallLine}>
          @Chaindlestick {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

//Footer.propTypes = {}

export default Footer
