import React from "react"
import { Container } from "@mui/material"
import { mainStyles } from "../../styles"

export default function Main({ children }) {
  return (
    <main style={mainStyles}>
      <Container>{children}</Container>
    </main>
  )
}
