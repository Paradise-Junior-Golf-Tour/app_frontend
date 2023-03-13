import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Layout from "../../../../layout"
import { Box } from "@mui/material"
import { getUserEvents } from "../../../../../services/user"
import { eventsAll } from "../../../../../services/event"
import { isRegistrationOpen } from "../../../../../util"


export default function SimpleAccordion(props) {
  const [events, setEvents] = React.useState([])
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

  React.useEffect(() => {
    eventsInitiliaze()
  }, [])

  if (!events) return "No events available."

  return (
    <Layout heading="Event Family Registration">
      <Box component="section">
        {events.map((event) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{event.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Layout>
  )
}
