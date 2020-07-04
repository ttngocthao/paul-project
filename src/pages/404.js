import React from "react"
import PropTypes from "prop-types"
import ImgCard from "../components/ImgCard/ImgCard"
import { Link } from "gatsby"
const NotFoundPage = props => {
  return (
    <div>
      <ImgCard
        src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
        alt="404 gif"
      />
      <Link to="/">Back to Home page</Link>
    </div>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage
