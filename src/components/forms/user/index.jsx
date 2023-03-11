import React from "react"
import { navigate } from "gatsby"
import { setUser, getUser } from "../../../services/authentication"
import { getUserRelations } from "../../../services/user"
import { Button, Box, Typography } from "@mui/material"
import { portalRoot } from "../../../config"
import axios from "axios"
import SignupUserFull from "./components/user-full"
import SignupUserPartial from "./components/user-partial"

// TODO - refactor to a functinoal component.
class SignupForm extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
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
    userRelations: [],
    userData: {},
    users: [],
  }

  syncUser = async () => {
    const user = getUser()
    const userRelations = await getUserRelations()
    const formPrefill = user?.data?.family_account && {
      name_last: user.data.name_last,
      address_one: user.data.address_one,
      address_two: user.data.address_two,
      address_city: user.data.address_city,
      address_state: user.data.address_state,
      address_zip: user.data.address_zip,
      family_account: false,
      users: [user.data.id],
    }
    this.setState({
      userRelations: userRelations?.users,
      userData: user?.data,
      ...formPrefill,
    })
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  componentDidUpdate() {
    console.log("Signup State", this.state)
  }

  componentDidMount() {
    this.syncUser()
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if (
      !this.state.password ||
      this.state.password !== this.state.passwordConfirmation
    ) {
      return
    }

    console.log(`Submitting...`, this.state)

    axios
      .post(
        `${process.env.GATSBY_REACT_APP_STRAPI_API_URL}/api/auth/local/register`,
        this.state
      )
      .then((response) => {
        console.log("User profile", response.data.user)
        console.log("User token", response.data.jwt)
        if (this.state.userData?.family_account) {
          return
        } else {
          setUser({
            data: response.data.user,
            jwt: response.data.jwt,
          })
          navigate(
            `/${
              response.data.user.family_account
                ? portalRoot + "/family"
                : portalRoot
            }`
          )
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error)
      })
  }

  render() {
    return (
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
        {this.state?.userData?.family_account ? (
          <Box component="section">
            <Typography variant="h2" component="h2">
              Add Family Member
            </Typography>
            <Typography variant="h5" component="div">
              Add a new user to this account.
            </Typography>
            <br />
            <br />
            <SignupUserPartial
              formData={this.state}
              handleUpdate={this.handleUpdate}
              handleSubmit={this.handleSubmit}
            />
          </Box>
        ) : (
          <SignupUserFull
            formData={this.state}
            handleUpdate={this.handleUpdate}
            handleSubmit={this.handleSubmit}
          />
        )}
        <br />
        <Button
          variant="contained"
          loading={true}
          type="submit"
          size="large"
          onClick={this.handleSubmit}
        >
          Submit Here
        </Button>
      </Box>
    )
  }
}

export default SignupForm
