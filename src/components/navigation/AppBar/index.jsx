import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
// import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/material"
import {
  // BottomNavigationAction,
  Button,
  // CardActionArea,
  // Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui"
import { navigate } from "gatsby"
import GolfCourseIcon from "@mui/icons-material/GolfCourse"
import { portalRoot } from "../../../config"
import { isLoggedIn, logout } from "../../../services/authentication"
import AppNavigation from "../authenticated"
import Logo from "../../logo"

const drawerWidth = 340
const navItem2 = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Fundraiser", link: "/fundraiser" },
  { name: "About", link: "/about" },
  { name: "Sponsors", link: "/sponsors" },
  { name: "Contact", link: "/contact" },
  { name: "Sandbox", link: "/sandbox" },
]

export default function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const authenticated = isLoggedIn()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const hc = (e) => {
    e.preventDefault()
    setMobileOpen(!mobileOpen)
    alert(e.target.href)
    setTimeout(() => {
      navigate(e.target.href)
    }, 0)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box variant="h6" sx={{ bgcolor: "primary.main", p: "1rem 0" }}>
        <Typography>
          <Logo fill="white" height="3rem" />
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItem2.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.link)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  // Attaching the drawer to the window.
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <AppBar component="nav" position="relative" sx={{ borderRadius: "0", pt: 2, pb: 2 }}>
        <Container>
          <Toolbar>
            <IconButton
              className="btn"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Logo fill="white" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItem2.map((item) => (
                <Button
                  className="btn"
                  key={item.name}
                  to={item.link}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}
              {!authenticated ? (
                <Button className="btn" to={"/signup"} color="inherit">
                  Signup
                </Button>
              ) : null}
              <Button
                to={`/${portalRoot}/login`}
                className="btn"
                color="inherit"
                onClick={(event) => {
                  event.preventDefault()
                  logout(() => navigate(`/${portalRoot}/login`))
                }}
              >
                {authenticated ? "Logout" : "Login"}
              </Button>
              <AppNavigation />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}
