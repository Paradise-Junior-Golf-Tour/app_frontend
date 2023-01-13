// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { Typography } from "@mui/material"

const IndexPage = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Fundraiser Page] Props", data)

  if (dataClient) {
    console.log("Log [Fundraiser Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout heading="Fundraiser">
      <Typography variant="h3" component="h1">
        Fundraiser
      </Typography>
      <Typography variant="h5" component="h2">
        Let's fund some raises and raise some funds!
      </Typography>
      <hr />
      <p>
        This is the Fundraiser page.{" "}
        <a
          target="_blank"
          href="https://www.cgmarketingsystems.com/onlineshop/index.asp?id=14942&courseid=3452"
          rel="noreferrer"
        >
          Current here for reference.
        </a>
      </p>
      <p className="dev">
        <ul>
          <li>Select 4some or individual and/or hole sponsorship.</li>
          <li>Collect information on user and billing info.</li>
          <li>Checkout</li>
          <li></li>
          <li></li>
        </ul>
      </p>
      <ul>
        <li>
          <Link to="/fundraiser/register">Register</Link>
        </li>
        <li>
          <Link to="/fundraiser/donate">Donate</Link>
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
