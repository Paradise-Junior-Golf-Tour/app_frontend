// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Typography, Box } from "@mui/material"
import { Link } from "gatsby"
import Grid from "@mui/material/Unstable_Grid2"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { isLoggedIn } from "../services/authentication"

const IndexPage = (data) => {
  const loggedIn = isLoggedIn()
  const [dataClient, setDataClient] = useState()

  useEffect(() => {
    if (dataClient) {
      console.log("Log [Index Page] Props/Data", { data, dataClient })
    }
  }, [dataClient, data])

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  const images = [
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1593111774642-a746f5006b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  ]

  return (
    <Layout heading={`Paradise Junior Golf Tour ${new Date().getFullYear()}`} images={images}>
      <Box component="section">
        <Typography variant="h2" component="h2">
          What We Do
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Information to be added once available from client.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          Upcoming Events
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Information to be added once available from client.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          Give Now Button
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Information to be added once available from client.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          What's Happening Lately
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Information to be added once available from client.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          Weather Widget
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Secondary concern - not needed for launch.
        </Typography>
      </Box>
    </Layout>
  )
}

export default IndexPage
