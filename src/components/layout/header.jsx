import React from "react"
import { Typography, Container, Box, Avatar } from "@mui/material"
import { isLoggedIn, getUser } from "../../services/authentication"
import { isBrowser } from "../../util"
import { useTheme } from "@mui/material/styles"

// TODO - make this a temp dev tool and then into a real header with styling and breadcrumbs.
export default function Header({ heading, img, ...props }) {
  const authenticated = isLoggedIn()
  const user = getUser()
  const theme = useTheme()

  console.log("[Header] props/data:", {
    props: {
      heading,
      img,
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

  const imgUrl =
    img ||
    "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"

  const styleHeader = {
    backgroundImage: `linear-gradient(to left bottom, rgba(245, 246, 252, 0.32), ${theme.palette.secondary.main} ), url(${imgUrl})`,
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
      color="seconary"
      sx={{ height: 288, p: 0 }}
    >
      {/* <ImageSlider /> */}
      <Container sx={{ py: 0, px: 2, position: "relative", ...styleContainer }}>
        <Typography
          component="h1"
          variant="h2"
          sx={{ display: "block", p: 0, fontWeight: "bold", py: 0 }}
        >
          {heading}
        </Typography>
        {isBrowser() &&
        isLoggedIn() &&
        window.location.pathname.includes("/app") ? (
          <Avatar
            alt="Remy Sharp"
            sx={{
              display: { xs: "none", sm: "block" },
              border: "2px solid white",
              width: { sm: 128, md: 160 },
              height: { sm: 128, md: 160 },
              position: "absolute",
              right: 0,
              bottom: { sm: -64, md: -80 },
              mx: { sm: 4, md: 6 },
            }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          />
        ) : null}
      </Container>
    </Box>
  )
}
