import React from "react"
import { navigate, Link } from "gatsby"
import {
  handleLogin,
  isLoggedIn,
  getUser,
  logout,
} from "../../services/authentication"
import { Button, TextField, Typography } from "@mui/material"
import { portalRoot } from "../../config"

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

      console.log(user)

      // if (user?.data?.admin) {
      //   navigate(`/${portalRoot}/home`)
      // } else {
      //   navigate(`/${portalRoot}/profile`)
      // }

      // navigate(`/${portalRoot}`)
      return (
        <>
          <Typography component="h1" variant="h3">
            Howdy {user.data?.username}!
          </Typography>
          <Typography component="h2" variant="h5">
            You're logged in!
          </Typography>
          <p>Users and admins can log out of the app here.</p>
          <p>
            If you got lost head here{" "}
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
        </>
      )
    }

    console.log("login props", this.props)

    return (
      <>
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <Typography component="h2" variant="h5">
          Users and admins log in to the app here.
        </Typography>
        <hr />
        <p>
          Not a member? An account is required to register up for and manage
          your events. You can sign up <Link to="/signup">right here.</Link>
        </p>
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
          >
            Log In
          </Button>
        </form>
      </>
    )
  }
}

export default Login
