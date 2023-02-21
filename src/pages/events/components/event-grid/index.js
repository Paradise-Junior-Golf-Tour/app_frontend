import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import EventCard from "../event-card"

export default function BasicGrid({ events }) {
  console.log("[Event Grid]", events)

  if (!events.length) return null

  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <Grid container spacing={4}>
        {events &&
          events.map((event) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <EventCard event={event} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
