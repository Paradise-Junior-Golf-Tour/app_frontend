// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { Typography } from "@mui/material"

const IndexPage = (data) => {
  console.log(`[index.js] Index page.`)
  const [dataClient, setDataClient] = useState()

  useEffect(() => {
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

  return (
    <Layout heading="Home">
      <Typography variant="h3" component="h1">
        Home Sweet Home
      </Typography>
      <Typography variant="h5" component="h2">
        So glad to finally make it back.
      </Typography>
      <hr />
      <p>This is the homepage.</p>
      {/* <br /> */}

      {/* //     _____ _    _  ______          __  __  __ ______  __          ___    _       _______  __     ______  _    _    _____  ____ _______ 
//    / ____| |  | |/ __ \ \        / / |  \/  |  ____| \ \        / / |  | |   /\|__   __| \ \   / / __ \| |  | |  / ____|/ __ \__   __|
//   | (___ | |__| | |  | \ \  /\  / /  | \  / | |__     \ \  /\  / /| |__| |  /  \  | |     \ \_/ / |  | | |  | | | |  __| |  | | | |   
//    \___ \|  __  | |  | |\ \/  \/ /   | |\/| |  __|     \ \/  \/ / |  __  | / /\ \ | |      \   /| |  | | |  | | | | |_ | |  | | | |   
//    ____) | |  | | |__| | \  /\  /    | |  | | |____     \  /\  /  | |  | |/ ____ \| |       | | | |__| | |__| | | |__| | |__| | | |   
//   |_____/|_|  |_|\____/   \/  \/     |_|  |_|______|     \/  \/   |_|  |_/_/    \_\_|       |_|  \____/ \____/   \_____|\____/  |_|   
//                                                                                                                                       
//  */}
      <section>
        {/* <p>Welcome to The 2022 Paradise Junior Golf Tour.</p> */}
        {/* <p>THE 2022 SUMMER TOURNAMENT SCHEDULE IS NOW LIVE!!!</p>
        <p>REGISTRATION IS NOW OPEN! </p> */}
        {/* <p>WE HAVE A FUN SCHEDULE FOR YOU THIS YEAR. </p> */}
        {/* <p>REGISTER NOW! DO NOT MISS OUT ON ALL THE FUN! </p> */}
        {/* <p>STAY SAFE AND HEALTHY, AND KEEP IT IN THE SHORT GRASS!</p> */}
        <p>
          ANY QUESTIONS CALL COACH TONY
          <a href="tel:727-776-0450">@727-776-0450</a>
        </p>

        <p>
          <a
            href="https://www2.cybergolf.com/guestbook/view.asp?courseid=3452&id=3922"
            target={"_blank"}
            rel="noreferrer"
          >
            CLICK HERE
          </a>
          to register to be added to our email list.
        </p>
        <p>Best of luck with your game!</p>
        <p>Tony, Paradise Golf Junior Golf Tour</p>
        <p>Gregg, Paradise Golf</p>
      </section>
      <section>
        <Typography variant="h4" component="h3">
          News (formerly a banner.)
        </Typography>
        <hr />
        <p>
          Junior Golf Tour!
          <br />
          ONCE AGAIN WE HAVE A COLLEGE AGE DIVISION THIS YEAR! AGES 19-22
        </p>
        <br />
        <Typography variant="h4" component="h3">
          Upcoming Events
        </Typography>
        <hr />
        <p>Highlight a specifc event or two.</p>
        <br />
      </section>
    </Layout>
  )
}

export default IndexPage
