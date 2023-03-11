import React from "react"
import { Link } from "gatsby"
import { navListItemStyle, linkActive } from "../../../../styles"
import { Typography } from "@mui/material"
import { portalRoot } from "../../../../config"
import Layout from "../../../layout"

const Resources = () => {
  return (
    <Layout heading="Admin Resources">
      <Typography variant="h5" component="h2">
        Developer resources to help you along!
      </Typography>
      <hr />
      <ul>
        <li>
          <strong>Admin Email</strong>: paradise.junior.golf.tour@gmail.com
        </li>
        <li>
          <strong>Admin Email Password</strong>: Happymarmot87*
        </li>
        <li>
          <br />
          <strong>Hosting Login</strong>: paradise.junior.golf.tour@gmail.com
        </li>
        <li>
          <strong>Hosting Password</strong>: Happymarmot87*
        </li>
        <br />
        <li>
          <strong>Server Login</strong>: paradise.junior.golf.tour@gmail.com
        </li>
        <li>
          <strong>Server Password</strong>: Happymarmot87*
        </li>
      </ul>
      <p>These are some handy links.</p>

      <ul>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}`}>
            Admin Index
          </Link>
        </li>
        <li style={navListItemStyle}>
          <Link activeStyle={linkActive} to={`/${portalRoot}/events`}>
            Admin Events
          </Link>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Link href="https://strapi.io/blog/strapi-starter-gatsby-blog-v2">
            Starter
          </Link>
        </li>

        <li>
          <Link href="https://github.com/gatsbyjs/gatsby/issues/14395">
            Force graphQL Refresh
          </Link>
        </li>

        <li>
          <Link href="https://stackoverflow.com/questions/72397360/gatsby-cant-seem-to-query-my-strapi-backend/72777164#72777164">
            Gatsby Config SO
          </Link>
        </li>

        <li>
          <Link href="https://github.com/strapi/starters-and-templates/blob/main/packages/starters/gatsby-blog/starter/gatsby-config.js">
            Gatsby Config Raw
          </Link>
        </li>

        <li>
          <Link href="http://localhost:8000/___graphql">GarphiQL</Link>
        </li>

        <li>
          <Link href="https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/">
            GarphiQL Docs
          </Link>
        </li>

        <li>
          <Link href="https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html">
            Strapi Entity Service Docs
          </Link>
        </li>

        <li>
          <Link href="https://strapi.io/blog/how-to-build-a-to-do-app-using-next-js-and-strapi">
            Tutorial
          </Link>
        </li>

        <li>
          <Link href="https://medium.com/geekculture/http-response-codes-for-crud-eabdda3ed617">
            HTTP Response Codes
          </Link>
        </li>

        <li>
          <Link
            href="https://www.gatsbyjs.com/docs/reference/gatsby-cli/"
            target="_blank"
            rel="noreferrer"
          >
            Gatsby CLI
          </Link>
        </li>
        <li>
          <Link
            href={process.env.GATSBY_APP_STRAPI_API_URL + "/admin"}
            target="_blank"
            rel="noreferrer"
          >
            Admin Panel*
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default Resources
