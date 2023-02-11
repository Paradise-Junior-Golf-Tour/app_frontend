import React, { useEffect } from "react"
import Footer from "./footer"
import Navigation from "../navigation"
import { layoutStyles } from "../../styles"
import Main from "./main"
import { Box } from "@mui/material"
import Header from "./header"

export default function Layout({ heading, children, images }) {

  return (
    <Box style={layoutStyles}>
      <Navigation />
      <Header heading={heading} images={images} />
      <Main children={children} />
      <Footer />
    </Box>
  )
}
