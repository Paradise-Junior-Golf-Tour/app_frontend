exports.createPages = async ({ graphql, actions }) => {
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
              registration_open
              fee
              description {
                data {
                  description
                }
              }
              image {
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
                }
                url
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
  const EventTemplate = require.resolve("./src/templates/event.jsx")
  events.forEach((event, index) => {
    console.log("Creating event page:", event.node.Name)
    createPage({
      path: `/events/${event.node.slug}`,
      component: EventTemplate,
      context: {
        slug: event.node.slug,
        name: event.node.name,
        id: event.node.id,
        strapiId: event.node.strapi_id,
        registration: event.node.registration_open,
        fee: event.node?.fee,
        description: event.node?.description?.data?.description,
        // image: {
        //   small: event.node?.image.formats.small.url,
        //   medium: event.node?.image.formats.medium.url,
        //   large: event.node?.image.formats.small.url,
        // },
        image: event.node?.image?.url,
      },
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect } = actions
  const portalRoot = process.env.REACT_APP_PORTAL_ROOT
  console.log("*** app root config", portalRoot)

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/${portalRoot}/*`

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
  createRedirect({
    fromPath: `/-upcoming-tee-times`,
    toPath: `/events/tee-times`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
