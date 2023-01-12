import React from "react"
import { Typography, Container, Box } from "@mui/material"

export default function Footer({ heading }) {
  const footerStyles = {
    justifySelf: "end",
    borderRadius: "none",
  }

  return (
    <Box component="footer" style={footerStyles} bgcolor="primary.main">
      <Container>
        <Typography variant="body2" color="primary.contrastText">
          The Paradise Junior Golf Tour | 1001 Pearce Dr. Unit 303 | Clearwater,
          FL. 33764 | Phone:{" "}
          <Typography
            component="a"
            variant="body2"
            color="inherit"
            href="tel:727-776-0450"
          >
            (727) 776-0450{" "}
          </Typography>
        </Typography>
      </Container>
    </Box>
  )
}
