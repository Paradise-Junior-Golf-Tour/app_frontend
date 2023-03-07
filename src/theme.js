import { deepOrange, lime, indigo } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Init custom theme overrides.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#001219",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2a9d8f",
      contrastText: "#fff",
    },
    info: {
      main: "#e9d8a6",
      contrastText: "#000",
    },
    success: {
      main: "#98c1d9",
      contrastText: "#293241",
    },
    warning: {
      main: "#ee9b00",
      contrastText: "#000",
    },
    error: {
      main: "#bb3e03",
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
