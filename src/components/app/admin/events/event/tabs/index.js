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
} from "@mui/material"
import Box from "@mui/material/Box"
import Details from "./event-details"
import TeeTimes from "./tee-times/tee-times"

function TabPanel(props) {
  const { children, value, index, data, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ paddingTop: 0, marginTop: 0 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs({ data }) {
  const [value, setValue] = React.useState(0)
  const [isDisabled, setIsDisabled] = React.useState(true)

  const handleChange = (event, newValue) => {
    event.preventDefault()

    setValue(newValue)
  }

  if (!data) return "no data"

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        paddingTop: 0,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Details" {...a11yProps(0)} />
        <Tab label="Golfers" {...a11yProps(1)} />
        <Tab label="Tee Times" {...a11yProps(2)} />
        <Tab label="Results" {...a11yProps(3)} />
        <Tab label="Images" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Details data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section>
          <Typography variant="h4" component="h2">
            Registered Users
          </Typography>
          <hr />
          {data?.users?.map((x) => {
            return (
              <div>
                {x.name_first || x.name_last
                  ? x.name_first + " " + x.name_last
                  : null}{" "}
                - <strong>{x.email}</strong>
              </div>
            )
          })}
        </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TeeTimes data={data} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <section>
          <Typography variant="h4" component="h2">
            Results
          </Typography>
          <hr />
          <p>Not available just yet.</p>
          <p className="dev">
            This can be made into a resuable component shared in both
            authenticated and public routes.
          </p>
        </section>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Images
      </TabPanel>
    </Box>
  )
}
