import React from "react"
import { navigate } from "gatsby"
import { setUser } from "../../services/authentication"
import {
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material"
import ContentGrid from "../../components/layout/content-grid"
import { portalRoot } from "../../config"
import Layout from "../../components/layout"
import axios from "axios"
import Grid from "@mui/material/Unstable_Grid2"
import SignupForm from "../../components/forms/signup"

// TODO - refactor to a functinoal component.
const Signup = () => {
  return (
    <Layout heading="Signup">
      <SignupForm />
    </Layout>
  )
}

export default Signup
