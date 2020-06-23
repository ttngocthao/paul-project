import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeIntro/Grid"
const indexPage = props => {
  return (
    <Layout>
      <Grid />
    </Layout>
  )
}

indexPage.propTypes = {}

export default indexPage
