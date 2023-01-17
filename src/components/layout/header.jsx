import React from "react"
import { Typography, Container, Box } from "@mui/material"
import { isLoggedIn, getUser } from "../../services/authentication"
import ImageSlider from "./image-slider"

// TODO - make this a temp dev tool and then into a real header with styling and breadcrumbs.
export default function Header({ heading, img, location }) {
  const authenticated = isLoggedIn()
  const user = getUser()

  console.log("[Header] props/data:", {
    props: {
      heading,
      location,
      img
    },
    data: {
      authenticated,
      user: user,
    },
  })

  const ud = user?.data

  const style = {
    fontSize: "0.75rem",
    wordBreak: "break-all",
    color: "white",
  }

  // const styleHeader = {
  //   backgroundImage: `url(${null})`
  // }

  // const images = [
  //   "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  // ]

  const imgUrl = img || "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60";

  const styleHeader = {
    height: "20rem",
    backgroundImage: `linear-gradient(to left bottom, rgba(245, 246, 252, 0.52), #fb8500 ), url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "0",
    color: "white",
  }

  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", 
    alignItems: "start",
  }

  return (
    <Box
      style={styleHeader}
      component="header"
      sx={{ position: "relative", height: "20rem", p: 0 }}
    >
      {/* <ImageSlider /> */}
      <Container sx={{ height: "20rem", py: 2, px: 2, ...styleContainer}}>
        <Typography component="h1" variant="h2" color="white" sx={{display: "block", p: 0}}>
          {heading}
        </Typography>
      </Container>
    </Box>
  )
}
