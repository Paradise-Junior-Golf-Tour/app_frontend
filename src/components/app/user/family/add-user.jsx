import React, { useReducer } from "react"
import Layout from "../../../layout"
import { Box, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import SignupForm from "../../../forms/user"
import { getUserRelations } from "../../../../services/user"
import { getUser } from "../../../../services/authentication"

const FamilyAddMember = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [users, setUsers] = useState([])
  const user = getUser()

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
      heading={formVisible ? "Add Member" : "Family Members"}
      subHeading="This account can have additional family members"
    >
      <Box component="section">
        <SignupForm family={true} />
      </Box>
    </Layout>
  )
}

export default FamilyAddMember
