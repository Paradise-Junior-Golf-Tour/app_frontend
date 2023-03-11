/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Typography, Chip } from "@mui/material"
import Layout from "../components/layout"
import "react-loading-skeleton/dist/skeleton.css"
import SEO from "../components/seo"

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

  useEffect(() => {
    console.log(`[Events Template]`, pageContext)
    usersByEvent({ id: pageContext.strapiId }).then((data) => {
      setUsers(data.data)
    })
  }, [pageContext])

  return (
    <Layout
      heading={pageContext.name}
      images={[
        process.env.NODE_ENV !== "production"
          ? process.env.GATSBY_REACT_APP_STRAPI_API_URL +
            pageContext.image.large
          : pageContext.image.large,
      ]}
    >
      {true ? (
        <article>
          <Typography component="h1" variant="h3">
            {pageContext.date}{" "}
          </Typography>

          <Typography component="h3" variant="h5">
            Date, Time, Location, General Info
          </Typography>
          <hr />

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
