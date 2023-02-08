import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@mui/material"
import React from "react"
import { routes } from "../config"
import { useEffect } from "react"
import axios from "axios"


const SandboxPage = (data) => {
  console.log("Log [Sandbox Page] Props", data)
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/upload/files")
      .then((files) => console.log("FILES", files))
      .catch((err) => console.log("ERR", err))
  }, [])
 
  return (
    <Layout heading="Contact">
      <Typography variant="h3" component="h1">
        Sandbox
      </Typography>
      <Typography variant="h5" component="h2">
        Make and break stuff here.
      </Typography>
      <hr />
      <p>This is the Sandbox page.</p>
      <hr />
      <br />
      <Typography variant="h5" component="h2">
        Public Routes
      </Typography>
      {routes?.public?.map((route) => {
        return <div>{route?.label}</div>
      })}
    </Layout>
  )
}

export default SandboxPage

export const Head = () => (
  <SEO title={"Sandbox | The Paradise Junior Golf Tour"} />
)
