const axios = require("axios")

console.log(`[gatsby-node.js] Starting ${process.env.NODE_ENV} environment.`)

exports.createPages = async ({ graphql, actions }) => {
  // Simple example of querying data sources to aggregate into graphQL node layer.
  // axios
  //   .get(`${process.env.GATSBY_APP_STRAPI_API_URL}/api/events`)
  //   .then((res) => console.log("AXIOS SUCCESS"))
  //   .catch((res) => console.log("AXIOS ERROR"))

  const { createPage } = actions
  const result = await graphql(
    `
      {
        events: allStrapiEvent {
          edges {
            node {
              name
              slug
              id
              strapi_id
              date
              fee
              registration_start_date
              registration_end_date
              description {
                data {
                  description
                }
              }
              image {
                url
                formats {
                  large {
                    url
                  }
                  medium {
                    url
                  }
                  small {
                    url
                  }
                  thumbnail {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  )



  if (result.errors) {
    throw result.errors
  }

  // Create event (blog) articles pages.
  const events = result.data.events.edges
  console.log('Events', events)

  const EventTemplate = require.resolve("./src/templates/event.jsx")
  events.forEach((event) => {
    console.log("Compiling event page:", event.name)
    createPage({
      path: `/events/${event.node.slug}`,
      component: EventTemplate,
      context: {
        slug: event.node.slug,
        name: event.node.name,
        date: event.node.date,
        id: event.node.id,
        strapiId: event.node.strapi_id,
        strapiId: event.node.strapi_id,
        imageUrl: event.node?.image?.url,
        registration_start_date: event.node?.registration_start_date,
        registration_end_date: event.node?.registration_end_date,
        fee: event.node?.fee,
        description: event.node?.description?.data?.description,
        image: {
          thumbnail: event.node?.image?.formats?.thumbnail?.url,
          small: event.node?.image?.formats?.small?.url,
          medium: event.node?.image?.formats?.medium?.url,
          large: event.node?.image?.formats?.large?.url,
        },
        imageUrl: event.node?.image?.url,
      },
    })
  })

  const EventGalleryTemplate = require.resolve(
    "./src/templates/event-gallery.jsx"
  )
  events.forEach((event, index) => {
    console.log("Compiling event image gallery page:", event.name)
    createPage({
      path: `/events/${event.node.slug}/gallery`,
      component: EventGalleryTemplate,
      context: {
        slug: event.node.slug,
        name: event.node.name,
        date: event.node.date,
        id: event.node.id,
        strapiId: event.node.strapi_id,
        strapiId: event.node.strapi_id,
        imageUrl: event.node?.image?.url,
        registration_start_date: event.node?.registration_start_date,
        registration_end_date: event.node?.registration_end_date,
        fee: event.node?.fee,
        description: event.node?.description?.data?.description,
        image: {
          thumbnail: event.node?.image?.formats?.thumbnail?.url,
          small: event.node?.image?.formats?.small?.url,
          medium: event.node?.image?.formats?.medium?.url,
          large: event.node?.image?.formats?.large?.url,
        },
        imageUrl: event.node?.image?.url,
      },
    })
  })

  const EventResultsTemplate = require.resolve(
    "./src/templates/event-results.jsx"
  )
  events.forEach((event, index) => {
    console.log("Compiling event image results:", event.name)
    createPage({
      path: `/events/${event.node.slug}/results`,
      component: EventResultsTemplate,
      context: {
        slug: event.node.slug,
        name: event.node.name,
        date: event.node.date,
        id: event.node.id,
        strapiId: event.node.strapi_id,
        strapiId: event.node.strapi_id,
        imageUrl: event.node?.image?.url,
        registration_start_date: event.node?.registration_start_date,
        registration_end_date: event.node?.registration_end_date,
        fee: event.node?.fee,
        description: event.node?.description?.data?.description,
        image: {
          thumbnail: event.node?.image?.formats?.thumbnail?.url,
          small: event.node?.image?.formats?.small?.url,
          medium: event.node?.image?.formats?.medium?.url,
          large: event.node?.image?.formats?.large?.url,
        },
        imageUrl: event.node?.image?.url,
      },
    })
  })
}

// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    // Update the page.
    createPage(page)
  }

  // Redirects
  // createRedirect({
  //   fromPath: `/app`,
  //   toPath: `/app/login`,
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // })

  // createRedirect({
  //   fromPath: `/app/`,
  //   toPath: `/app/login`,
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // })

  // Possibly need to redirect all old URLS - tbd.  Def need 301 server redirects.
  // createRedirect({
  //   fromPath: `/-upcoming-tee-times`,
  //   toPath: `/events/tee-times`,
  //   redirectInBrowser: true,
  //   isPermanent: true,
  // })
}

// Exclude node modules that utilize window during build.
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /gatsby-plugin-mui-emotion/,
            use: loaders.null(),
          },
          {
            test: /gatsby-plugin-material-ui/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
