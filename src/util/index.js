export const reduceObjects = function (array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property]
  }, 0)

  return total
}

export const isBrowser = () => typeof window !== "undefined"

export const imageUrl = (url) => {
  return process.env.REACT_APP_STRAPI_API_URL + url
}
