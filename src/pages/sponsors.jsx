// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Typography } from "@mui/material"

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
    <Layout heading="Sponsors">
      <Typography variant="h3" component="h1">
        Sponsors
      </Typography>
      <Typography variant="h5" component="h2">
        Sponsors are always accepted great!
      </Typography>
      <hr />
      <p>This is the Sponsors page.</p>
      <p>
        Our thanks to Paradise Golf for jumping in and assisting us with gowing
        the tour. <br />
        <br /> The Paradise Golf team consisting of PGA Golf Professionals Gregg
        Gagliardi and Jerry Couzynse are committing their time and energy into
        the junior tour this year.
        <br />
        <br />
        For more information about the Paradise Golf Summer 2019 Junior
        Membership program,{" "}
        <a href="http://www.paradise-golf.com/-2016-summer-junior-member-benefits">
          CLICK HERE
        </a>
        . The cost is only $29+tax
      </p>
      <p>
        For 2019, junior Paradise summer members get a ton of other benefits
        including a free lesson from Tampa Bay Downs Range professionals Jon
        Johnson, PGA and assistant Joey DiPompo.
      </p>
      <p className="dev">
        Ask about the link above and how it relates to the site.
      </p>
      <div>
        <img
          src={`${process.env.GATSBY_APP_STRAPI_API_URL}/uploads/index_0e2d123e0d.png`}
          alt=""
        />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
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
