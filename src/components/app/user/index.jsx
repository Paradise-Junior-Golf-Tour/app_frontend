import React from "react"
import { Typography } from "@mui/material"

// Custom messaging for user and time of day.
const UserIndex = () => {
  return (
    <>
      <Typography variant="h3" component="h1">
        Welcome!
      </Typography>
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
    </>
  )
}

export default UserIndex
