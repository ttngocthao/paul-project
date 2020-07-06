import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          defaultKeywords,
          siteUrl,
          defaultImage,
          facebookUsername,
          instagramUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,

        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {facebookUsername && (
              <meta name="facebook:creator" content={facebookUsername} />
            )}
            {instagramUsername && (
              <meta name="instagram:creator" content={instagramUsername} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: "Chaindlesticks - Chain candle holder",
  description:
    "fabricated from steel chain. Each link is securely welded to the next to fashion different styles of candlesticks. Some support two candles and can be made as a pair. They have a Gothic appearance and are finished in durable, black hammed paint.",
  keywords:
    "steel chain, candle holder, Heathrow Terminal, The United King dom",
  image: "/images/favicon.icon",
  pathname: null,
  article: false,
  facebookUsername: "Paul-Chaindlesticks-113619010411661",
  instagramUsername: "paul.denman.526",
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultKeyWords: keywords
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        instagramUsername
        facebookUsername
      }
    }
  }
`
