import React from "react"
import Layout from "../../../layout"
import { Box, Typography } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import { useState, useEffect } from "react"
import { getUserRelations } from "../../../../services/user"
import { portalRoot } from "../../../../config"

const Family = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUserRelations().then((res) => {
      setUsers(res.users)
    })
  }, [])

  return (
    <Layout
      heading={"Family Members"}
      subHeading="This account can have additional family members"
    >
      <Box component="section">
        <Typography variant="h2" component="h2">
          Family Members
        </Typography>
        <Typography variant="h5" component="div">
          View and add family members (users) associated with this account.
        </Typography>
        <br />
        {users.length > 0
          ? users.map((user) => {
              return (
                <Box>
                  {user.username} - {user.email}
                </Box>
              )
            })
          : null}
        <br />
        <br />
        <Button variant="contained" to={`/${portalRoot}/family/add`}>
          Add Family Member
        </Button>
      </Box>
    </Layout>
  )
}

export default Family
