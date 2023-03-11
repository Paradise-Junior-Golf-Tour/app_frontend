/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import { Typography, Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import GolfCourseIcon from "@mui/icons-material/GolfCourse"
import SchoolIcon from "@mui/icons-material/School"
import { iconStyles } from "./styles"

const AboutPage = (props) => {
  return (
    <Layout
      heading="About Us"
      subHeading="All about the Paradise Junior Golf Tour"
    >
      <Box component="section">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            What We Do
          </Typography>

          <Typography variant="h5" component="h3" color="primary">
            We are dedicated to educating and motivating each junior.
          </Typography>
        </Box>
        <br />
        <br />
        <Grid container>
          <Grid xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <GolfCourseIcon sx={iconStyles} />
            </Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              Affordable Fun
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              Our organization was founded with a goal of being able to grow the
              game of golf by making it fun, competitive, friendly, and most of
              all affordable. The goal has remained constant, giving juniors the
              opportunity to play and compete without burdening them with
              exorbitant entry fees.
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <EmojiEventsIcon sx={iconStyles} />
            </Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              Positivite Growth
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              We strive to provide opportunities for the growth and development
              of young athletes by reinforcing positive influences,
              self-confidence, self-esteem, and the ability to excel on and off
              the golf course. Through participation, we are dedicated to
              educating and motivating each junior, while encouraging
              commitment, teamwork, sportsmanship, and fun through the game of
              golf.
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <SchoolIcon sx={iconStyles} />
            </Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              Scholarships
            </Typography>
            <br />
            <Typography
              variant="body1"
              component="p"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              We began awarding 2 scholarships of $500 each in 2016 to area high
              school seniors. Our efforts have grown, and even though our event
              was canceled in 2020 due to Covid 19, we have given a total of 37
              scholarships totaling $31,000. In each of the last two years (2021
              & 2022) we were so fortunate to award 10 $1,000 scholarships.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box component="section">
        <Typography variant="h2" component="h2">
          Who I Am
        </Typography>
        {/* <br /> */}
        {/* <br /> */}
        <Typography variant="h5" component="h3" color="primary">
          Tony Pasquine, founder of The Future Champions Golf Tour.
        </Typography>
        <br />
        <Grid container>
          <Grid md={12}>
            <Typography variant="body1" component="p">
              Tony Pasquine joined forces with Gregg Gagliardi of Paradise Golf
              a few years ago to form The Paradise Junior Golf Tour. Tony is a
              former high school golf coach at Clearwater Central Catholic High
              School. His coaching career spanned three decades and during his
              tenure at CCC Tony ran the High School District and Regional
              Tournaments numerous times. Retiring from coaching in 2019, he
              continues his focus and support of Junior Golf in the Tampa Bay
              area. He is a past board member of The Knights of Columbus Florida
              State Golf Council, a past board member of The Florida High School
              Athletic Association Golf Advisory Committee and in 2020 Tony was
              nominated for the PGA Player Development Award.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <SEO title="About | The Paradise Junior Golf Tour" />

// const AboutPage = (props) => {
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

// export default AboutPage
