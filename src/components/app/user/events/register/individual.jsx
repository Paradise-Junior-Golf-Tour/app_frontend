import React, { useEffect, useState } from "react"
import { Typography, FormControl, Button } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from "@mui/material/Box"
import FormLabel from "@mui/material/FormLabel"
import FormHelperText from "@mui/material/FormHelperText"
import { reduceObjects } from "../../../../../util"
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
      return
    }

    if (events.filter((x) => x.registered).some((e) => e.id === event)) {
      return true
    }
  }

  if (!events) return "Loading"

  return (
    <Layout
      heading="Event Registration"
      subHeading={`Register for ${
        props?.location?.state?.event?.name
          ? props?.location?.state?.event?.name
          : "event"
      }`}
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          Events
        </Typography>
        <Typography variant="h5" component="h2">
          {checkEventReferrarRegistered(events, eventReferrerId) ? `You have previously registered for ${props?.location?.state?.event?.name}, but you can still select events from the available options below.` : `You have selected ${props?.location?.state?.event?.name}.  Additional events can also be selected.` || "Choose the events for which you would like to register."}
        </Typography>
        <br />
        <Box>
          <FormControl sx={{}} component="fieldset" variant="standard">
            <FormLabel component="legend">Select Your Events</FormLabel>
            <FormGroup>
              {events
                ? events.map((event) => {
                    return (
                      <Box key={event.name + event.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={event.checked}
                              onChange={handleChangeNew}
                              name={event.name}
                              disabled={event.registered}
                            />
                          }
                          label={`${event.name + " - $" + event.fee}`}
                        />
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
