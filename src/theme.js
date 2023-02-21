import { deepOrange, lime, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Init custom theme overrides.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#293241",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3d5a80",
      contrastText: "#fff",
    },
    info: {
      main: "#8ecae6",
      contrastText: "#293241",
    },
    success: {
      main: "#98c1d9",
      contrastText: "#293241",
    },
    warning: {
      main: "#e0fbfc",
      contrastText: "#293241",
    },
    error: {
      main: "#ee6c4d",
      contrastText: "#293241",
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
