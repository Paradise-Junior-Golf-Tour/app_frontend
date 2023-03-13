import React, { useEffect, useState } from "react"
import { Typography, Container, Box, Avatar } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import { isLoggedIn } from "../../services/authentication"
import { isBrowser } from "../../util"
import { useTheme } from "@mui/material/styles"
import useInterval from "react-useinterval"
import { portalRoot } from "../../config"

// TODO - make this a temp dev tool and then into a real header with styling and breadcrumbs.
export default function Header({ heading, subHeading, images, button }) {
  const [imageActive, setImageActive] = useState(0)
  const theme = useTheme()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    setAuth(isLoggedIn())
  })

  // Replace with a default from CMS.
  const _images = images || [
    "https://images.unsplash.com/photo-1591546324939-bc2638640783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGYlMjBjb3Vyc2UlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  ]

  const increaseCount = (amount) => {
    if (imageActive < _images.length - 1) {
      setImageActive(imageActive + amount)
    } else {
      setImageActive(0)
    }
  }

  useInterval(increaseCount, _images.length > 1 ? 4000 : null, 1)

  const height = 500

  return (
    <Box
      component="header"
      color="secondary"
      sx={{
        height: height,
        p: 0,
        position: "relative",
        bgcolor: theme.palette.primary.main,
      }}
    >
      {/* overlay */}
      <Box
        sx={{
          bgcolor: "black",
          opacity: 0.75,
          position: "absolute",
          top: 0,
          height: height,
          width: "100%",
          zIndex: 1,
        }}
      ></Box>

      <Box sx={{ overflow: "hidden", height: height, position: "relative" }}>
        {_images.map((image, index) => {
          const isActive = imageActive === index ? true : false
          return (
            <Box
              key={_images[index]}
              style={{
                backgroundImage: `url(${_images[index]})`,
                transition: "1000ms",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "repeat-x",
                backgroundColor: "white",
                padding: "0",
                height: height * 1.1,
                width: "100%",
                position: "absolute",
                opacity: isActive ? 1 : 0,
                transform: `scale(${isActive ? 1 : 1.005}) translateY(${
                  isActive ? "0" : "0"
                })`,
              }}
            />
          )
        })}
      </Box>

      <Container
        sx={{
          py: 0,
          px: 2,
          transform: "translateY(-100%)",
          width: "100%",
          zIndex: 2,
          position: "relative",
          margin: "auto",
          bottom: 0,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            display: "block",
            // maxWidth: 600,
            fontWeight: 500,
            // textShadow: `1px 1px 1px ${theme.palette.primary.background}`,
          }}
        >
          {heading}
        </Typography>

        {subHeading ? (
          <>
            <Typography
              component="div"
              variant="h3"
              sx={{
                display: "block",
                mb: 2,
              }}
            >
              {subHeading}
            </Typography>
          </>
        ) : null}

        {button ? (
          button
        ) : (
          <Box>
            <Button
              to={auth ? `/${portalRoot}` : `/${portalRoot}/login`}
              color="secondary"
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
            >
              {auth ? "My Profile" : "Login"}
            </Button>
            <Button
              to={
                isBrowser() &&
                (window.location.pathname === "/events/register/" ||
                  window.location.pathname === "/app/events/register/")
                  ? `/events`
                  : `/${auth ? portalRoot : ""}/events/register`
              }
              color="secondary"
              variant="outlined"
              size="large"
              sx={{ mr: 2 }}
            >
              {window.location.pathname === "/events/register/" ||
              window.location.pathname === "/app/events/register/"
                ? `Events`
                : "Register"}
            </Button>
          </Box>
        )}

        {isBrowser() &&
        isLoggedIn() &&
        window.location.pathname.includes("/app") ? (
          <Avatar
            alt="Remy Sharp"
            sx={{
              display: { xs: "none", sm: "block" },
              border: "2px solid white",
              width: { sm: 128 },
              height: { sm: 128 },
              position: "absolute",
              right: 0,
              bottom: { sm: -64 },
              mx: { sm: 4, md: 6 },
            }}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          />
        ) : null}
      </Container>
    </Box>
  )
}
