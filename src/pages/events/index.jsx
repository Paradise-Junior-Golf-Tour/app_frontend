/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Chip, Typography } from "@mui/material"
import { linkActive } from "../../styles"
import { getUser, isLoggedIn } from "../../services/authentication"
import { portalRoot } from "../../config"
import LinkEvent from "../../components/routing/link-event"
import BasicGrid from "./components/event-grid"

// TODO - replace static query with page query.

const EventsPage = (props) => {
  const user = getUser()
  const authenticated = isLoggedIn()
  //  const { data, setData } = useState({}); // dyamically fetch any event data not listed.
  const data = useStaticQuery(graphql`
    query allEvents {
      events: allStrapiEvent {
        nodes {
          name
          slug
          description {
            data {
              description
            }
          }
          image {
            formats {
              large {
                url
              }
              medium {
                url
              }
              small {
                url
              }
              thumbnail {
                url
              }
            }
          }
          id
          registration_open
          fee
          date_end
          date_start
          strapi_id
        }
      }
    }
  `)

  // const renderLink = () => {
  //   console.log("Log [Events Page] | creating links.")
  // }

  // renderLink()

  // description {
  //   data {
  //     description
  //   }
  // }
  // image {
  //   formats {
  //     large {
  //       url
  //     }
  //     medium {
  //       url
  //     }
  //     small {
  //       url
  //     }
  //     thumbnail {
  //       url
  //     }
  //   }
  // }

  useEffect(() => {
    console.log("Log [Events Page] | data", data.events)
    console.log("Log [Events Page] | props", props)
  }, [data, props])

  return (
    <Layout heading="Events">
      {/* <Layout.Header heading={"YEET"}>
        Hello
      </Layout.Header> */}
      <Typography component="h1" variant="h3">
        Tour Events
      </Typography>

      <Typography component="h3" variant="h5">
        This is the events page.
      </Typography>
      <hr />
      <p>
        Browse events and navigate from here to event pages, registration,
        results, and tee times (maybe).
      </p>
      <div className="dev">
        This can all be handled by one query. Admin would possibly benefit from
        multiple queries for updates but tbd.
      </div>
      <br />
      <ul>
        <li>
          <Link activeStyle={linkActive} to="/events/register">
            Register
          </Link>
        </li>
        <li>
          <Link activeStyle={linkActive} to="/events/tee-times">
            Tee Times
          </Link>
        </li>
      </ul>
      <br />
      {/* <div className="dev">
        Move this shit to the homepage.
      </div>
      <br /> */}
      {/* <p>
        KEY HIGHLIGHTS AND NOTES THE PARADISE JUNIOR GOLF TOUR IS A HIGHLY
        COMPETITIVE TOURNAMENT SERIES FOR TAMPA BAY AREA HIGH SCHOOL GOLFERS.
        <br />
        <br />
        THE TOUR AFFORDS THE OPPORTUNITY FOR PLAYERS TO GAIN INVALUABLE
        TOURNAMENT EXPERIENCE, WHILE KEEPING THE COST OF THE EVENTS TO A
        MINIMUM. THE TOUR DIRECTOR IS TONY PASQUINE, FORMER LOCAL HIGH SCHOOL
        GOLF COACH AND GOLF SHOP ASSISTANT AT DUNEDIN GOLF CLUB ALL EVENTS ARE
        RUN BY FHSAA GUIDELINES AND ARE APPROVED BY THE FHSAA, (FLORIDA HIGH
        SCHOOL ATHLETIC ASSOCIATION).
        <br />
        <br />
        PARADISE GOLF TAMPA & SCT ARE THE MAIN SPONSORS OF THE 2022 JUNIOR GOLF
        TOUR
        <br />
        <br />
        CONTACT INFORMATION Contact Tony Pasquine PHONE (727) 776-0450 or EMAIL
        tony.pasquine@gmail.com Contact Paradise Golf PHONE (813) 265-3338 or
        EMAIL gregg@paradise-golf.com
      </p> */}
      <hr />
      <BasicGrid events={data.events} />
      <br />
    </Layout>
  )
}

export default EventsPage

export const Head = () => <SEO title="Events | The Paradise Junior Golf Tour" />

// const EventsPage = (props) => {
//   //  const { data, setData } = useState({}); // dyamically fetch any event data not listed.
//   // const data = useStaticQuery(graphql`
//   //   query allEvents {
//   //     allStrapiEvent {
//   //       edges {
//   //         node {
//   //           id
//   //           Name
//   //           Fee
//   //           strapi_id
//   //           Registration
//   //           Description {
//   //             data {
//   //               Description
//   //             }
//   //           }
//   //           image {
//   //             url
//   //           }
//   //           Slug
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)

//   // useEffect(() => {
//   //   console.log("Log [Events Page] data", data.allStrapiEvent.edges)
//   //   console.log("Log [Events Page] Props", props)
//   // }, [data, props])

//   return <Layout heading="Events">hello world</Layout>
// }

// export default EventsPage
