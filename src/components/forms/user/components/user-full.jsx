import React from "react"
import {
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material"
import ContentGrid from "../../../layout/content-grid"
import Grid from "@mui/material/Unstable_Grid2"

const SignupUserFull = ({formData, handleUpdate}) => {
  return (
    <>
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
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="name_last"
              type="text"
              name="name_last"
              label="Last Name"
              variant="outlined"
              value={formData.name_last}
              onChange={handleUpdate}
            />
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
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="off"
              id="address_one"
              type="text"
              name="address_one"
              value={formData.address_one}
              label="Address One"
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
              id="address_two"
              type="text"
              name="address_two"
              value={formData.address_two}
              label="Address Two"
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
              id="address_city"
              type="text"
              name="address_city"
              value={formData.address_city}
              label="City"
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
              id="address_state"
              type="text"
              name="address_state"
              value={formData.address_state}
              label="State"
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
              id="address_zip"
              type="text"
              name="address_zip"
              value={formData.address_zip}
              label="Zip"
              variant="outlined"
              onChange={handleUpdate}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="family_account">Family Account</InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="family_account"
              id="family_account"
              name="family_account"
              value={formData.family_account}
              label="Family Account"
              onChange={handleUpdate}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </ContentGrid>
    </>
  )
}

export default SignupUserFull
