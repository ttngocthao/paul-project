const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              templateKey
              title
              image01 {
                publicURL
              }
              image02 {
                publicURL
              }
              image03 {
                publicURL
              }
              image04 {
                publicURL
              }
              products {
                shortIntro {
                  paragraph
                }
                productList {
                  productCode
                  productName
                  productPrice
                  productDescription {
                    paragraph
                  }
                  productImages {
                    productImage {
                      publicURL
                    }
                    productImageCap
                  }
                  productMoreDetail {
                    paragraph
                  }
                }
              }
              productsIntro {
                heading
                text {
                  paragraph
                }
              }
              shortIntro {
                heading
                text {
                  paragraph
                }
              }
              aboutDetail {
                role
                avatar {
                  publicURL
                }
                story {
                  block {
                    paragraph
                  }
                  image {
                    publicURL
                  }
                }
              }
            }
            fields {
              sourceName
              slug
            }
          }
        }
      }
    }
  `)
  //console.log("here", JSON.stringify(result, null, 4))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let nodePath

    if (node.frontmatter.templateKey === "blog-post") {
      nodePath = "/blog" + node.fields.slug
    } else {
      nodePath = node.fields.slug
    }
    createPage({
      path: nodePath,
      component: path.resolve(
        `./src/templates/${node.frontmatter.templateKey}.js`
      ),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        itemData: node.frontmatter,
      },
    })
  })
}
