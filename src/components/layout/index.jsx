import React, { useEffect } from "react"
import Footer from "./footer"
import Navigation from "../navigation"
import { layoutStyles } from "../../styles"
import Main from "./main"
import { Box } from "@mui/material"
import Header from "./header"

export default function Layout({ heading, subHeading, children, images, button }) {
  
  return (
    <Box style={layoutStyles}>
      <Navigation />
      <Header heading={heading} subHeading={subHeading} images={images} button={button} />
      <Main children={children} />
      <Footer />
    </Box>
  )
}
