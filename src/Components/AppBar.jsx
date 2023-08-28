import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../Assets/Images/carentings-logo.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const pages = ["About Us", "Contact Us", "Testimonials"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    debugger;
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const contactRef = useRef(null); // Ref for the Contact Us section

  // ... (other code)

  const handleContactClick = () => {
    // Scroll to the Contact Us section when "Contact Us" is clicked
    debugger;
    if (props && props.current) {
      props.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position={props.position} sx={props.sx} elevation={props.elevation}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ height: "60px", width: "120px" }}
          />

          <logo />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={
                  page == "Contact Us" ? handleContactClick : handleCloseNavMenu
                }
                sx={{ my: 2, color: props.buttonColor, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          {pages.map((page) => (
            <Button
              key={page}
              onClick={
                page == "Contact Us" ? handleContactClick : handleCloseNavMenu
              }
              sx={{ my: 2, color: props.buttonColor, display: "block" }}
            >
              {page}
            </Button>
          ))}
          {loggedIn ? (
            <>
              {" "}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Button
                style={{ marginRight: 15,  color:props.buttonColor }}
                variant="outlined"
                //color={props.buttonColor}
              >
                Login
              </Button>
              <Button
              style={{ marginRight: 15,  color:props.buttonColor }}
               variant="outlined" /* color={props.buttonColor} */>
                SignUp
              </Button>
            </>
          )}

          <IconButton/*  color={props.buttonColor} */ style={{ marginLeft: "10px", color:props.buttonColor }}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
