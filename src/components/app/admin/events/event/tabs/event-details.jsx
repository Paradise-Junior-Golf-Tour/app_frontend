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
      <TextField label={`Name`} value={data?.attributes?.name} />
      <br />
      <br />
      <TextField
        label={`Date`}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={data?.attributes?.date}
      />
      <br />
      <br />
      <TextField label={`Fee`} type="number" value={data?.attributes?.fee} />
      <br />
      <br />
      <TextField
        label={`Max Golfers`}
        type="number"
        value={data?.attributes?.max_users}
      />
      <br />
      <br />

      <TextField
        label={"Description"}
        InputLabelProps={{
          shrink: true,
        }}
        type="textarea"
        value={data?.attributes?.description}
      />
      <br />
      <br />
      <TextField
        className="dev"
        label={"Registration Start Date"}
        InputLabelProps={{
          shrink: true,
        }}
        type="date"
        value={data?.attributes?.registration_start_date}
      />
      <br />
      <br />
      <TextField
        className="dev"
        label={"Registration End Date"}
        InputLabelProps={{
          shrink: true,
        }}
        type="date"
        value={data?.attributes?.registration_end_date}
      />
      <br />
      <br />
      {/* <Typography variant="h5" component="p">
            {moment(data?.attributes?.date).format("MMMM Do YYYY")}
          </Typography> */}

      <p className="dev">
        It may be a good idea to conditionally hide the tee times if the event
        has completed.
      </p>
      <p className="dev">
        Some sections below may require their own queries to populate
        relationships and other fields.
      </p>
      <p className="dev">
        Their should be a way to edit these fields. Perhaps modals or links to
        the specific sections,{" "}
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
