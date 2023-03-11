import React, { useEffect, useState } from "react"
import { Typography, Box, Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../../styles"
import { Link } from "gatsby"
import { portalRoot } from "../../../../config"
import { getUserEvents } from "../../../../services/user"
import Layout from "../../../layout"

const UserEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getUserEvents()
      .then((res) => {
        console.log("[User Events]", res)
        setEvents(res)
      })
      .catch((err) => {
        console.log("[User Events]", err)
      })
  }, [])

  return (
    <Layout
      heading={`My Events`}
      subHeading="View registered events, tee times, and results"
      img="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          Registered Events
        </Typography>
        <Typography variant="h5" component="div">
          Events I have registered for and participated in.
        </Typography>

        <br />
        {events ? (
          events?.length > 0 ? (
            events?.map((x) => {
              return <div>{x.name}</div>
            })
          ) : (
            <div>
              You currently are not registered for any events.{" "}
              <Link to="/events">Click here</Link> to browse Tour Events.
            </div>
          )
        ) : null}
      </Box>
    </Layout>
  )
}

export default UserEvents
