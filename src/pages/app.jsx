import React, { useEffect, useState } from "react"
import { Router, Redirect } from "@reach/router"
import Layout from "../components/layout"
import Authenticated from "../components/routing/route-authenticated"
import Login from "../components/app/login"
import UserProfile from "../components/app/user/profile"
import UserEvents from "../components/app/user/events"
import AdminResources from "../components/app/admin/resources"
import AdminEvents from "../components/app/admin/events"
import AdminUsers from "../components/app/admin/users"
import UserRegistration from "../components/app/user/register"
import UserIndex from "../components/app/user"
import { getUser } from "../services/authentication"
import FourOhFour from "../components/app/404"
import SEO from "../components/seo"
import AdminIndex from "../components/app/admin"
import AdminEventsNew from "../components/app/admin/events/new"
import AdminTransactions from "../components/app/admin/transactions/event"
import AdminEventsUpdate from "../components/app/admin/events/event"
import { useLocation } from "@reach/router"
import services from "../services"
import SignupFamily from "../components/app/user/signup-family"

const App = () => {
  const user = getUser()
  const [heading, setHeading] = useState("")
  // const location = useLocation()

  // useEffect(() => {
  //   const path = location.pathname.split("/")

  //   if (location.pathname === "/portal/" || location.pathname === "/portal") {
  //     setHeading("Home")
  //     return
  //   } else {
  //     setHeading(
  //       path[path.length - 1][0].toUpperCase() + path[path.length - 1].slice(1)
  //     )
  //   }

  //   // Cleanup function needed?
  // }, [location])

  useEffect(() => {
    console.log("[App]", {
      env: process.env,
      user,
      appHeading: heading,
    })
  })

  return (
    <Router basepath="/app">
      {user?.data?.admin ? (
        <>
          <Authenticated path={`/users`} component={AdminUsers} />
          <Authenticated path={`/transactions`} component={AdminTransactions} />
          <Authenticated path={`/`} component={AdminIndex} />
          <Authenticated path={`/events`} component={AdminEvents} />
          <Authenticated path={`/resources`} component={AdminResources} />
          <Authenticated path={`/events/new`} component={AdminEventsNew} />
          <Authenticated path={`/events/:id`} component={AdminEventsUpdate} />
        </>
      ) : (
        <>
          <Authenticated path={`/`} component={UserIndex} />
          <Authenticated path={`/family`} component={SignupFamily} />
          <Authenticated path={`/profile`} component={UserProfile} />
          <Authenticated path={`/events`} component={UserEvents} />
          <Authenticated
            path={`/events/register`}
            component={UserRegistration}
          />
        </>
      )}
      <Login path={`/login`} />
      <Authenticated default component={FourOhFour} />
    </Router>
  )
}

export default App

export const Head = () => <SEO title={`App | The Paradise Junior Golf Tour`} />
