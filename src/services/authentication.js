import axios from "axios"
import { isBrowser } from "../util/index.js"

export const getUser = () => {
  let user = {}
  if (isBrowser()) {
    user =
      isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}
  }

  return user
}

export const setUser = (user) => {
  if (isBrowser()) {
    return window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
  }
}

export const handleLogin = async ({ username, password }) => {
  const user = await axios
    .post(`${process.env.REACT_APP_STRAPI_API_URL}/api/auth/local`, {
      identifier: username,
      password: password,
    })
    .then((response) => {
      const user = {
        jwt: response.data.jwt,
        data: response.data.user,
      }

      setUser(user)

      return user
    })
    .catch((error) => {
      console.log("Auth - An error occurred:", error.response)
      return false
    })
    .finally(() => {
      console.log("Auth - Finally")
    })

  return user
}

export const isLoggedIn = () => {
  let user = false
  if (isBrowser()) {
    let _user = getUser()
    user = !!_user?.jwt
  }
  return user
}

export const logout = (callback) => {
  setUser({})
  callback()
}

export const setHeaders = () => {
  const user = getUser()
  const token = user?.jwt

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user?.jwt}`
  } else {
    axios.defaults.headers.common["Authorization"] = null
  }
}
