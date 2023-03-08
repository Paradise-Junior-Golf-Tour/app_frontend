import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Typography, Box } from "@mui/material"
import { eventDetails } from "../../../../../services/event"
import { portalRoot } from "../../../../../config"
import moment from "moment"
import Layout from "../../../../layout"
import VerticalTabs from "./tabs"
import { imageUrl, dateFormat } from "../../../../../util"

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

  if (!data) {
    return (
      <Layout
        heading="Event Not Found"
        subHeading={"The requested event does not exist"}
      >
        <Box>
          <p>
            If you think this page may have been reached in error please contact
            your developer.
          </p>
          <Link to={`/${portalRoot}/events/new`}> Create a new event.</Link>{" "}
          <br />
          <Link to={`/${portalRoot}/events`}> View all events.</Link>
        </Box>
      </Layout>
    )
  }

  // // Render event found.
  return (
    <Layout
      heading={data?.name}
      subHeading={`Created on ${dateFormat(data?.createdAt)}`}
      images={[imageUrl(data?.image?.formats?.large?.url)]}
    >
      <Box component="section">
        <Typography component="h2" variant="h2">
          View and update event details.
        </Typography>
        <hr />
        <br />
        <VerticalTabs data={data} />
      </Box>
    </Layout>
  )
}

export default AdminEvent
