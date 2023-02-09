import React, { useEffect } from "react"
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
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import axios from "axios"
import Button from "@mui/material/Button"

class AdminEventsNew extends React.Component {
  state = {
    eventName: ``,
    description: ``,
    loading: false,
    toastOpen: false,
    eventImage: null,
  }

  handleUpdate = (event) => {
    // const formData = new FormData();
    // formData.append('File', event.target.files[0]);
    // console.log(formData)

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  closeToast = () => {
    this.setState({
      toastOpen: false,
    })
  }

  componentDidUpdate() {
    console.log("[Event]", this.state)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
    })

    // const formData = new FormData();

    // formData.append('File', selectedFile);
    // console.log(formData)

    eventsNew({
      eventName: this.state.eventName,
      eventDescription: this.state.description,
    })
      .then((res) => {
        console.log("[Event New] created", res)
        const event = res

        setTimeout((event) => {
          console.log("[Event New] start TO", event)
          axios
            .post(`${process.env.REACT_APP_STRAPI_API_URL}/__refresh`) // Refresh data in Gatsby static queries
            .then((res) => {
              console.log("[Event New] schema refreshed")
            })
            .catch((err) => {
              console.log("[Event New] schema failed to refresh", err)
              this.setState({
                toastOpen: true,
              })
            })
        }, 1000)
        navigate(`/${portalRoot}/events/${event.data.id}`, { state: res })
      })
      .catch((err) => {
        console.log("[Event New] error", err)
      })
  }

  render() {
    return (
      <Layout heading="New Event">
        <Typography component="h2" variant="h4">
          Administrator's form to create an event.
        </Typography>
        <hr />
        <br />
        <Typography component="p" variant="body1">
          Add a new Event entry and generate the corresponding Tee Times and
          Results records.
        </Typography>

        <br />
        <form
          method="post"
          name="login"
          onSubmit={(event) => {
            this.handleSubmit(event)
          }}
        >
          <Typography component="h3" variant="h5">
            Event Name, Date, and Description
          </Typography>
          <br />
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                sx={{ width: "100%" }}
                id="event_name"
                label="Name"
                type="text"
                name="event_name"
                placeholder="Event Name"
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                sx={{ width: "100%" }}
                id="event_date"
                label="Event Date"
                type="date"
                name="event_date"
                // defaultValue="2017-05-24"
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                required
                id="event_description"
                label="Description"
                type="textarea"
                multiline
                name="event_name"
                placeholder="Event Name"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </ContentGrid>

          <br />
          <br />
          <Typography component="h3" variant="h5">
            Event Registration
          </Typography>
          <br />
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                autoComplete="off"
                id="event_registration_fee"
                name="event_registration_fee"
                label="Registration Fee"
                variant="outlined"
                type="number"
                placeholder="0.00"
                onChange={this.handleUpdate}
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                autoComplete="off"
                id="max_users"
                name="max_users"
                label="Maximum Participants"
                variant="outlined"
                type="number"
                placeholder="0"
                onChange={this.handleUpdate}
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                id="registration_start_date"
                label="Registration Start Date"
                type="date"
                name="registration_start_date"
                // defaultValue="2017-05-24"
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                id="registration_end_date"
                label="Registration End Date"
                type="date"
                name="registration_end_date"
                // defaultValue="2017-05-24"
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
          </ContentGrid>
          <br />
          <br />
          <Button
            disabled
            variant="contained"
            color="secondary"
            component="label"
            name="event_image"
            id="event_image"
            onChange={this.handleUpdate}
          >
            Upload Image
            <label htmlFor="eventImage">
              <input type="file" name="eventImage" hidden />
            </label>
          </Button>
          {this.state.eventImage ? (
            <Button
              variant="outlined"
              color="secondary"
              component="label"
              name="event_image"
              id="event_image"
              onChange={this.handleUpdate}
            >
              Remove Image
              <label htmlFor="eventImage">
                <input type="file" name="eventImage" hidden />
              </label>
            </Button>
          ) : null}
          {this.state.eventImage?.name ? (
            <p>
              Image currently selected for upload:{" "}
              <strong>{this.state.eventImage.name}</strong>.{" "}
            </p>
          ) : (
            ""
          )}
          <br />
          <br />
          <LoadingButton
            variant="contained"
            loading={this.state.loading}
            type="submit"
          >
            Create New Event
          </LoadingButton>
        </form>
        <br />
        <p className="dev">Need to add all fields from CMS.</p>
        <p className="dev">
          This may be the only data that requires a new build of the site.
          Consider triggering it in the pipeline, via a plugin, or calling the
          refresh (yarn schema) endpoint.
        </p>

        <Snackbar
          open={this.state.toastOpen}
          autoHideDuration={6000}
          onClose={this.closeToast}
          color="error"
        >
          <Alert
            onClose={this.closeToast}
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
          >
            <AlertTitle>Error!</AlertTitle>
            An error occurred while trying to create this event.
          </Alert>
        </Snackbar>
      </Layout>
    )
  }
}

export default AdminEventsNew
