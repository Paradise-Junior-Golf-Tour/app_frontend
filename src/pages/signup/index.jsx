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
} from "@mui/material"
import { portalRoot } from "../../config"
import Layout from "../../components/layout"
import axios from "axios"

// TODO - refactor to a functinoal component.
class Signup extends React.Component {
  state = {
    email: ``,
    username: ``,
    password: `Happymarmot87*`,
    name_first: `Abe`,
    name_last: `Candler`,
    gender: "",
    birthday: ``,
    address_one: ``,
    address_zip: ``,
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
        navigate(`/${portalRoot}`)
      })
      .catch((error) => {
        console.log("An error occurred:", error)
      })
    // Submit form and such.
  }

  render() {
    return (
      <Layout heading="Signup">
        <Typography component="h1" variant="h3">
          Signup
        </Typography>
        <Typography component="h2" variant="h5">
          Users and admins sign up for the app here.
        </Typography>
        <br />
        <form
          method="post"
          name="signup"
          onSubmit={(event) => {
            this.handleSubmit(event)
          }}
        >
          {/* <br /> <br /> */}
          <TextField
            autoComplete="off"
            id="email"
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <TextField
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            label="Username"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <TextField
            autoComplete="off"
            id="password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <TextField
            autoComplete="off"
            id="name_first"
            type="text"
            name="name_first"
            label="First Name"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <TextField
            autoComplete="off"
            id="name_last"
            type="text"
            name="name_last"
            label="Last Name"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
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
          <br /> <br />
          <FormControl>
            <TextField
              autoComplete="off"
              id="birthday"
              type="date"
              name="birthday"
              // label="Birthday"
              variant="outlined"
              onChange={this.handleUpdate}
            />
          </FormControl>
          <br /> <br />
          <TextField
            autoComplete="off"
            id="address_one"
            type="text"
            name="address_one"
            label="Address"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <TextField
            autoComplete="off"
            id="address_zip"
            type="text"
            name="address_zip"
            label="Zip"
            variant="outlined"
            onChange={this.handleUpdate}
          />
          <br /> <br />
          <Button variant="contained" loading={true} type="submit">
            Create My Profile
          </Button>
        </form>
        {/* </Layout> */}
      </Layout>
    )
  }
}

export default Signup
