import { Button } from "gatsby-theme-material-ui"
import { isLoggedIn } from "../../../services/authentication"
import React from "react"
import { navigate } from "gatsby"
import { portalRoot } from "../../../config"
import { isRegistrationOpen} from "../../../util"

const EventButton = ({ event, sx }) => {
  const authenticated = isLoggedIn()
  const registrationOpen = isRegistrationOpen({ start: event.registration_start_date, end: event.registration_end_date })
  console.log('eb', {registrationOpen, event})

  // reg || res
  const navigateRest = () => {
    let url = `/events/${event.slug}/results`

    if (registrationOpen) {
      console.log("EB register open:", registrationOpen)
      if (authenticated) {
        console.log("EB register auth:", authenticated)
        url = `/${portalRoot}/events/register`
        console.log("EB register url:", url)
      }
    } else {
      url = `/events/${event.slug}/results`
    }

    console.log("EB register url:", url)
    return url
  }

  const url = navigateRest()
  // alert(url)

  const handleClick = (e) => {
    e.preventDefault()
    navigate(url, {
      state: {
        event: {
          id: event?.id,
          name: event?.name,
          slug: event?.slug,
        },
      },
    })
  }

  return (
    <Button
      color="secondary"
      variant="contained"
      size="large"
      to={url}
      onClick={handleClick}
      sx={sx}
    >
      {registrationOpen ? "Register" : "Results"}
    </Button>
  )
}

export default EventButton
