import React, { useEffect, useState } from "react"
import { isBrowser } from "../../util"
import { Container, Typography, Box, Modal, Button } from "@mui/material"

const Banner = () => {
  const [showBanner, setShowBanner] = useState()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const dismissBanner = () => {
    if (isBrowser()) {
      setShowBanner(false)
      localStorage.setItem("showBanner", false)
    }
  }

  useEffect(() => {
    if (isBrowser()) {
      setShowBanner(localStorage.getItem("showBanner"))
    }
  }, [])

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  if (!showBanner) return null

  return (
    <>
      <Box sx={{ backgroundColor: "warning.main", borderRadius: "0" }}>
        <Container sx={{ color: "warning.contrastText" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <strong>
              Announcements! Welcome to The 2022 Paradise Junior Golf Tour.
            </strong>
            <span>
              <Button
                sx={{ color: "warning.contrastText" }}
                onClick={toggleOpen}
              >
                View More
              </Button>
              <Button
                sx={{ color: "warning.contrastText" }}
                onClick={dismissBanner}
              >
                Dismiss
              </Button>
            </span>
          </div>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Announcements
          </Typography>
          <ul>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                THE 2022 SUMMER TOURNAMENT SCHEDULE IS NOW LIVE!!!
              </Typography>
            </li>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                REGISTRATION IS NOW OPEN!
              </Typography>
            </li>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                WE HAVE A FUN SCHEDULE FOR YOU THIS YEAR.
              </Typography>
            </li>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                REGISTER NOW! DO NOT MISS OUT ON ALL THE FUN!
              </Typography>
            </li>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                STAY SAFE AND HEALTHY, AND KEEP IT IN THE SHORT GRASS!
              </Typography>
            </li>
            <li>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                WE HAVE A FUN SCHEDULE FOR YOU THIS YEAR.
              </Typography>
            </li>
          </ul>
          <br />
          <div className="dev">List all non-expired announcements here.</div>
          <br />
          <div className="dev">
            Each can have an expiration date and urgency and can be tied to
            events.
          </div>
          <br />
          <div className="dev">
            Only show announcements up to the current date (not expired) on the
            main banner. Show most recent OR or the most urgent.{" "}
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Banner
