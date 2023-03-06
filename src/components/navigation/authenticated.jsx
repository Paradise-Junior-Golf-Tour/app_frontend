import { routesAdmin, routesUser } from "./routes"
import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { linkActive, navListItemStyle } from "../../styles"
import { Popover, IconButton, Tooltip, Box } from "@mui/material"
import { getUser, isLoggedIn } from "../../services/authentication"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { portalRoot } from "../../config"

// TODO - figure out how to implement with the AppBar
const AppNavigation = ({ location }) => {
  const user = getUser()
  const authenticated = isLoggedIn()
  const routes = user?.data?.admin ? routesAdmin : routesUser
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const idButton = "app-navigation-toggle"

  const open = Boolean(anchorEl)
  const id = open ? "app-navigation" : undefined

  const contentAuthenticated = routes.map((x) => (
      <li onClick={handleClose} key={x.route}>
        <Link activeStyle={linkActive} to={`/${portalRoot}/` + x.route}>
          {user?.data?.admin ? "Admin" : "User"} {x.name}
        </Link>
      </li>
  ))

  const renderToolTip = () => {
    if (!authenticated) {
      return "Login Required"
    } else {
      return user?.data?.admin ? "Admin Menu" : "User Menu"
    }
  }

  return (
    <>
      <Tooltip title={renderToolTip()}>
        <IconButton
          aria-describedby={id}
          id={idButton}
          onClick={handleClick}
          sx={{
            color: "primary.contrastText",
            opacity: !authenticated ? 0.5 : 1,
            cursor: authenticated ? "pointer" : "not-allowed",
          }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      {authenticated ? (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box style={{ padding: "1rem" }}>
            <ul>{contentAuthenticated}</ul>
          </Box>
        </Popover>
      ) : null}
    </>
  )
}

export default AppNavigation
