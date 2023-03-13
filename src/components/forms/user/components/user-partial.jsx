import React from "react"
import {
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Box,
} from "@mui/material"
import ContentGrid from "../../../layout/content-grid"
import Grid from "@mui/material/Unstable_Grid2"

const SignupUserPartial = ({
  formData,
  handleUpdate,
}) => {
  return (
    <>
      <Typography variant="h5" component="div">
        Account Info
      </Typography>
      <hr />
      <Typography component="p">
        We recommend using the same password as your primary account. A unique
        email is required, but leaving this field blank is fine - we will still
        tie this account to your primary account.
      </Typography>
      <br />
      <ContentGrid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="email"
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="username"
              type="text"
              name="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
      </ContentGrid>
      <br />
      <Typography variant="h5" component="div">
        Personal Info
      </Typography>
      <hr />
      <Typography component="p">
        Other information, such as the address or last name, will be added from
        the primary account.
      </Typography>
      <br />
      <ContentGrid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="name_first"
              type="text"
              name="name_first"
              label="First Name"
              value={formData.name_first}
              variant="outlined"
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              name="gender"
              value={formData.gender}
              label="Gender"
              onChange={handleUpdate}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="birthday"
              type="date"
              name="birthday"
              label="Birthday"
              variant="outlined"
              value={formData.birthday}
              onChange={handleUpdate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
      </ContentGrid>
      <br />
      <Typography variant="h5" component="div">
        Password
      </Typography>
      <hr />
      <Typography component="p">
        We recommend using the same password as your primary account.
      </Typography>
      <br />

      <ContentGrid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              label="Password"
              variant="outlined"
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
              label="Password Confirmation"
              variant="outlined"
              value={formData.passwordConfirmation}
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
      </ContentGrid>
    </>
  )
}

export default SignupUserPartial
