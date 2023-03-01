import React from "react"
import { Typography } from "@mui/material"
import Layout from "../layout"

const FourOhFour = () => {
  return (
    <Layout heading="404">
      <Typography variant="h5" component="h2">
        Oh no. You may need that mulligan.
      </Typography>
      <hr />
      <p>We were not able to find this resource, but here are some helpful links to get you back on track!</p>
    </Layout>
  )
}

export default FourOhFour
