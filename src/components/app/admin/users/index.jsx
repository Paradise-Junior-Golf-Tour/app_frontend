import React from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../../styles"
import { portalRoot } from "../../../../config"

const AdminUsers = () => (
  <>
    <Typography variant="h3" component="h1">
      Admin Users
    </Typography>
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
  </>
)

export default AdminUsers
