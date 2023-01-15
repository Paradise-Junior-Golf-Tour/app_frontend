import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../services/authentication"
import { portalRoot } from "../../config"
import { setHeaders } from "../../services/authentication"
import { isBrowser } from '../../util'

const AuthenticatedRoute = ({ component: Component, location, ...rest }) => {
  console.log("Log [AuthenticatedRoute] location", { location, rest })

  // Get original URL...
  // const url = typeof window !== "undefined" ? location?.pathname : ''
  

  // Get forwarded location state...
  // const fwdState = typeof window !== "undefined" ? location?.state : ''

  setHeaders() // update header on each aauth route (possibly move to the gatsby-browser and gatsby-ssr wrappers?).

  // console.log(`Log [AuthenticatedRoute] navigate to ${url} with state:`, {
  //   state: location.state,
  //   url,
  // })

  if (isBrowser() && !isLoggedIn()) {
    navigate(`/${portalRoot}/login`, { state: { } })
    return null
  }
  

  // if (!isLoggedIn() && location.pathname !== `/${portalRoot}/login`) {
  //   navigate(`/${portalRoot}/login`, { state: { fwdState, url } })
  //   return null
  // }

  return <Component {...rest} location={location} />
}

export default AuthenticatedRoute
