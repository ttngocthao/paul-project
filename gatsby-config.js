/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chaindlesticks - Chain candle holder ",
    titleTemplate: "",
    description:
      "chain candle holders are fabricated from steel chain. Each link is securely welded to the next to fashion different styles of candlesticks. Some support two candles and can be made as a pair. They have a Gothic appearance and are finished in durable, black hammed paint.",
    keywords:
      "steel chain, candle holder,welding, welder, Heathrow Terminal, The United King dom",
    url: "https://www.chaindlestick.com", // No trailing slash allowed!
    image: "/images/favicon.icon", // Path to your image you placed in the 'static' folder

    facebookUsername: "Paul-Chaindlesticks-113619010411661",
    instagramUsername: "paul.denman.526",
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: { path: `./src/pages` },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171796817-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-remark-source-name` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: "blogData",
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pagesData",
      },
    },
    { resolve: `gatsby-remark-source-name` },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins"],
        },
        //use local font - uncomment below
        // custom: {
        //   families: ["Lato-Reg,Lato-Light,Lato-Black,Black"],
        //   urls: [`/fonts/fonts.css`], //fonts folder should be placed in static folder
        // },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    //not sure if below needed
    // {
    //   resolve: `gatsby-plugin-netlify-identity`,
    //   options: {
    //     url: `https://nostalgic-curran-576267.netlify.app`, // required!
    //   },
    // },
  ],
}
