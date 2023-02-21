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
      <Layout heading="Create New Event">
        <Typography component="h2" variant="h5">
          Add a new Event entry and generate the corresponding Tee Times and
          Results records.
        </Typography>
        <p>
          You will be able to further edit this event once it has been created.{" "}
          <strong>
            New events will appear on the site after several minutes (the site rebuilds on new events to provide optimized search engine results).
          </strong>
        </p>
        <br />
        <form
          onChange={this.handleUpdate}
          method="post"
          name="new-event"
          onSubmit={(event) => {
            this.handleSubmit(event)
          }}
        >
          <Typography component="h3" variant="h5">
            Name, Date, and Description
          </Typography>

          <br />
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                disabled={this.state.loading}
                sx={{ width: "100%" }}
                id="name"
                label="Name"
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Event Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                disabled={this.state.loading}
                sx={{ width: "100%" }}
                id="date"
                label="Event Date"
                type="date"
                name="date"
                value={this.state.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                required
                disabled={this.state.loading}
                id="description"
                label="Description"
                type="textarea"
                multiline
                name="description"
                value={this.state.description}
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
            Registration
          </Typography>

          <br />
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <TextField
                required
                disabled={this.state.loading}
                autoComplete="off"
                id="fee"
                name="fee"
                value={this.state.fee}
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
                disabled={this.state.loading}
                autoComplete="off"
                id="max_users"
                name="max_users"
                value={this.state.max_users}
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
                disabled={this.state.loading}
                id="registration_start_date"
                label="Registration Start Date"
                type="date"
                name="registration_start_date"
                value={this.state.registration_start_date}
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
                disabled={this.state.loading}
                name="registration_end_date"
                value={this.state.registration_end_date}
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
          <Typography component="h3" variant="h5">
            Header Image
          </Typography>

          <Typography component="p" variant="p">
            This will be the primary image for the event. It will be featured in
            the header and all thumbnails. <br />
            You will be able to add more images later from this event's
            management page.
          </Typography>
          <br />
          <ContentGrid>
            <Grid sm={12}>
              <Box
                style={{
                  height: "20rem",
                  backgroundImage: `url(${this.state.imagePreview})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  border: "1px solid rgba(0, 0, 0, 0.23)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {this.state.imagePreview ? null : "No image selected."}
              </Box>
            </Grid>
            <Grid>
              <Button
                disabled={this.state.loading}
                variant="contained"
                color="secondary"
                component="label"
                name="event_image"
                value={this.state.event_image}
                id="event_image"
                onChange={this.handleUpdate}
              >
                {this.state.imageData ? "Change Image" : "Select Image"}
                <label htmlFor="imageData">
                  <input type="file" name="imageData" hidden />
                </label>
              </Button>
            </Grid>
            <Grid>
              {this.state.imageData ? (
                <Button
                  disabled={this.state.loading}
                  variant="outlined"
                  color="secondary"
                  component="label"
                  onClick={() => {
                    this.setState({ imageData: "", imagePreview: "" })
                  }}
                >
                  Remove Image
                </Button>
              ) : null}
            </Grid>
          </ContentGrid>
          <br />

          <LoadingButton
            variant="contained"
            loading={this.state.loading}
            type="submit"
          >
            Create Event
          </LoadingButton>
        </form>

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
