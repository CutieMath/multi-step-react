import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { HiMenuAlt1 } from "react-icons/hi";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#AB9CD1",
    },
    secondary: {
      main: "#FF9EAA",
    },
  },
});

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HiMenuAlt1 />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Enter user details
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleChange("firstName")}
            id="standard-basic"
            label="First Name"
            variant="standard"
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            onChange={handleChange("lastName")}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            onChange={handleChange("email")}
            id="standard-basic"
            label="Email"
            variant="standard"
            defaultValue={values.email}
          />
          <br />
          <Button variant="contained" onClick={this.continue}>
            Next Step
          </Button>
        </Box>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
