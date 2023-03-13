import React from "react"
import Layout from "../../../components/layout"
import { Link, navigate } from "gatsby"
import { Typography, Box } from "@mui/material"
import { getUser } from "../../../services/authentication"
import { portalRoot } from "../../../config"
import { Button } from "gatsby-theme-material-ui"

export default function EventRegistration(props) {
  const user = getUser()

  const linkActive = {
    color: "white",
  }

  const forward = (e) => {
    e.preventDefault()
    navigate(`/${portalRoot}/events/register`, {
      state: props?.location?.state?.event || "",
    })
  }

  const eventName = props.location.state?.event?.name

  return (
    <Layout
      heading={"Event Registration"}
      subHeading={`Signup for ${eventName ? eventName : "tour events"}`}
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          How to register
        </Typography>
        <Typography variant="h5" component="p">
          Register for {eventName ? "the " + eventName + "." : "tour events."}
        </Typography>
        <hr />
        <p></p>
        <Typography variant="h5" component="h3">
        
          {/* <Link
          to={
            (`/${portalRoot}/events/register`,
            {
              state: props?.location?.state?.event || "",
            })
          }
        >
          Log in to register.
        </Link> */}
        </Typography>
        <p>
          User-selected event to prefill in the form:{" "}
          <strong>{props.location.state?.event?.name || "None"}</strong>.
        </p>
        <ol>
          <li>
            Check if user is logged in. If yes forward to the app events
            registration page.
          </li>
          <li>
            If user is logged out, provide link to login with forwarding of
            state's event selection.
          </li>
          <li>
            <div>Show sign-up steps/form.</div>
            <ol>
              <li>Email input and verification.</li>
              <li>Profile information input (once verified).</li>
              <li>
                <di>Event registration.</di>
                <ol>
                  <li>Start transaction and POST.</li>
                  <li>Payment</li>
                  <li>On success, PATCH transaction and events.</li>
                  <li>On error, display messaging and PATCH</li>
                </ol>
              </li>
              <li>Confirmation and redirect to user events page.</li>
            </ol>
          </li>
        </ol>
        <p>
          Once all events are selected the user will pay via a thrid party.
          Create transaction on submit and patch once resolved.{" "}
        </p>
        <p>
          Consider this to also be a CTA to sign up - we can create user
          profiles here or even require it via email validation/google/auth in
          order to register.
        </p>
        <Typography variant="h5" component="h3">
          Other Events
        </Typography>
        <ul>
          <li>
            <Link activeStyle={linkActive} to="/events">
              Back to Events
            </Link>
          </li>
          {props.location.state?.event?.slug ? (
            <li>
              <Link
                activeStyle={linkActive}
                to={"/events/" + props.location.state?.event?.slug || ""}
              >
                More Info
              </Link>
            </li>
          ) : null}
        </ul>
      </Box>
    </Layout>
  )
}
