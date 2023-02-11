// import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
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

  const images = [
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1593111774642-a746f5006b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
  ]
  
  return (
    <Layout heading="The Paradise Junior Golf Tour" images={images}>
      <Typography variant="h3" component="h1">
        {`Welcome to the ${new Date().getFullYear()} Tour`}
      </Typography>
      <Typography variant="h5" component="h2">
        So glad to finally make it back.
      </Typography>
      <hr />
      <p>This is the homepage.</p>

      {/* //     _____ _    _  ______          __  __  __ ______  __          ___    _       _______  __     ______  _    _    _____  ____ _______ 
//    / ____| |  | |/ __ \ \        / / |  \/  |  ____| \ \        / / |  | |   /\|__   __| \ \   / / __ \| |  | |  / ____|/ __ \__   __|
//   | (___ | |__| | |  | \ \  /\  / /  | \  / | |__     \ \  /\  / /| |__| |  /  \  | |     \ \_/ / |  | | |  | | | |  __| |  | | | |   
//    \___ \|  __  | |  | |\ \/  \/ /   | |\/| |  __|     \ \/  \/ / |  __  | / /\ \ | |      \   /| |  | | |  | | | | |_ | |  | | | |   
//    ____) | |  | | |__| | \  /\  /    | |  | | |____     \  /\  /  | |  | |/ ____ \| |       | | | |__| | |__| | | |__| | |__| | | |   
//   |_____/|_|  |_|\____/   \/  \/     |_|  |_|______|     \/  \/   |_|  |_/_/    \_\_|       |_|  \____/ \____/   \_____|\____/  |_|   
//                                                                                                                                       
//  */}
      <section>
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
