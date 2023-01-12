import React from "react"
import { Link } from "gatsby"
import { Typography, Box } from "@mui/material"
import { Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../styles"
import { portalRoot } from "../../../config"

const UserProfile = () => (
  <>
    <Typography
      variant="h3"
      component="h1"
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <span>Your Profile</span>
        <Typography variant="body1" component="p">
          View and manage your profile.
        </Typography>
      </Box>
      <Avatar
        alt="Remy Sharp"
        sx={{ width: "4rem", height: "4rem" }}
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />
    </Typography>
    <hr />
    <p>Users can view and modify their profiles.</p>
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
  </>
)

export default UserProfile
