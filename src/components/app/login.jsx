import React from "react"
import { navigate, Link } from "gatsby"
import {
  handleLogin,
  isLoggedIn,
  getUser,
  logout,
} from "../../services/authentication"
import { Button, TextField, Typography, Box } from "@mui/material"
import { portalRoot } from "../../config"
import Layout from "../layout"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: ``, password: `` }
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  compendentDidUpdate() {
    console.log(this.props)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const fwd = this.props.location.state
    await handleLogin(this.state)
      .then((res) => {
        console.log("[Page | Login] response", {
          response: res,
          portalRoot,
          fwd: fwd,
        })

        // Redirect if needed.
        if (fwd) {
          console.log("[Page | Login] handleSubmit fwd", fwd)
          // return navigate("/" + portalRoot + fwd.url, { state: fwd })
        }
        navigate(`/${portalRoot}`)
        // navigate(`/${fwd ? fwd : "/" + portalRoot}`)
        // navigate(
        //   this.props.location.state.forwardAuthenticated || "/" + portalRoot,
        //   {
        //     replace: true,
        //   }
        // )
      })
      .catch((error) => {
        console.log("[Page | Login] handleSubmit error", error)
      })
      .finally(() => {
        console.log("[Page | Login] handleSubmit complete")
      })
  }

  handleLogout = () => {
    logout(() =>
      navigate(this.props.location.pathname, {
        replace: true,
      })
    )
  }

  render() {
    // console.log("theme", theme)
    if (isLoggedIn()) {
      const user = getUser()

      return (
        <Layout
          heading={`Howdy${
            user.data.name_first ? " " + user.data?.name_first : ""
          }!`}
        >
          <Typography component="h2" variant="h5">
            Looks like you're logged in.
          </Typography>
          <p>
            Head here{" "}
            <Link to={`/${portalRoot}`}>
              to view your profile and get started.
            </Link>
          </p>
          <br />
          <Button
            variant="contained"
            onClick={this.handleLogout}
            color="primary"
          >
            Logout
          </Button>
        </Layout>
      )
    }

    console.log("login props", this.props)

    return (
      <Layout heading="Member Login" subHeading="Log in to access your account">
        <Box component="section">
          {" "}
          <Typography component="h2" variant="h2">
            App access requires an account
          </Typography>
          <br />
          <Typography component="h2" variant="h5">
            An account is required to register for and manage your events. <br />Not a member? You
            can sign up <Link to="/signup">right here.</Link>
          </Typography>
          <br />
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
              id="username"
              name="username"
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
            <Button
              variant="contained"
              color="primary"
              loading={true}
              type="submit"
              size="large"
              sx={{mr: 2}}
            >
              Log In
            </Button>
            <Button
              disabled
              variant="outlined"
              color="primary"
              loading={true}
              type="submit"
              size="large"
            >
              Reset Password
            </Button>
          </form>
        </Box>
      </Layout>
    )
  }
}

export default Login
