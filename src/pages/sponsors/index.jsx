// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import { Typography, Box } from "@mui/material"

const IndexPage = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Sponsors Page] Props", data)

  if (dataClient) {
    console.log("Log [Sponsors Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout
      heading="Sponsors"
      subHeading="Supporting The Paradise Junior Golf Tour"
    >
      <Box component="section">{/* map here */}</Box>
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
