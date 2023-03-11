import { createTheme } from "@mui/material/styles"

console.log(`[theme.js] Initialize custom theme.`)

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#004e89",
      contrastText: "#fff",
      background: "#2d3142",
    },
    secondary: {
      main: "#ff6b35",
      contrastText: "#fff",
    },
    info: {
      main: "#EBEBEB",
      contrastText: "#000",
    },
    success: {
      main: "#a5be00",
      contrastText: "#000",
    },
    warning: {
      main: "#fed766",
      contrastText: "#000",
    },
    error: {
      main: "#fe4a49",
      contrastText: "#fff",
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
