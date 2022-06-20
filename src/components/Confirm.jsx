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

export class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, favColor, favPet, favDrink },
    } = this.props;
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
                Confirm User Data
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <List
          sx={{
            top: 10,
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "auto",
            pb: 5,
          }}
          aria-label="contacts"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={firstName} secondary="First Name" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={lastName} secondary="Last Name" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={email} secondary="Email" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={favColor} secondary="Fav color" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={favDrink} secondary="Fav drink" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={favPet} secondary="Fav pet" />
            </ListItemButton>
          </ListItem>
        </List>
        <Button variant="outlined" onClick={this.goBack}>
          Go back
        </Button>{" "}
        <Button variant="contained" onClick={this.continue}>
          Confirm & continue
        </Button>
      </ThemeProvider>
    );
  }
}

export default Confirm;
