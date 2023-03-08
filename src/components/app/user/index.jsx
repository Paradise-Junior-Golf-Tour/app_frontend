import React from "react"
import { Typography, Box } from "@mui/material"
import Layout from "../../layout"
import { Router, Route } from "@reach/router"
import { getUser } from "../../../services/authentication"

// Custom messaging for user and time of day.
const UserIndex = () => {
  const user = getUser()
  console.log("User", user.data)

  return (
    <Layout
      heading={`${user?.data?.name_first} ${user?.data?.name_last}`}
      subHeading={`Member since ${new Date(
        user?.data?.createdAt
      ).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`}
    >
      <Box component="section">
        <Typography variant="h5" component="h2">
          This is the User Index page.
        </Typography>
        <hr />
        <p>This is the entry point for the User app.</p>
        <Typography variant="subtitle1" component="p">
          Upcoming Tee Times
        </Typography>
        <Typography variant="subtitle1" component="p">
          Your Events
        </Typography>
        <Typography variant="subtitle1" component="p">
          Your Results
        </Typography>
      </Box>
    </Layout>
  )
}

export default UserIndex
