import React from "react"
import { navigate } from "gatsby"
import { setUser } from "../../services/authentication"
import {
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material"
import ContentGrid from "../../components/layout/content-grid"
import { portalRoot } from "../../config"
import Layout from "../../components/layout"
import axios from "axios"
import Grid from "@mui/material/Unstable_Grid2"
import SignupForm from "../../components/forms/signup"

// TODO - refactor to a functinoal component.
const Signup = () => {
  return (
    <Layout heading="Start Your Membership" subHeading={"Gain access to the Paradise Junior app"}>
      <Box component="section">
        <Typography variant="h2" component="h2">
            Signup Form
        </Typography>
        <Typography variant="h5" component="div">
            Joining is free!  Once signed up, you will be able to register for tour events.
        </Typography>
        <br />
        <br />
        <SignupForm />
      </Box>
    </Layout>
  )
}

export default Signup
