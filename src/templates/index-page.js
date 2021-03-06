import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/Layout"
import Grid from "../components/homeGrid/Grid"
import About from "../components/about/About"
import Products from "../components/products/Products"
import Contact from "../components/contact/Contact"
import SEO from "../components/seo/SEO"

const indexPage = ({ pageContext }) => {
  const { itemData } = pageContext

  return (
    <Layout>
      <SEO />
      <Grid itemData={itemData} />
      <About data={itemData.aboutDetail} />

      <Products data={itemData.products} />
      <Contact />
    </Layout>
  )
}

indexPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default indexPage
