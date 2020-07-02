import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeGrid/Grid"
import About from "../components/about/About"
import Products from "../components/products/Products"
import BgImgSection from "../components/bgImgSection/BgImgSection"

const indexPage = ({ pageContext }) => {
  const { itemData } = pageContext

  return (
    <Layout>
      <Grid itemData={itemData} />
      <About data={itemData.aboutDetail} />

      <Products data={itemData.products} />
    </Layout>
  )
}

indexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default indexPage
