/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Chip, Typography } from "@mui/material"
import { linkActive } from "../../styles"
import { getUser, isLoggedIn } from "../../services/authentication"
import { portalRoot } from "../../config"
import LinkEvent from "../../components/routing/link-event"
import EventGrid from "./components/event-grid"
import { eventsAll } from "../../services/event"

// TODO - replace static query with page query.

const EventsPage = (props) => {
  const data = useStaticQuery(graphql`
    query allEvents {
      events: allStrapiEvent {
        nodes {
          name
          slug
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

  useEffect(() => {
    console.log("[Events Page]", {
      data: data.events.nodes,
      props,
    })
  }, [])

  return (
    <Layout heading="Events">
      <EventGrid events={data.events.nodes} />
    </Layout>
  )
}

export default EventsPage

export const Head = () => <SEO title="Events | The Paradise Junior Golf Tour" />
