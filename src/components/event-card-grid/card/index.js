import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Button } from "gatsby-theme-material-ui"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Chip } from "@mui/material"
import { getUser, isLoggedIn } from "../../../services/authentication"
import { portalRoot } from "../../../config"
import { navigate } from "gatsby"
import { cardNoImageStyle } from "./style"

export default function EventCard({ event }) {
  const user = getUser()
  const authenticated = isLoggedIn()

  return (
    <Card>
      {event?.image ? (
        <CardMedia
          component="img"
          height="140"
          image={
            process.env.NODE_ENV === "production" // make this a util function?
              ? event?.image?.formats?.medium?.url
              : process.env.REACT_APP_STRAPI_API_URL +
                event?.image?.formats?.medium?.url
          }
          alt=""
        />
      ) : (
        <Box sx={cardNoImageStyle}>
          <span className="dev">Image not available. Default needed.</span>
        </Box>
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h3"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {event?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event?.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fee and User Count
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 2 }}>
        <Chip
          label="Details"
          color="primary"
          component="a"
          href={`/events/${event.slug}`}
          onClick={(e) => {
            e.preventDefault()
            navigate(`/events/${event.slug}`)
          }}
          variant="contained"
          clickable
        />
        <Chip
          label={true ? "Register" : "Results"}
          color="primary"
          component="a"
          href={
            user?.data?.admin
              ? `/${portalRoot}/events/${event?.strapi_id}`
              : `/${portalRoot}/events/register`
          }
          onClick={(e) => {
            console.log("[Events Page]", {
              user,
              event,
            })
            e.preventDefault()
            console.log('check nav', {event: event?.name, auth: authenticated, })
            navigate(
              `${authenticated ? `/${portalRoot}` : ""}/events/${
                user?.data?.admin ? event?.strapi_id : "register"
              }`,
              {
                state: {
                  event: {
                    id: event?.strapi_id,
                    name: event?.name,
                    slug: event?.slug,
                  },
                },
              }
            )
          }}
          variant="outlined"
          clickable
        />
        <Chip
          label={"Image Gallery"}
          color="primary"
          component="a"
          href={`/events/${event.slug}/gallery`}
          onClick={(e) => {
            e.preventDefault()
            navigate(`/events/${event.slug}/gallery`)
          }}
          variant="outlined"
          clickable
        />
      </CardActions>
    </Card>
  )
}
