// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@mui/material"

const DonatePage = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Donate Page] Props", data)

  if (dataClient) {
    console.log("Log [Donate Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout heading="Donate">
      <Typography variant="h3" component="h1">
        Donations
      </Typography>
      <Typography variant="h5" component="h2">
        Donations are always accepted here!
      </Typography>
      <hr />
      <p>This is the Donations page.</p>
      {/* <h1>{title}</h1>
               <p>{description}</p> */}
    </Layout>
  )
}

export default DonatePage

export const Head = () => (
  <SEO title={"Donate | The Paradise Junior Golf Tour"} />
)

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
