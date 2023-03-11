// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Typography, Box } from "@mui/material"

const DonatePage = () => {
  return (
    <Layout heading="Donate">
      <Box component="section">
        <Typography variant="h2" component="h2">
          Make your donation today.
        </Typography>
        <Typography variant="h4" component="h3">
          Your contributions help us give juniors the opportunity to play and
          compete without burdening them with exorbitant entry fees.
        </Typography>
      </Box>
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
