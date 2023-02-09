import React from "react"
import Grid from "@mui/material/Unstable_Grid2"

const ContentGrid = ({children}) => (
    <Grid container sx={{ maxWidth: { xs: "600px" } }}>
    {children.map((x) => x)}
  </Grid>
)

export default ContentGrid
