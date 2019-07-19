import React from 'react';
import './Navbar.css';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import ProfileIcon from '../../assets/img/profile.jpg';

const styles = {
  background: {
    backgroundColor: '#30B5E0',
    color: '#FFF',
    height: '64px',
    boxShadow: 'none',
  },
};

const Navbar = ({ classes }) => {
  return (
    <div className="Navbar">
      <AppBar
        className={`${classes.background} Navbar__appbar`}
        position="static"
      >
        <Toolbar disableGutters>
          <div className="Navbar__search">
            <i className="fas fa-search"></i>
          </div>
          <div className="Navbar__search-container">
            <InputBase
              className={`${classes.background} Navbar__search-input`}
              placeholder="Search..."
            />
          </div>
          <div className="Navbar__profile-container">
            <img
              className="Navbar__profile-image"
              src={ProfileIcon}
              alt="User profile icon"
            />
          </div>
          <IconButton aria-label="Open drawer">
            <i className="fas fa-chevron-down Navbar__chevron-down-icon"></i>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
