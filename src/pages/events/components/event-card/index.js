import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Button } from "gatsby-theme-material-ui"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import { getUser, isLoggedIn } from "../../../../services/authentication"
import { portalRoot } from "./../../../../config"
import { navigate } from "gatsby"
import { style } from "./style"

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
          <Box sx={style}>
            <span className="dev">Image not available. Default needed.</span>
        </Box>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event?.name || "Event Name"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dates
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fee and User Count
        </Typography>
      </CardContent>
      <CardActions>
        <Button to={"/events/" + event?.slug} size="small">
          Details
        </Button>
        <Button
          size="small"
          to={
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
        >
          {true? "Register" : "Results"}
        </Button>
        <Button size="small" to={"/events/" + event?.slug + "/gallery"}>
          Pictures
        </Button>
      </CardActions>
    </Card>
  )
}

// const r = () => (
//   <div
//     size="large"
//     variant="contained"
//     color="secondary"
//     href={
//       user?.data?.admin
//         ? `/${portalRoot}/events/${e.node.slug}`
//         : `/${portalRoot}/events/register`
//     }
//     component="a"
//     label={user?.data?.admin ? "Manage" : "Register"}
//     onClick={(event) => {
//       console.log("Events Page Public", {
//         user,
//         authenticated,
//         event,
//       })
//       event.preventDefault()
//       navigate(
//         `${authenticated ? `/${portalRoot}` : ""}/events/${user?.data?.admin ? "" + e.node.slug : "register"
//         }`,
//         {
//           state: {
//             event: {
//               id: e.node.strapi_id,
//               name: e.node.Name,
//               slug: e.node.slug,
//             },
//           },
//         }
//       )
//     }}
//   />
// )
