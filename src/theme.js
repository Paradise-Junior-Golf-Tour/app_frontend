import { deepOrange, lime, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Init custom theme overrides.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d3b66",
      contrastText: "#fff ",
    },
    secondary: {
      main: "#f95738",
      contrastText: "#fff",
    },
    info: {
      main: "#323031",
    },
    success: {
      main: "#4281a4",
    },
    warning: {
      main: "#f4d35e",
      contrastText: "#0d3b66",
    },
    error: {
      main: "#db3a34",
    },
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        spacing: 3,
        // all grids under this theme will apply
        // negative margin on the top and left sides.
        disableEqualOverflow: false,
      },
    },
  },
})

export default theme
