import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn, getUser } from "../../services/authentication"
import { portalRoot } from "../../config"

export default function LinkEvent({ event, ...props }) {
  const user = getUser()
  const authenticated = isLoggedIn()
  const { strapi_id, Name, Slug } = event?.node

  const link = () => {
    if (authenticated && user?.data?.admin) {
      return `/${portalRoot}/events/${Slug}`
    }

    if (authenticated) return `/${portalRoot}/events/register/${Slug}`

    return `/events/register`
  }
  // Get user events and filter
  const handleClick = (e) => {
    e.preventDefault()
    console.log("[EventLink]", { props, event, user, authenticated })

    const nav = {
      id: strapi_id,
      name: Name,
      slug: Slug,
    }

    if (authenticated) {
      if (user.data.admin) {
        console.log("[EventLink]", "admin")
        navigate(`/${portalRoot}/events/${nav.slug}`, {
          state: {
            event: nav,
          },
        })
      } else {
        console.log("[EventLink]", "user")
        navigate(`/${portalRoot}/events/register`, {
          state: {
            event: nav,
          },
        })
      }
      return
    }

    navigate(`/events/register`, {
      state: {
        event: nav,
      },
    })
  }

  return (
    <a href={link()} onClick={handleClick}>
      {authenticated && user?.data?.admin ? "Manage" : "Register"}
    </a>
  )
}
