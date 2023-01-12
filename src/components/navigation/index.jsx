import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import DrawerAppBar from "./AppBar"

// TODO - replace with the AppBar (or make a cutom implementation).
export default function Navigation({ children, heading }) {
  // const isAuthorized = isLoggedIn()
  // const user = getUser()
  const data = useStaticQuery(
    graphql`
      query MetadataQuery {
        events: allStrapiEvent {
          nodes {
            name
            slug
          }
        }
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  useEffect(() => {
    console.log("[Navigation] props (not passed - refactor neededF):", {
      data,
      children,
      heading,
    })
  }, [data, children, heading])

  // TODO - make this dynamic!
  return <DrawerAppBar />
}
