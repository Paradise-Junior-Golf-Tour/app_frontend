require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(`[gatsby-config.js] Starting ${process.env.NODE_ENV} denvironment.`)
console.log('[gatsby-config.js] Registering metadata and plugins.')

module.exports = {
  flags: {
    DEV_SSR: true
  },
  /* Your site config here */
  siteMetadata: {
    title: "The Paradise Junior Golf Tour",
    description: "This is my awesome golf site I made from scratch!",
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-mui-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     mergeCachingHeaders: true, // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //     generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: `http://localhost:1337`,
        apiURL: process.env.NODE_ENV === 'production'
        ? "https://paradise-junior-golf-tour.herokuapp.com"
        : `http://localhost:1337`,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "participant",
          },
          {
            singularName: "tee-time",
          },
          {
            singularName: "transaction",
          },
          {
            singularName: "event",
          },
          {
            singularName: "user",
          },
          {
            singularName: "sponsor",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
