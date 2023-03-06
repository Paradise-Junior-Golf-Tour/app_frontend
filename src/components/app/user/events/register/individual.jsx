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

  if (!events) return "Loading"

  return (
    <Layout heading="Individual Event Registration">
      <Typography variant="h3" component="h1">
        Tour Event Registration
      </Typography>
      <Typography variant="h5" component="h2">
        Register for the {props?.location?.state?.event?.name || "event"}.
      </Typography>
      <hr />
      <p>
        This is the Event Registration page. The form can be dynamically set
        based on the user's slection from the Events page.
      </p>
      <p>Choose the events you would like to register for.</p>

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
    </Layout>
  )
}
