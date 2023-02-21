import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import { eventsOneById, eventDetails } from "../../../../../services/event"
import { portalRoot } from "../../../../../config"
import moment from "moment"
import Layout from "../../../../layout"
import VerticalTabs from "./tabs"
import { imageUrl } from '../../../../../util'

const AdminEvent = (props) => {
  const [data, setData] = useState(null)

  const event = {
    id: props.id,
    // id: props.location?.state?.id || props.location?.state?.event?.id, // why both?
    slug: props.location.pathname.substr(
      props.location.pathname.lastIndexOf("/")
    ),
  }

  // console.log("event", event)

  useEffect(() => {
    console.log("[Event Manage]", event.id)

    if (event.id) {
      eventDetails({ id: event.id })
        .then((event) => {
          console.log("[Event Manage] res", event)
          setData(event)
        })
        .catch((error) => {
          console.log("[Event Manage] Error", error)
        })
      return
    }
  }, [event.id, event.slug])

  // useEffect(() => {
  //   console.log("[Admin Events Manage Page] Props/Data", {
  //     id: event.id,
  //     slug: event.slug,
  //     props,
  //     data,
  //   })
  // }, [data, event.id, event.slug, props])

  // Render no event found.

  if (!data) {
    return (
      <Layout heading="Event Not Found">
        <Typography variant="h5" component="h2">
          The requested event does not exist.
        </Typography>
        <p>
          If you think this page may have been reached in error please contact
          your developer.
        </p>
        <Link to={`/${portalRoot}/events/new`}> Create a new event.</Link>{" "}
        <br />
        <Link to={`/${portalRoot}/events`}> View all events.</Link>
      </Layout>
    )
  }

  // // Render event found.
  return (
    <Layout heading={data?.name} images={[imageUrl(data?.image?.formats?.large?.url)]}>
      <VerticalTabs data={data} />
    </Layout>
  )
}

export default AdminEvent
