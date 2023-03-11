import axios from "axios"

export const uploadFileSingle = async (file) => {
  return axios
    .post(`${process.env.GATSBY_APP_STRAPI_API_URL}/api/upload`, file)
    .then((res) => {
      console.log("Upload API", upload)
      return res
    })
    .catch((err) => {
      console.log("Upload API", err)
      return err
    })
}
