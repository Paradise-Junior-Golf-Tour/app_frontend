import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import { navListItemStyle, linkActive } from "../../../../styles"
import {
  Typography,
  Snackbar,
  Alert,
  AlertTitle,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  Button,
  Paper,
} from "@mui/material"
import { eventsAll } from "../../../../services/event"
import { portalRoot } from "../../../../config"
import Layout from "../../../layout"

const AdminEvents = ({ location }) => {
  const [data, setData] = useState(null)
  const [toastOpen, setToastOpen] = useState(false)

  const closeToast = () => {
    setToastOpen(false)
    // window.history.replaceState({}, document.title)
    navigate(location.pathname, { replace: true })
  }

  const fetchData = () => {
    eventsAll()
      .then((events) => {
        setData(events)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log("[Events Page]", { data, location })
    // if (location?.state?.data?.event?.name) {
    //   setToastOpen(true)
    // }
  }, [data, location])

  // if (!data) return <div>Loading</div>

  return (
    <Layout heading="Manage Events">
      <Typography variant="h5" component="h2">
        Manage all upcoming and past Events or create a new Event.
      </Typography>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>ID</TableCell>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Reg. Open
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Reg. Fee
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Reg. Fee Total
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                User Count
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Date Start
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Date End
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  <Link to={`/${portalRoot}/events/` + row.id}>{row.name}</Link>
                </TableCell>

                <TableCell
                  align="left"
                  style={{ color: !row.registration_open ? "red" : "green" }}
                >
                  {row.registration_open ? "Open" : "Closed"}
                </TableCell>
                <TableCell align="left">
                  {row.fee ? "$" + row.fee : "- - - -"}
                </TableCell>
                <TableCell align="left">
                  {row.transactions.length > 0
                    ? "$" + (row.transactions.length - 1) * row.fee
                    : "- - - -"}
                </TableCell>
                <TableCell align="left">{row.users.length}</TableCell>
                <TableCell align="left">{row.date_start}</TableCell>
                <TableCell align="left">{row.date_end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <ul>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}`}>
            Admin Index
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/resources`}>
            Admin Resources
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events/new`}>
            Admin Events New
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default AdminEvents
