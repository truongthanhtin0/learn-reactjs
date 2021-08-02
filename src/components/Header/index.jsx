import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AccountCircle } from "@material-ui/icons";
import ShopIcon from "@material-ui/icons/Shop";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/Auth/userSlice";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // Form Dialog Register
  const [open, setOpen] = useState(false);

  const [swap, setSwap] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showModalRegister = () => {
    setSwap("register");
    handleClickOpen();
  };

  const showModalLogin = () => {
    setSwap("login");
    handleClickOpen();
  };
  // --------------------
  // Check login
  const checkLoggedIn = useSelector((state) => state.user);
  const { current, setting } = checkLoggedIn;
  const isLoggedIn = current.id && setting.status;
  // ------------------
  // Show / close menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  // ------------------
  // Logout
  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    handleCloseMenu();
  };
  //------------------

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar class="wrapper__toolbar">
          <Link to="/" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit">
            <ShopIcon className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
              TVI SHOP
            </Typography>
          </Link>
          <div className="">
            <Link to="/counter" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit">
              <Button color="inherit">Counter</Button>
            </Link>
            <Link to="/swap" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit">
              <Button color="inherit">Swap</Button>
            </Link>
            {!isLoggedIn && (
              <>
                <Button color="inherit" onClick={showModalLogin}>
                  Login
                </Button>
                <Button color="inherit" onClick={showModalRegister}>
                  Register
                </Button>{" "}
              </>
            )}
            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleIconClick}>
                <AccountCircle />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          disableEscapeKeyDown
          disableBackdropClick
        >
          <DialogContent>
            {/* <Register handleClose={handleClose} /> */}
            {swap === "register" && <Register handleClose={handleClose} showModalLogin={showModalLogin} />}
            {swap === "login" && <Login handleClose={handleClose} showModalRegister={showModalRegister} />}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
