import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeGrid/Grid"
import About from "../components/about/About"
import Products from "../components/products/Products"
import ImgSlide from "../components/ImgSlide/ImgSlide"
const indexPage = ({ pageContext }) => {
  const { itemData } = pageContext
  console.log("itemData", itemData)
  return (
    <Layout>
      <Grid itemData={itemData} />
      <About data={itemData.aboutDetail} />
      {/* <ImgSlide /> */}
      <Products />
    </Layout>
  )
}

indexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default indexPage
