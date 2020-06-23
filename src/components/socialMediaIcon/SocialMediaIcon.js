import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./socialMediaIcon.module.scss"

function socialMediaIcon({ iconName, linkUrl, color }) {
  return (
    <a href={linkUrl} className={styles.socialIconLink}>
      <span className="sr-only">social media icon</span>
      <FontAwesomeIcon
        icon={iconName}
        color={color}
        className={styles.socialIcon}
      />
    </a>
  )
}

export default socialMediaIcon
