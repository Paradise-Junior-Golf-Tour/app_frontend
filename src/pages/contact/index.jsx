import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Typography, Box } from "@mui/material"
import React from "react"

const ContactPage = (data) => {
  console.log("Log [Donate Page] Props", data)

  return (
    <Layout heading="Contact" subHeading={" Get in touch with us!"}>
      <Box component="section"></Box>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <SEO title={"Contact | The Paradise Junior Golf Tour"} />
)
