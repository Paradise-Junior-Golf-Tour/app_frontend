import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { eventsNew } from "../../../../../services/event"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers"
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

        // setTimeout((event) => {
        //   console.log("[Event New] start TO", event)
        //   axios
        //     .post(`${process.env.REACT_APP_STRAPI_API_URL}/__refresh`) // Refresh data in Gatsby static queries
        //     .then((res) => {
        //       console.log("[Event New] schema refreshed")
        //     })
        //     .catch((err) => {
        //       console.log("[Event New] schema failed to refresh", err)
        //       this.setState({
        //         toastOpen: true,
        //       })
        //     })
        //   console.log("[Event New] redirect on success", res)
        //   // navigate(`/${portalRoot}/events${event.id}`, { state: res })
        // }, 1000)
        navigate(`/${portalRoot}/events/${event.data.id}`, { state: res })
      })
      .catch((err) => {
        console.log("[Event New] error", err)
      })
  }

  render() {
    return (
      <Layout heading="New Event">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Typography component="h2" variant="h5">
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
            <TextField
              autoComplete="off"
              id="eventName"
              name="eventName"
              label="Event Name"
              variant="outlined"
              onChange={this.handleUpdate}
            />
            <br /> <br />
            <TextField
              autoComplete="off"
              id="description"
              type="description"
              name="description"
              label="Description"
              variant="outlined"
              onChange={this.handleUpdate}
            />
            <br /> <br />
            <TextField
              id="date_start"
              label="Date Start"
              type="date"
              name="date_start"
              // defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <br />
            <TextField
              id="date_end"
              label="Date End"
              type="date"
              name="date_end"
              // defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
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
            { this.state.eventImage ? 
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
              </Button> : null
            }
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
        </LocalizationProvider>

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
