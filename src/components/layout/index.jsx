import React, { useEffect } from "react"
import Footer from "./footer"
import Navigation from "../navigation"
import { layoutStyles } from "../../styles"
import Main from "./main"
import { Box } from "@mui/material"
import Header from "./header"
import Banner from "./banner"

export default function Layout({ heading, children, images }) {
  useEffect(() => {
    console.log("[Layout] Props and State", { children, heading, images })
  }, [children, heading])

  return (
    <Box style={layoutStyles}>
      <Banner />
      <Navigation />
      <Header heading={heading} images={images} />
      <Main children={children} />
      <Footer />
    </Box>
  )
}
