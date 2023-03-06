import React, { useEffect, useState } from "react"
import { Typography, Box, Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../../styles"
import { Link } from "gatsby"
import { portalRoot } from "../../../../config"
import { getUserEvents } from "../../../../services/user"
import Layout from "../../../layout"

const UserEvents = () => {
  const [events, setEvents] = useState(undefined)
  
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
    <Layout heading={`Your Events`} img="https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
      <Typography
        variant="h3"
        component="h1"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h4" component="p">
            View and manage your events.
          </Typography>
        </Box>
      </Typography>
      <hr />
      <p>Users can view their events and register for new ones.</p>
      <ul>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/profile`}>
            Profile
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <Typography variant="h5" component="p">
            Registered Events
          </Typography>
      {events?.length > 0 ? events?.map((x) => {
        return <div>{x.name}</div>
      }) : <div>You currently are not registered for any events. <Link to="/events">Click here</Link> to browse Tour Events.</div>}
    </Layout>
  )
}

export default UserEvents
