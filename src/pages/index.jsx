// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Typography, Box, useTheme } from "@mui/material"
import { Link } from "gatsby"
import SportsGolfIcon from "@mui/icons-material/SportsGolf"
import Grid from "@mui/material/Unstable_Grid2"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { isLoggedIn } from "../services/authentication"
import { Container } from "@mui/system"
import EventCardGrid from "../components/event-card-grid"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "gatsby-theme-material-ui"
import GolfCourseIcon from "@mui/icons-material/GolfCourse"

const IndexPage = () => {
  const loggedIn = isLoggedIn()
  const [dataClient, setDataClient] = useState()
  const theme = useTheme()

  const data = useStaticQuery(graphql`
    query allEvents {
      events: allStrapiEvent {
        nodes {
          name
          slug
          date
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
          fee
          date_end
          date_start
          strapi_id
        }
      }
    }
  `)

  useEffect(() => {
    console.log(data.events)
    if (dataClient) {
      console.log("Log [Index Page] Props/Data", { data, dataClient })
    }
  }, [dataClient, data])

  useEffect(() => {
    // API calls on mount
    setDataClient({
      data: true,
    })
  }, [])

  const images = [
    "https://images.unsplash.com/photo-1591546324939-bc2638640783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGYlMjBjb3Vyc2UlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1593111774642-a746f5006b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  ]

  return (
    <Layout
      heading={`Paradise Junior`}
      subHeading={`Golf Tour ${new Date().getFullYear()}`}
      images={images}
    >
      <Box
        component="section"
        fullWidth
        sx={{ position: "relative", overflow: "hidden", zIndex: 0 }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.secondary.main,
            width: 1000,
            height: 1000,
            borderRadius: "100%",
            position: "absolute",
            top: -400,
            right: -500,
            zIndex: -1,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        ></Box>

        <GolfCourseIcon
          sx={{
            width: 500,
            height: 500,
            borderRadius: "100%",
            position: "absolute",
            top: 50,
            right: 50,
            zIndex: 0,
            color: "white",
            opacity: 0.25,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        />

        <Container>
          <Typography variant="h2" component="h2">
            What We Do
          </Typography>
          {/* <br /> */}
          {/* <br /> */}
          <Typography variant="h5" component="h3" color="primary">
            We are dedicated to educating and motivating each junior.
          </Typography>
          <br />
          <Grid container>
            <Grid md={12}>
              <Typography variant="body1" component="p">
                Our organization was founded with a goal of being able to grow
                the game of golf by making it fun, competitive, friendly, and
                most of all affordable. The goal has remained constant, giving
                juniors the opportunity to play and compete without burdening
                them with exorbitant entry fees.
              </Typography>
            </Grid>
            <Grid md={12}>
              <Typography variant="body1" component="p">
                We strive to provide opportunities for the growth and
                development of young athletes by reinforcing positive
                influences, self-confidence, self-esteem, and the ability to
                excel on and off the golf course. Through participation, we are
                dedicated to educating and motivating each junior, while
                encouraging commitment, teamwork, sportsmanship, and fun through
                the game of golf.
              </Typography>
            </Grid>
            <Grid md={12}>
              <Typography variant="body1" component="p">
                We began awarding 2 scholarships of $500 each in 2016 to area
                high school seniors. Our efforts have grown, and even though our
                event was canceled in 2020 due to Covid 19, we have given a
                total of 37 scholarships totaling $31,000. In each of the last
                two years (2021 & 2022) we were so fortunate to award 10 $1,000
                scholarships.
              </Typography>
            </Grid>
            <Grid sm={12}>
              <Button to="/about" size="large" variant="contained">
                More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" fullWidth>
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h2">
              Upcoming Events
            </Typography>
            {/* <br /> */}
            <Typography variant="h5" component="h3" color="error">
              Tee up some fun in {`${new Date().getFullYear()}`}. Check out all
              of our events.
            </Typography>
          </Box>

          <br />
          <EventCardGrid events={data?.events?.nodes} max={3} />
          <br />
          <br />
          <Box sx={{ textAlign: "center" }}>
            <Button
              to="/events"
              color="error"
              variant="contained"
              size="large"
              sx={{ margin: "auto" }}
            >
              See All Events
            </Button>
          </Box>
        </Container>
      </Box>
      <Box component="section" bgcolor="info.main" fullWidth>
        <Container>
          <Typography variant="h2" component="h2">
            Make a Donation
          </Typography>

          <Typography variant="h5" component="h3">
            Your contributions help give juniors the opportunity to play and
            compete without burdening them with exorbitant entry fees.
          </Typography>
          <br />
          <Button
            to="/donate"
            color="primary"
            variant="contained"
            size="large"
            sx={{ margin: "auto", mr: 2 }}
          >
            Donate Today
          </Button>
          <Button
            disabled
            to="/donate"
            color="primary"
            variant="outlined"
            size="large"
            sx={{ margin: "auto" }}
          >
            Become a Sponsor
          </Button>
        </Container>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          What's Happening Lately
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Information to be added once available from client.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" component="h2">
          Weather Widget
        </Typography>
        <br />
        <Typography className="dev" variant="body1" component="p">
          Secondary concern - not needed for launch.
        </Typography>
      </Box>
    </Layout>
  )
}

export default IndexPage
