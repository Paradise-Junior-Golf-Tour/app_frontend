export const reduceObjects = function (array, property) {
  const total = array.reduce((accumulator, object) => {
    return accumulator + object[property]
  }, 0)

  return total
}

export const isBrowser = () => typeof window !== "undefined"

export const imageUrl = (url) => {
  return process.env.GATSBY_APP_STRAPI_API_URL + url
}

export const dateFormat = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })

export const sort = (array, property) =>
  array.sort(function (a, b) {
    return new Date(b[property]) - new Date(a[property])
  })
