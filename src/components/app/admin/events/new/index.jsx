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

class AdminEventsNew extends React.Component {
  state = {
    loading: false,
    error: null,
    toastOpen: false,

    // Form and image upload data.  TODO: Make these controlled.
    name: "",
    date: "",
    description: "",
    fee: "",
    max_users: "",
    registration_start_date: "",
    registration_end_date: "",
    imageData: null,
    imagePreview: null,
  }

  componentDidUpdate() {
    // Nada for now. :)
  }

  handleUpdate = (event) => {
    if (event.target.type === "file") {
      this.setState({
        [`imagePreview`]: URL.createObjectURL(event.target.files[0]),
        [event.target.name]: event.target.files[0],
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  }

  closeToast = () => {
    this.setState({
      toastOpen: false,
      error: null,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({
      loading: true,
    })

    let file = new FormData()
    file.append("files", this.state.imageData)

    // uploadFileSingle(file)
    axios
      .post(`${process.env.REACT_APP_STRAPI_API_URL}/api/upload`, file) // TODO - replace with service.
      .then((response) => {
        const image = response.data[0].id

        eventsNew({
          image,
          ...this.state, // Passing extra state data but it's fine.
          // Would be cleaner using a functional component and hooks.
        })
          .then((res) => {
            const event = res

            this.setState({
              loading: false,
              toastOpen: true,
            })

            setTimeout(() => {
              this.setState({
                loading: false,
                toastOpen: false,
              })
              navigate(`/${portalRoot}/events/${event.data.id}`, { state: res })
            }, 3000)
          })
          .catch((error) => {
            this.setState({
              loading: false,
              toastOpen: true,
              error: error.message,
            })
          })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          toastOpen: true,
          error: error.message,
        })
      })
  }

  render() {
    return (
      <Layout heading="New Event">
        <Typography component="h2" variant="h2">
          Start creating a new event.
        </Typography>
        <Typography component="h3" variant="h4">
          You will still be able to edit this later.
        </Typography>
        <br />

        <br />
        <br />
        <EventDetailsForm />

        <Snackbar
          open={this.state.toastOpen}
          autoHideDuration={6000}
          onClose={this.closeToast}
          color={this.state.error ? "error" : "info"}
        >
          <Alert
            onClose={this.closeToast}
            severity={this.state.error ? "error" : "info"}
            sx={{ width: "100%" }}
            variant="filled"
          >
            <AlertTitle>
              {this.state.error
                ? "An error occurred while trying to create this event."
                : `Succesfully created the new event '${this.state.name}'`}
            </AlertTitle>
            {this.state.error
              ? `${this.state.error}.`
              : "You will be directed to the new event."}
          </Alert>
        </Snackbar>
      </Layout>
    )
  }
}

export default AdminEventsNew
