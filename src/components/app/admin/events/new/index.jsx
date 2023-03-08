import React from "react"
import { navigate } from "gatsby"
import { eventsNew } from "../../../../../services/event"
import ContentGrid from "../../../../layout/content-grid"
import { portalRoot } from "../../../../../config"
import { LoadingButton } from "@mui/lab"
import Layout from "../../../../layout"
import {
  Typography,
  TextField,
  Snackbar,
  Alert,
  AlertTitle,
  Box,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import axios from "axios"
import Button from "@mui/material/Button"
import { uploadFileSingle } from "../../../../../services/upload"
import EventDetailsForm from "../../../../forms/signup/event-details"

const AdminEventsNew = () => {
  return (
    <Layout
      heading="New Event"
      subHeading={"Create and add an event to the tour"}
    >
      <Box component="section">
        <Typography component="h2" variant="h2">
          Get started
        </Typography>
        <Typography component="h3" variant="h5">
          You will still be able to edit this later.
        </Typography>
        <br />
        <br />
        <EventDetailsForm />
      </Box>
    </Layout>
  )
}

export default AdminEventsNew
