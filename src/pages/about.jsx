/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { useEffect } from "react"
// import Layout from "../../components/layout"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Typography } from "@mui/material"

// TODO - replace static query with page query.

const AboutPage = (props) => {
  // Get data from page context or CMS.
  //   const data = useStaticQuery(graphql`
  //     query name {

  //     }
  //   `)

  const renderLink = () => {
    console.log("Log [Events Page] | creating links.")
  }

  renderLink()

  useEffect(() => {
    console.log("Log [Events Page] | props", props)
  }, [props])

  return (
    <Layout heading="Events" images={[]}>
      <Typography component="h1" variant="h3">
        About
      </Typography>

      <Typography component="h3" variant="h5">
        This is the about page.
      </Typography>
      <hr />
      <p>About us.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <SEO title="About | The Paradise Junior Golf Tour" />

// const AboutPage = (props) => {
//   //  const { data, setData } = useState({}); // dyamically fetch any event data not listed.
//   // const data = useStaticQuery(graphql`
//   //   query allEvents {
//   //     allStrapiEvent {
//   //       edges {
//   //         node {
//   //           id
//   //           Name
//   //           Fee
//   //           strapi_id
//   //           Registration
//   //           Description {
//   //             data {
//   //               Description
//   //             }
//   //           }
//   //           image {
//   //             url
//   //           }
//   //           Slug
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)

//   // useEffect(() => {
//   //   console.log("Log [Events Page] data", data.allStrapiEvent.edges)
//   //   console.log("Log [Events Page] Props", props)
//   // }, [data, props])

//   return <Layout heading="Events">hello world</Layout>
// }

// export default AboutPage
