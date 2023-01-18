import React from "react"
import { Typography } from "@mui/material"
import Layout from "../layout"

const FourOhFour = () => {
  return (
    <Layout heading="404">
      <Typography variant="h5" component="h2">
        Oh no. There really isn't much here.
      </Typography>
      <hr />
      <p>Seriously it might be time to take that mulligan.</p>
    </Layout>
  )
}

export default FourOhFour
