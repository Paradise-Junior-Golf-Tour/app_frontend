import { deepOrange, lime, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Init custom theme overrides.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#001219",
      contrastText: "#fff ",
    },
    secondary: {
      main: "#005f73",
      contrastText: "#fff",
    },
    info: {
      main: "#8ecae6",
    },
    success: {
      main: "#06d6a0",
    },
    warning: {
      main: "#ee9b00",
      contrastText: "black",
    },
    error: {
      main: "#ef476f",
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
