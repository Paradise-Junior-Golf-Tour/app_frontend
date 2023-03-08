import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "./card"
import Error from "../error"
import { sort } from "../../util"

export default function EventCardGrid({ events, max }) {
  if (!events.length) return <Error />

  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />
      <Grid container spacing={4}>
        {events &&
          sort(events, "date").slice(0, max).map((event) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card event={event} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
