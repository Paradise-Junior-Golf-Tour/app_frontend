import React from "react"
import { Container, Box } from "@mui/material"
import { mainStyles } from "../../styles"

export default function Main({ children }) {
  const setContainer = (child) => {
    if (child.props?.fullWidth) {
      return <Box>{child}</Box>
    } else {
      return <Container sx={{pt: 0}}>{child}</Container>
    }
  }

  return (
    <main style={mainStyles} >
      <Box>
        {children.length > 1
          ? children.map((x) => {
              return setContainer(x)
            })
          : setContainer(children)}
      </Box>
    </main>
  )
}
