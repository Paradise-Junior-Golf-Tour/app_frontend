// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { linkActive } from "../../styles"

const FundraiserRegistration = (data) => {
  const [dataClient, setDataClient] = useState()
  console.log("Log [Fundraiser Reigstration Page] Props", data)

  if (dataClient) {
    console.log("Log [Fundraiser Reigstration Page] Props", dataClient)
  }

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  return (
    <Layout heading="Fundraiser Registration">
      <p>This is the Fundraiser Reigstration page.</p>
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

export default FundraiserRegistration

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
