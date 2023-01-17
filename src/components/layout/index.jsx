import React, { useEffect } from "react"
import Footer from "./footer"
import Navigation from "../navigation"
import { layoutStyles } from "../../styles"
import Main from "./main"
import { Box } from "@mui/material"
import Header from './header'

export default function Layout({ heading, children, img }) {
  useEffect(() => {
    console.log("[Layout] Props and State", { children, heading, img })
  }, [children, heading])

  return (
    <div style={layoutStyles}>
      <Navigation />
      <Header heading={heading} img={img} />
      <Main children={children} />
      <Footer />
    </div>
  )
}
