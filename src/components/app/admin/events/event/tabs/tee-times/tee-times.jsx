import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import Box from "@mui/material/Box"

const TeeTimes = ({ data }) => {

  const [golfer1, setGolfer1] = React.useState("")
  const [golfer2, setGolfer2] = React.useState("")
  const [golfer3, setGolfer3] = React.useState("")
  const [golfer4, setGolfer4] = React.useState("")

  const [available, setAvailale] = React.useState([])
  const [selected, setSelected] = React.useState([])

  React.useEffect(() => {
    setAvailale(data.users)
  }, [])

  React.useEffect(() => {
    console.log(selected)
    // setAvailale(available.filter((x) => selected[x]))
  })

  // Placeholder to manage the selected users.
  const updateSelected = () => {}

  const handleChange = (event) => {
    console.log({ n: event.target.name, v: event.target.value })

    const value = event.target.value
    const expr = event.target.name

    switch (expr) {
      case "golfer1":
        setGolfer1(value)
        setSelected(selected.push(value))
        break
      case "golfer2":
        setGolfer2(value)
        setSelected(selected.push(value))
        break
      case "golfer3":
        setGolfer3(value)
        setSelected(selected.push(value))
        break
      case "golfer4":
        setGolfer4(value)
        setSelected(selected.push(value))
        break
      default:
        console.log(`Sorry, we are out of ${expr}.`)
    }
  }
  console.log("TT", data)

  return (
    <section>
      <Typography variant="h4" component="h2">
        Tee Times
      </Typography>
      <br />
      <Typography variant="body1" component="p">
        {available.length || 0} users have registered for this event. You will
        be able to create tee times once users have signed up.
      </Typography>
      <br />

      <Box>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Golfer 1</InputLabel>
          <Select
            name="golfer1"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golfer1}
            label="Golfer"
            onChange={handleChange}
          >
            {available.map((x) => {
              return (
                <MenuItem value={x.id}>
                  {x.name_first + " " + x.name_last}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Golfer 2</InputLabel>
          <Select
            name="golfer2"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golfer2}
            label="Golfer"
            onChange={handleChange}
          >
            {available.map((x) => {
              return (
                <MenuItem value={x.id}>
                  {x.name_first + " " + x.name_last}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Golfer 3</InputLabel>
          <Select
            name="golfer3"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golfer3}
            label="Golfer"
            onChange={handleChange}
          >
            {available.map((x) => {
              return (
                <MenuItem value={x.id}>
                  {x.name_first + " " + x.name_last}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Golfer 4</InputLabel>
          <Select
            name="golfer4"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={golfer4}
            label="Golfer"
            onChange={handleChange}
          >
            {available.map((x) => {
              return (
                <MenuItem value={x.id}>
                  {x.name_first + " " + x.name_last}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <br />
        <Button
          variant="primary"
          color="primary.main"
          onClick={() => alert("Tee Time")}
        >
          Add Tee Time
        </Button>
      </Box>
    </section>
  )
}

export default TeeTimes
