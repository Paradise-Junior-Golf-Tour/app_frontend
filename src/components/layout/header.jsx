import React from "react"
import { Typography, Container } from "@mui/material"
import { isLoggedIn, getUser } from "../../services/authentication"

// TODO - make this a temp dev tool and then into a real header with styling and breadcrumbs.
export default function Header({ heading, location }) {
  const authenticated = isLoggedIn()
  const user = getUser()

  console.log("[Header] props/data:", {
    props: {
      heading,
      location,
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
  }

  return (
    <header>
      <Container>
        <Typography component="h1" variant="subtitle1">
          <span style={{ color: " #a2ff00" }}>{heading}</span>{" "}
          {user ? `| ${authenticated ? "Authenticated | " : "Public"} ` : ``}
          {authenticated ? (
            <span
              style={style}
            >{`${ud?.name_first} ${ud?.name_last} - ${ud?.email}`}</span>
          ) : null}
        </Typography>
        {authenticated ? <span style={style}>{`${user.jwt}`}</span> : null}
      </Container>
    </header>
  )
}
