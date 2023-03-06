import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import EventCard from "../event-card"
import Error from "../../../../components/error"

export default function EventGrid({ events }) {

  if (!events.length) return <Error />

  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <Grid container spacing={4}>
        {events &&
          events.map((event) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <EventCard event={event} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
