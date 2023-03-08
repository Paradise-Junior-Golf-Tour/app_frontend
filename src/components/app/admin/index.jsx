import React from "react"
import { Link } from "gatsby"
import { Typography, Box } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../styles"
import { portalRoot } from "../../../config"
import Layout from "../../layout"

const AdminIndex = () => (
  <Layout heading="Admin" subHeading="Manage events, tee times, results">
    <Box component="section">
      <Typography variant="h2" component="h2">
        Admin Links
      </Typography>
      <Typography variant="h5" component="div">
        Here are some helpful resources
      </Typography>
     <br />
      <ul>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
            Manage Events
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events/new`}>
            Create a New Event
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
            Manage Users
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
            Manage Results
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/resources`}>
            Developer Resources
          </Link>
        </li>
      </ul>
    </Box>
  </Layout>
)

export default AdminIndex
