import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  console.log('Site Metadata', data)
  return data.site.siteMetadata
}
