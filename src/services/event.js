import axios from "axios"
import { getUser } from "./authentication"

// TODO - fix error messaging...
// Create a new Event and it's associated Tee Time record.
export const eventsNew = async ({
  name,
  description,
  fee,
  date,
  max_users,
}) => {
  const user = getUser()
  let event = null

  console.log(
    `[Events Service] Create New: ${
      name || "No name provided - validation needed..."
    }`,
    { name, description, fee, date, max_users }
  )

  await axios
    .post(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/new`, {
      data: {
        name,
        description,
        fee,
        date,
        max_users,
      },
    })
    .then((res) => {
      console.log(`[Events Service] Create New Success: ${res.status}`)
      event = res.data
    })
    .catch((err) => {
      console.log(
        `[Events Service] Create New Error: ${name}`,
        (event = err.message)
      )
    })

  return event
}

export const eventsAll = async () => {
  console.log("[Events Service] Get All")
  const data = await axios.get(
    `${process.env.REACT_APP_STRAPI_API_URL}/api/events/all`
  )

  if (data.status === 200) {
    console.log("[Events Service] Get All OK", data.status)
    return data.data.data
  }

  return false // TODO - Decide on a general format for no results?
}

export const eventsOneById = async ({ identifier }) => {
  console.log("[Events Service] Find One", identifier)
  let event

  await axios
    .get(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/${identifier}`)
    .then((res) => {
      console.log(`[Events Service] Found One: ${res}`)
      if (res.status === 200) {
        console.log("[services - event]", res.data)
        event = res.data
      }
    })
    .catch((err) => {
      console.log(`[Events Service] Create New Error`, (event = err.message))
    })

  return event
}

export const eventsUpdate = () => {
  console.log("[Events Service] Update")
}

export const register = async ({ events, type }) => {
  let event = null

  console.log(`[Events Service] args:`, { events, type })
  await axios
    .post(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/register`, {
      method: "POST",
      // body: {
      events: events,
      type: type,
      // },
    })
    .then((res) => {
      console.log(`[Events Service] Create New Success: ${res.status}`)
      if (res.status === 200) {
        console.log(res.data)
        event = res.data
      }
    })
    .catch((err) => {
      console.log(
        `[Events Service] Create New Error: ${events}`,
        (event = err.message)
      )
    })

  return event
}
