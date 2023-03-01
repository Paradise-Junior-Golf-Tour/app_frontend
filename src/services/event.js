import axios from "axios"

// TODO - fix error messaging...
// Create a new Event and it's associated Tee Time record.
export const eventsNew = async ({
  name,
  description,
  fee,
  date,
  max_users,
  image,
}) => {
  let event = null

  await axios
    .post(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/new`, {
      data: {
        name,
        description,
        fee,
        date,
        max_users,
        image,
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
  const data = await axios.get(
    `${process.env.REACT_APP_STRAPI_API_URL}/api/events/all`
  )

  if (data.status === 200) {
    return data.data.data
  }

  return false // TODO - Decide on a general format for no results?
}

export const eventsOneById = async ({ identifier }) => {
  let event

  await axios
    .get(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/${identifier}`)
    .then((res) => {
      if (res.status === 200) {
        event = res.data
      }
    })
    .catch((err) => {
      console.error(`[Events Service] Create New Error`, (event = err.message))
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
      console.log(`[Events Service] Register: ${res.status}`)
      if (res.status === 200) {
        console.log(res.data)
        event = res.data
      }
    })
    .catch((err) => {
      console.error(
        `[Events Service] Register Error: ${events}`,
        (event = err.message)
      )
    })

  return event
}

export const eventDetails = async ({ id }) => {
  console.log("[Events Service] Find One", id)
  let event

  await axios
    .get(`${process.env.REACT_APP_STRAPI_API_URL}/api/events/details?id=${id}`)
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
