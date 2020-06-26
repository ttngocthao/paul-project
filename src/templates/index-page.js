import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeGrid/Grid"
const indexPage = ({ pageContext }) => {
  const { itemData } = pageContext
  console.log("itemData", itemData)
  return (
    <Layout>
      {/* <Grid /> */}
      <h1>This is home page</h1>
    </Layout>
  )
}

indexPage.propTypes = {}

export default indexPage
