import React, { useEffect, useState } from "react"
import { Typography, FormControl, Button } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from "@mui/material/Box"
import FormLabel from "@mui/material/FormLabel"
import FormHelperText from "@mui/material/FormHelperText"
import {
  reduceObjects,
  isRegistrationOpen,
  dateFormat,
} from "../../../../../util"
import { register, eventsAll } from "../../../../../services/event"
import { navigate } from "gatsby"
import Layout from "../../../../layout"
import { getUser } from "../../../../../services/authentication"
import { getUserEvents } from "../../../../../services/user"

export default function RegisterEventsIndividual(props) {
  const [events, setEvents] = useState([])
  const eventReferrerId = props?.location?.state?.event?.id

  const handleSubmit = (e) => {
    e.preventDefault()
    register({ events: checked.map((event) => event.id), type: "Event Single" })
      .then((res) => {
        console.log("Register", res)

        navigate("/app/events")
      })
      .catch((err) => {
        console.log("Register", err)
      })
  }

  const handleChangeNew = (event) => {
    const newState = events.map((obj) => {
      if (obj.name === event.target.name) {
        return { ...obj, checked: obj.checked === true ? false : true }
      }

      return obj
    })

    setEvents(newState)
  }

  // Fetch both user events and all events and compare to set disabled state on events the user has already registered for.
  // Check the event if user navigated from an stateful link
  const eventsInitiliaze = async () => {
    const userEvents = await getUserEvents()
    const eventsAvailable = await eventsAll()

    eventsAvailable.forEach((x) => {
      const location = props?.location?.state?.event?.name
      const event = x.name
      x.registration = isRegistrationOpen({
        start: x.registration_start_date,
        end: x.registration_end_date,
      })

      // if user event array has entries disable that entry
      if (userEvents.some((userEvent) => x.name === userEvent.name)) {
        x.registered = true
      } else if (location === event) {
        x.checked = true
      }
    })

    setEvents(eventsAvailable)
  }

  useEffect(() => {
    eventsInitiliaze()
  }, [])

  // Array that checks for checked/selected events (empty prevents submission)
  const checked = events.filter((obj) => {
    return obj.checked === true
  })

  // Total cost (pass to checkout)
  const total = reduceObjects(checked, "fee")

  const checkEventReferrarRegistered = (events, event) => {
    if (!events) {
      return false
    }

    if (
      events.filter((x) => x.registered).some((e) => e.id == eventReferrerId)
    ) {
      return true
    }
  }

  if (!events) return "Loading"

  console.log(
    "*** ee",
    events !== undefined
      ? events.find((e) => e.name === props?.location?.state?.event?.name)
      : null
  )
  return (
    <Layout
      heading="Event Registration"
      subHeading={`Signup for ${
        props?.location?.state?.event?.name
          ? props?.location?.state?.event?.name
          : "your preferred events"
      }`}
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          Select Your Events
        </Typography>
        <Typography variant="h5" component="h2">
          {checkEventReferrarRegistered(events, eventReferrerId)
            ? `You have already registered for ${
                events.find((x) => x.id === eventReferrerId).name
              }, but can still register for other events.`
            : eventReferrerId
            ? `You have selected ${props?.location?.state?.event?.name}.  Choose any additional events below.`
            : `Choose from the events below.`}
        </Typography>
        <br />
        <Box>
          <FormControl sx={{}} component="fieldset" variant="standard">
            {/* <FormLabel component="legend">Select Your Events</FormLabel> */}
            <FormGroup>
              {events
                ? events.map((event) => {
                    return (
                      <Box
                        sx={{
                          // borderTop: "1px solid lightgrey",
                          pb: 1,
                          pt: 1,
                          display: "flex",
                          alignItems: "center",
                          color:   event.registered || !event.registration ? "lightgrey" : "",
                          // opacity:
                          //   event.registered || !event.registration ? 0.5 : 1,
                        }}
                        key={event.name + event.id}
                      >
                        <FormControlLabel
                          // label={event.name}
                          control={
                            <Checkbox
                              checked={event.checked}
                              onChange={handleChangeNew}
                              name={event.name}
                              disabled={event.registered || !event.registration}
                            />
                          }
                        />
                        <Box ssx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="h6" component="h2">
                            {event.name} - ${event.fee}
                          </Typography>
                          <Box
                            component="span"
                            sx={{
                              // ml: 2,
                              display: "flex",
                              color: event.registered
                                ? "green"
                                : event.registration
                                ? "primary.main"
                                : "error.main",
                            }}
                          >
                            {event.registered
                              ? "Registered"
                              : event.registration
                              ? `Registration open until ${event.registration_end_date}.`
                              : `Registration closed as of ${event.registration_end_date}.`}
                          </Box>
                        </Box>
                      </Box>
                    )
                  })
                : null}
            </FormGroup>
            <FormHelperText>
              You are registration total is <strong>${total}</strong>.
            </FormHelperText>
          </FormControl>

          <br />
          <br />

          <div>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              disabled={!checked.length}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Box>
    </Layout>
  )
}
