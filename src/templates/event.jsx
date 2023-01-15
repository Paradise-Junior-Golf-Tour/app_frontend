/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Typography, Chip } from "@mui/material"
import Layout from "../components/layout"
import "react-loading-skeleton/dist/skeleton.css"
import SEO from "../components/seo"
// import { eventsOneById } from "../services/event"
import { usersByEvent } from "../services/user"
// Other imports here as needed
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

// <Skeleton /> // Simple, single-line loading skeleton

// Create the component
const Event = ({ pageContext, location }) => {
  // PageContext provides - static Event data needed for SEO (Name, Fee, Dates, Description, Location, etc.).
  // Fetch data for Event Users, Tee Times, Results dynamically as they will change more often.
  const [users, setUsers] = useState([])
  // const [data, setData] = useState(null)

  // TODO - decide on one large query or several smaller specific ones.  Leaning large.
  // useEffect(async () => {
  //   eventsOneById({ identifier: pageContext.strapiId }).then((data) => {
  //     console.log("Log [Event - Single] - API data", data)
  //     setTimeout(() => {
  //       setData(data)
  //     }, 0)
  //   })
  // }, [pageContext])

  useEffect(() => {
    usersByEvent({ id: pageContext.strapiId }).then((data) => {
      setUsers(data.data)
    })
  }, [pageContext])

  const imageStyle = {
    height: "30vw ",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "grey",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    border: `${!pageContext.image ? "1px dashed grey" : "none"}`,
    opacity: `${!pageContext.image ? 0.25 : 1}`,
    backgroundImage: `url(${process.env.REACT_APP_STRAPI_API_URL + pageContext.image})`,
    overflow: "hidden",
    textAlign: "center",
  }

  return (
    <Layout heading={pageContext.name}>
      {true ? (
        <article>
          <Typography component="h1" variant="h3">
            {pageContext.name}{" "}
            {pageContext.registration ? (
              <Chip
                size="large"
                variant="outlined"
                href="/events/register"
                component="a"
                label="Register"
                onClick={(event) => {
                  event.preventDefault()
                  if (typeof window !== "undefined") {
                    navigate("/events/register", {
                      state: {
                        event: {
                          id: pageContext.strapi_id,
                          name: pageContext.name,
                          slug: pageContext.slug,
                        },
                      },
                    })
                  }
                }}
              />
            ) : null}
          </Typography>

          <Typography component="h3" variant="h5">
            Date, Time, Location, General Info
          </Typography>
          <hr />
          <br />
          <div style={imageStyle}>
            {!pageContext.image ? (
              <div>
                <Typography variant="h3">{pageContext.name}</Typography>
                <p>
                  Replace this with a logo or default image or even remove it.
                </p>
              </div>
            ) : null}
          </div>
          <br />
          <div className="dev">To be replaced with the fullwidth HeaderV2.</div>
          <br />
          <hr />
          <p>{pageContext.description}</p>
          <div className="dev">
            This can all be handled by one query. Admin would possibly benefit
            from multiple queries for updates but tbd.
          </div>
          {/* <br /> */}
          <p>Fee: $ {pageContext.fee}</p>
          <h3>Registered Users</h3>
          <ul>
            {users
              ? users.map((user) => {
                  return <li>{user.username}</li>
                })
              : null}
          </ul>

          <ul></ul>
          <h3>Tee Times</h3>
        </article>
      ) : (
        <Skeleton count={5} />
      )}
    </Layout>
  )
}

// Export the component
export default Event

export const Head = () => (
  <SEO title={"Events | The Paradise Junior Golf Tour"} />
)

// Page Query for Event Static Data
