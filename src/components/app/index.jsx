import React, { useEffect, useState } from "react"
import { Router, Redirect } from "@reach/router"
import Authenticated from "../routing/route-authenticated"
import Login from "../app/login"
import UserProfile from "../app/user/profile"
import UserEvents from "../app/user/events"
import AdminResources from "../app/admin/resources"
import AdminEvents from "../app/admin/events"
import AdminUsers from "../app/admin/users"
import UserRegistration from "../app/user/events/register"
import UserIndex from "../app/user"
import { getUser } from "../../services/authentication"
import FourOhFour from "../app/404"
import AdminIndex from "../app/admin"
import AdminEventsNew from "../app/admin/events/new"
import AdminTransactions from "../app/admin/transactions/event"
import AdminEventsUpdate from "../app/admin/events/event"
import SignupFamily from "../app/user/signup-family"

const Application = () => {
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

export default Application
