require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(`[gatsby-config.js] Starting ${process.env.NODE_ENV} denvironment.`)
console.log("[gatsby-config.js] Registering metadata and plugins.")

module.exports = {
  flags: {
    DEV_SSR: true,
  },

  siteMetadata: {
    title: "The Paradise Junior Golf Tour",
    description: "This is my awesome golf site I made from scratch!",
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "page2",
        link: "/page-2",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          process.env.NODE_ENV === "production"
            ? "https://paradise-junior-golf-tour.herokuapp.com"
            : `http://127.0.0.1:1337`,
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
          {
            singularName: "fundraiser",
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
    `gatsby-plugin-gatsby-cloud`,
  ],
}
