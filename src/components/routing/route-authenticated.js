import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../services/authentication"
import { portalRoot } from "../../config"
import { setHeaders } from "../../services/authentication"
import { isBrowser } from '../../util'

const AuthenticatedRoute = ({ component: Component, location, ...rest }) => {
  console.log("Log [AuthenticatedRoute] location", { location, rest })

  setHeaders() // update header on each aauth route (possibly move to the gatsby-browser and gatsby-ssr wrappers?).

  if (isBrowser() && !isLoggedIn()) {
    navigate(`/${portalRoot}/login`, { state: { } })
    return null
  }
  
  return <Component {...rest} location={location} />
}

export default AuthenticatedRoute
