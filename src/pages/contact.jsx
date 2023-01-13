import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@mui/material"
import React from "react"

const ContactPage = (data) => {
  console.log("Log [Donate Page] Props", data)

  return (
    <Layout heading="Contact">
      <Typography variant="h3" component="h1">
        Contact
      </Typography>
      <Typography variant="h5" component="h2">
        Get in touch with us!
      </Typography>
      <hr />
      <p>This is the Contact page.</p>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <SEO title={"Contact | The Paradise Junior Golf Tour"} />
)
