import React from "react"
import { Typography } from "@mui/material"
import Layout from "../../layout"

// Custom messaging for user and time of day.
const UserIndex = () => {
  return (
    <Layout heading="Member">
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
    </Layout>
  )
}

export default UserIndex
