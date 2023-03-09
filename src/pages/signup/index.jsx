import React from "react"
import { Typography, Box } from "@mui/material"
import Layout from "../../components/layout"
import SignupForm from "../../components/forms/user"

const Signup = () => {
  return (
    <Layout
      heading="Start Your Membership"
      subHeading={"Gain access to the Paradise Junior app"}
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          Signup Form
        </Typography>
        <Typography variant="h5" component="div">
          Joining is free! Once signed up, you will be able to register for tour
          events.
        </Typography>
        <br />
        <br />
        <SignupForm />
      </Box>
    </Layout>
  )
}

export default Signup
