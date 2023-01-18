import React from "react"
import { Link } from "gatsby"
import { Typography, Box } from "@mui/material"
import { Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../styles"
import { portalRoot } from "../../../config"
import Layout from "../../layout"

const UserProfile = () => (
  <Layout heading="Your Profile">
    <Typography
      variant="h3"
      component="h1"
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4" component="p">
          View and manage your profile.
        </Typography>
      </Box>
    </Typography>
    <hr />
    <Typography variant="subtitle1" component="p">
      Change Picture
    </Typography>
    <Typography variant="subtitle1" component="p">
      Change Password
    </Typography>
    <ul>
      <li style={navListItemStyle}>
        <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
          Events
        </Link>
      </li>
    </ul>
  </Layout>
)

export default UserProfile
