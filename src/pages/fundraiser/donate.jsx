// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import { linkActive } from "../../styles"

const FundraiserDonations = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Fundraiser Donations Page] Props", data)

  if (dataClient) {
    console.log("Log [Fundraiser Donations Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout heading="Fundraiser Donations">
      <p>This is the Fundraiser Donations page.</p>
      <ul>
        <li>
          <Link activeStyle={linkActive} to="/fundraiser/register">
            Fundraiser | Register
          </Link>
        </li>
        <li>
          <Link activeStyle={linkActive} to="/fundraiser/donate">
            Fundraiser | Donate
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default FundraiserDonations

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
