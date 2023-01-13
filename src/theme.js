import { deepOrange, lime, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Init custom theme overrides.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#084c61",
      contrastText: "#fff",
    },
    secondary: {
      main: "#177e89",
      contrastText: "#011627",
    },
    info: {
      main: "#323031",
    },
    success: {
      main: "#4281a4",
    },
    warning: {
      main: "#ffc857",
    },
    error: {
      main: "#db3a34",
    },
  },
})

export default theme
