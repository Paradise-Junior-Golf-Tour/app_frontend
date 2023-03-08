import React from "react"
import { Link } from "gatsby"
import { Typography, Box } from "@mui/material"
import { Avatar } from "@mui/material"
import { navListItemStyle, linkActive } from "../../../styles"
import { portalRoot } from "../../../config"
import Layout from "../../layout"

const UserProfile = () => (
  <Layout heading="My Profile" subHeading="View and manage your account">
    <Box component="section">
      <Typography variant="h2" component="h2">
        General Information
      </Typography>
    </Box>
    <Box component="section">
      <Typography variant="h2" component="h2">
        Address
      </Typography>
    </Box>
    <Box component="section">
      <Typography variant="h2" component="h2">
        Contact Information
      </Typography>
    </Box>

    <Box component="section">
      <Typography variant="h2" component="h2">
        Transaction History
      </Typography>
    </Box>
  </Layout>
)

export default UserProfile
