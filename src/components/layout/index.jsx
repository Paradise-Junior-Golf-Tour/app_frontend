import React, { useEffect } from "react"
import Footer from "./footer"
import Navigation from "../navigation"
import { layoutStyles } from "../../styles"
import Main from "./main"
import { Box } from "@mui/material"

export default function Layout({ heading, children }) {
  useEffect(() => {
    console.log("[F] Props and State", { children, heading })
  }, [children, heading])

  return (
    <div style={layoutStyles}>
      <Navigation />
      <Main children={children} />
      <Footer />
    </div>
  )
}
