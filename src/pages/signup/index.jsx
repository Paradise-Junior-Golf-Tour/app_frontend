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

// TODO - refactor to a functinoal component.
class Signup extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    name_first: "",
    name_last: "",
    gender: "",
    birthday: "",
    address_one: "",
    address_two: "",
    address_city: "",
    address_state: "",
    address_zip: "",
    family_account: "",
  }

  handleUpdate = (event) => {
    if (event.target.name === "email") {
      this.setState({
        [event.target.name]: event.target.value,
        [`username`]: event.target.value,
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  }

  componentDidUpdate() {
    console.log("Signup FormControl Data", this.state)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(`Submitting...`, this.state)
    axios
      .post(
        `${process.env.REACT_APP_STRAPI_API_URL}/api/auth/local/register`,
        this.state
      )
      .then((response) => {
        console.log("User profile", response.data.user)
        console.log("User token", response.data.jwt)
        setUser({
          user: response.data.user,
          jwt: response.data.jwt,
        })
        navigate(
          `/${
            response.data.user.family_account
              ? portalRoot + "/family"
              : portalRoot
          }`
        )
      })
      .catch((error) => {
        console.log("An error occurred:", error)
      })
  }

  render() {
    return (
      <Layout heading="Signup">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          method="post"
          name="signup"
          onSubmit={(event) => {
            this.handleSubmit(event)
          }}
        >
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="username"
                  name="username"
                  value={this.state.username}
                  type="text"
                  label="Username"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="name_first"
                  type="text"
                  name="name_first"
                  label="First Name"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="name_last"
                  type="text"
                  name="name_last"
                  label="Last Name"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="family_account">Family Account</InputLabel>
                <Select
                  sx={{ width: "100%" }}
                  labelId="family_account"
                  id="family_account"
                  name="family_account"
                  value={this.state.family_account}
                  label="Family Account"
                  onChange={this.handleUpdate}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </ContentGrid>
          <br />
          <hr />
          <br />
          <ContentGrid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={this.state.gender}
                  label="Gender"
                  onChange={this.handleUpdate}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="birthday"
                  type="date"
                  name="birthday"
                  label="Birthday"
                  variant="outlined"
                  onChange={this.handleUpdate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="address_one"
                  type="text"
                  name="address_one"
                  label="Address"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  autoComplete="off"
                  id="address_zip"
                  type="text"
                  name="address_zip"
                  label="Zip"
                  variant="outlined"
                  onChange={this.handleUpdate}
                />
              </FormControl>
            </Grid>
          </ContentGrid>

          <br />
          <Button variant="contained" loading={true} type="submit">
            Create My Profile
          </Button>
        </Box>
      </Layout>
    )
  }
}

export default Signup
