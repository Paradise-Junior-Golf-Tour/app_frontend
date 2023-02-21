import React from "react"
import { Typography, TextField } from "@mui/material"

const Details = ({ data }) => {
  if (!data) return null
  return (
    <section style={{ paddingTop: 0, marginTop: 0 }}>
      <Details />
      <Typography component="h2" variant="h4">
        Event Info and Details
      </Typography>
      <br />
      <TextField
        label={`Name`}
        value={data?.name}
        InputLabelProps={{
          shrink: data?.name ? true : false,
        }}
      />
      <br />
      <br />
      <TextField
        label={`Date`}
        type="date"
        InputLabelProps={{
          shrink: data?.date ? true : false,
        }}
        value={data?.date}
      />
      <br />
      <br />
      <TextField
        label={`Fee`}
        type="number"
        value={data?.fee}
        InputLabelProps={{
          shrink: data?.fee ? true : false,
        }}
      />
      <br />
      <br />
      <TextField
        label={`Max Golfers`}
        type="number"
        value={data?.max_users}
        InputLabelProps={{
          shrink: data?.max_users ? true : false,
        }}
      />
      <br />
      <br />

      <TextField
        label={"Description"}
        InputLabelProps={{
          shrink: true,
        }}
        type="textarea"
        value={data?.description}
      />
      <br />
      <br />
      <TextField
        label={"Registration Start Date"}
        InputLabelProps={{
          shrink: true,
        }}
        type="date"
        value={data?.registration_start_date}
      />
      <br />
      <br />
      <TextField
        label={"Registration End Date"}
        InputLabelProps={{
          shrink: true,
        }}
        type="date"
        value={data?.registration_end_date}
      />
      <br />
      <p className="dev">
        <strong>
          or event better - clicking edit for each section shows the editor in
          its place.
        </strong>{" "}
        This could also be a good spot to use conditional menus for{" "}
        <strong>Edit, Save, Discard.</strong>
      </p>
    </section>
  )
}

export default Details
