import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { HiMenuAlt1 } from "react-icons/hi";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

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

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process form
    this.props.nextStep();
  };
  goBack = (e) => {
    e.preventDefault();
    // Process form
    this.props.prevStep();
  };

  render() {
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
                Success
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 10 }}>
          <h1>Girl ya so succssful I'm shook! xxx</h1>
        </Typography>
      </ThemeProvider>
    );
  }
}

export default Success;
