/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@mui/system"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import EventCardGrid from "../../components/event-card-grid"

// TODO - replace static query with page query.

const EventsPage = (props) => {
  const data = useStaticQuery(graphql`
    query allEvents {
      events: allStrapiEvent {
        nodes {
          name
          slug
          date
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
              thumbnail {
                url
              }
            }
          }
          id
          registration_open
          fee
          date_end
          date_start
          strapi_id
        }
      }
    }
  `)

  return (
    <Layout
      heading="Events"
      subHeading="Check out all of our upcoming and past events."
    >
      <Box component="section">
        <EventCardGrid events={data.events.nodes} />
      </Box>
    </Layout>
  )
}

export default EventsPage

export const Head = () => <SEO title="Events | The Paradise Junior Golf Tour" />
