// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import { Typography } from "@mui/material"

const IndexPage = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Tee Times Page] Props", data)

  const linkActive = {
    color: "white",
  }

  if (dataClient) {
    console.log("Log [Tee Times Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout heading="Tee Times">
      <Typography variant="h3" component="h1">
        Tour Events Tee times
      </Typography>
      <Typography variant="h5" component="h2">
        Post all upcoming tee times here by newest (exclude days prior).
      </Typography>
      <hr />
      <p>This is the Tee Times page.</p>
      {/* <h1>{title}</h1>
               <p>{description}</p> */}
      <ul>
        <li>
          <Link activeStyle={linkActive} to="/events">
            Events Main
          </Link>
        </li>
        <li>
          <Link activeStyle={linkActive} to="/events/register">
            Events Register
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage

// export default function Home({ data }) {
//   const { title, description } = data.site.siteMetadata

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query MetadataQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
