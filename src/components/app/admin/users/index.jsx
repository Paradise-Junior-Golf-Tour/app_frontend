import React from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../../styles"
import { portalRoot } from "../../../../config"
import Layout from "../../../layout"

const AdminUsers = () => (
  <Layout heading="Admin Users">
    <Typography variant="h5" component="h2">
      Admins can manage users, register users for events, etc.
    </Typography>
    <hr />
    <p>Create, update, delete all events, users, and tee times.</p>
    <ul>
      <li style={navListItemStyle}>
        <Link activeStyle={linkActive} to={`/${portalRoot}`}>
          Admin Index
        </Link>
      </li>
      <li style={navListItemStyle}>
        <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
          Admin Events
        </Link>
      </li>
      <li style={navListItemStyle}>
        <Link activeStyle={linkActive} to={`/${portalRoot}/resources`}>
          Admin Resources
        </Link>
      </li>
    </ul>
  </Layout>
)

export default AdminUsers
