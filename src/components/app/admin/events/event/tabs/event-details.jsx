import React from "react"
import { Typography, TextField } from "@mui/material"
import EventDetailsForm from "../../../../../forms/signup/event-details"

const Details = ({ data }) => {
  if (!data) return null
  return <EventDetailsForm data={data} />
}

export default Details
