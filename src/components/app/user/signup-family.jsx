import React from "react"
import Layout from "../../layout"
import { Box, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import SignupForm from "../../forms/signup"

const SignupFamily = () => {
  const [formVisible, setFormVisible] = useState(false)
  const toggleForm = (e) => {
    e.preventDefault()
    setFormVisible(!formVisible)
  }
  return (
    <Layout heading="Family Signup">
      <Box>
        <Typography>
          Add your family members. <br />
          You currently have no additional family members. Click below to add
          one.
        </Typography>
        <br />
        {formVisible ? (
          <Box>
            <SignupForm family={true} />
          </Box>
        ) : null}
        <br />
        <Button variant="contained" onClick={toggleForm}>
          Add Family Member
        </Button>
      </Box>
    </Layout>
  )
}

export default SignupFamily
