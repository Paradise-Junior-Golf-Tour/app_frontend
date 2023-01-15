import React, { useEffect, useState } from "react"
import { Typography, Box, Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../styles"
import { Link } from "gatsby"
import { portalRoot } from "../../../config"
import { getUserEvents } from "../../../services/user"

const UserEvents = () => {
  console.log('echo')
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
    <>
      <Typography
        variant="h3"
        component="h1"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <span>Your Events</span>
          <Typography variant="body1" component="p">
            View and manage your events here.
          </Typography>
        </Box>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: "4rem", height: "4rem" }}
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        />
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
      {events?.map((x) => {
        return <div>{x.name}</div>
      })}
    </>
  )
}

export default UserEvents
