import React from "react"
import Layout from "../../layout"
import { Box, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import SignupForm from "../../forms/user"
import { getUserRelations } from "../../../services/user"

const SignupFamily = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [users, setUsers] = useState([])

  const toggleForm = (e) => {
    e.preventDefault()
    setFormVisible(!formVisible)
  }

  useEffect(() => {
    getUserRelations().then((res) => {
      console.log("Relations", res)
      setUsers(res.users)
    })
  }, [])

  return (
    <Layout
      heading="Family Members"
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

        {formVisible ? <SignupForm family={true} /> : null}
        <br />
        {formVisible ? (
          <Button variant="outlined" onClick={toggleForm}>
            Cancel
          </Button>
        ) : (
          <Button variant="contained" onClick={toggleForm}>
            Add Family Member
          </Button>
        )}
      </Box>
      <Button variant="contained" loading={true} type="submit" size="large">
        Submit
      </Button>
    </Layout>
  )
}

export default SignupFamily
