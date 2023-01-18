import React, { useEffect, useState } from "react"
import { Typography, FormControl, Button } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from "@mui/material/Box"
import FormLabel from "@mui/material/FormLabel"
import FormHelperText from "@mui/material/FormHelperText"
import { reduceObjects } from "../../../util"
import { register, eventsAll } from "../../../services/event"
import { navigate } from "gatsby"
import Layout from "../../layout"

export default function UserEventRegistration(props) {
  // const { name, id, slug } = props?.location?.state?.event
  const [events, setEvents] = useState([])

  const registerTypes = []

  useEffect(() => {
    console.log("Register", {
      events,
    })
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    register({ events: events.map((event) => event.id), type: "Event Single" })
      .then((res) => {
        console.log(res)
        alert("Registration success!")
        navigate("/app/events")
      })
      .catch((err) => {
        console.log(err)
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

  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2

  useEffect(() => {
    eventsAll().then((res) => {
      console.log("Log [Registration] Props / Data", { props, res }) // TODO: Add strapi id
      setEvents(res)
    })
  }, [props])

  useEffect(() => {
    console.log("Log [Registration] State", { events }) // TODO: Add strapi id

    // 👇️ [{name: 'Tom', age: 30}, {name: 'Dillon', age: 30}]
  }, [events])

  // useEffect(() => {
  //   const results = events.filter((obj) => {
  //     return obj.checked === true
  //   })

  //   const totalNew = results.reduce((accumulator, object) => {
  //     return accumulator + object.Fee
  //   }, 0)

  //   setTotal(totalNew)

  //   // 👇️ [{name: 'Tom', age: 30}, {name: 'Dillon', age: 30}]
  // }, [events])

  const checked = events.filter((obj) => {
    return obj.checked === true
  })

  const total = reduceObjects(checked, "fee")

  return (
    <Layout heading="Tour Event Registration">
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

      <div className="dev">
        Need to filter out Events the user has previously registered for.
      </div>
      <br />

      <Box>
        <FormControl sx={{}} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Your Events</FormLabel>
          <FormGroup>
            {events
              ? events.map((event) => {
                  return (
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              props?.location?.state?.event?.name === event.name
                                ? true
                                : event.checked
                            }
                            onChange={handleChangeNew}
                            name={event.name}
                          />
                        }
                        label={`${event.name}`}
                      />
                      ${event.fee}
                    </div>
                  )
                })
              : null}
          </FormGroup>
          <FormHelperText>
            You are registration total is <strong>${total}</strong>.
          </FormHelperText>
        </FormControl>
        {/* <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl> */}
        <br />
        <br />
        <div>
          {" "}
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

      <br />
      <br />
      <hr />
      <p className="dev">
        Should the option to sign up in foursomes be incorporated? Pick othe
        users? Invite if they are not signed up?
      </p>
    </Layout>
  )
}
