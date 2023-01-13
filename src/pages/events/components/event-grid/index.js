import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import EventCard from "../event-card"

export default function BasicGrid(events) {
  console.log("[Event Grid]", events?.events?.nodes)

  if (!events?.events?.nodes) return null

  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <Grid container spacing={4}>
        {events &&
          events.events.nodes.map((event) => {
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
