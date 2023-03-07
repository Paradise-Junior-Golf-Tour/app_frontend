import React from "react"
import { Typography } from "@mui/material"
import Layout from "../../layout"
import { Router, Route } from "@reach/router"
import { getUser } from "../../../services/authentication"

// Custom messaging for user and time of day.
const UserIndex = () => {
  const user = getUser()
  console.log('User', user.data)

  return (
    <Layout heading={`${user?.data?.name_first} ${user?.data?.name_last}`}>
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
