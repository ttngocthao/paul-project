import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeGrid/Grid"
import About from "../components/about/About"
const indexPage = ({ pageContext }) => {
  const { itemData } = pageContext
  console.log("itemData", itemData)
  return (
    <Layout>
      <Grid itemData={itemData} />
      <About />
    </Layout>
  )
}

indexPage.propTypes = {}

export default indexPage
