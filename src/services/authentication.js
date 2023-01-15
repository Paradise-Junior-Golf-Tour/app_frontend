import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

// export const getUser = () =>
//   isBrowser() && window.localStorage.getItem("gatsbyUser")
//     ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
//     : {}

export const getUser = () => {
  let user = {}
  if (typeof window !== "undefined") {
    console.log('Browser')
    user = window.localStorage.getItem("gatsbyUser")
      ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
      : {}
  }

  return user
}
// isBrowser() && window.localStorage.getItem("gatsbyUser")
//   ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
//   : {}

// if(typeof window !== "undefined"){
//   //your window calculation
// }

export const setUser = (user) => {
  // let user = {}
  if (typeof window !== "undefined") {
    console.log('Browser')
    return window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
  }
  // return user
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
  if (typeof window !== "undefined") {
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
