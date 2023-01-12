// Users filtered by users.
import axios from "axios"

export const usersByEvent = async ({ id }) => {
  console.log("[User Service] All By Event")
  let users

  await axios
    .get(`http://localhost:1337/api/users/event?id=${id}`)
    .then((res) => {
      console.log(`[User Service] Found Users: ${res.status}`)
      if (res.status === 200) {
        console.log("[services - users]", res.data)
        users = res.data
        return
      }

      console.log()
    })
    .catch((err) => {
      console.log(`[User Service] Error`, (users = err.message))
    })

  return users
}

export const getUserEvents = async () => {
  console.log("[User Service] Events")
  let events

  await axios
    .get(`http://localhost:1337/api/users/events`)
    .then((res) => {
      console.log(`[User Service] Found Events: ${res.status}`, res)
      if (res.status === 200) {
        console.log("[User Service]", res.data)
        events = res.data
        return
      }
    })
    .catch((err) => {
      console.log(`[User Service] Error`, (events = err.message))
    })

  return events
}
