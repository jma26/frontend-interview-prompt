import React from 'react';
import './Sidebar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  background: {
    backgroundColor: '#1FA7D3',
    color: '#FFF',
    height: '64px',
    boxShadow: 'none',
  },
};

const Sidebar = ({ classes }) => {
  return (
    <div className="Sidebar">
      <AppBar
        className={`${classes.background} Sidebar__appbar`}
        position="static"
      >
        <Toolbar className="Sidebar__toolbar" disableGutters>
          <div className="Sidebar__gray-box" />
          <IconButton
            className="Sidebar__icon-menu-btn"
            aria-label="Open drawer"
          >
            <i className="fas fa-bars Sidebar__menu-icon"></i>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="Sidebar__section-container">
        <div className="Sidebar__section-1">
          <div className="Sidebar__section sidebar-calendar">
            <div className="Sidebar__content-container">
              <i className="far fa-calendar-alt"></i>
              <p>Calendar</p>
            </div>
          </div>
          <div className="Sidebar__section sidebar-documentation">
            <div className="Sidebar__content-container">
              <i className="fas fa-file-alt"></i>
              <p>Documentation</p>
            </div>
          </div>
          <div className="Sidebar__section sidebar-home active">
            <div className="Sidebar__content-container">
              <i className="fas fa-home"></i>
              <p>Dashboard</p>
            </div>
            <div className="Sidebar__active-selector" />
          </div>
        </div>
        <div className="Sidebar__section-2">
          <div className="Sidebar__section sidebar-admin-plugins">
            <div className="Sidebar__content-container">
              <i className="fas fa-fire fa-xs"></i>
              <p>Admin Plugins</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-admin-forms">
            <div className="Sidebar__content-container">
              <i className="fas fa-check-square"></i>
              <p>Admin Forms</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-layouts">
            <div className="Sidebar__content-container">
              <i className="fas fa-columns"></i>
              <p>Admin Layouts</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
        </div>
        <div className="Sidebar__section-3">
          <div className="Sidebar__section sidebar-info-panels">
            <div className="Sidebar__content-container">
              <i className="far fa-chart-bar"></i>
              <p>Information Panels</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-ecommerce">
            <div className="Sidebar__content-container">
              <i className="fas fa-shopping-basket"></i>
              <p>Ecommerce</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
        </div>
        <div className="Sidebar__section-4">
          <div className="Sidebar__section sidebar-ui-elements">
            <div className="Sidebar__content-container">
              <i className="far fa-gem"></i>
              <p>UI Elements</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-form-elements">
            <div className="Sidebar__content-container">
              <i className="fas fa-bars"></i>
              <p>Form Elements</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-plugins">
            <div className="Sidebar__content-container">
              <i className="fas fa-cog"></i>
              <p>Plugins</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
          <div className="Sidebar__section sidebar-pages">
            <div className="Sidebar__content-container">
              <i className="fas fa-paste"></i>
              <p>Pages</p>
            </div>
            <i className="fas fa-chevron-right Sidebar__chevron-icon"></i>
          </div>
        </div>
        <div className="Sidebar__section-5">
          <div className="Sidebar__section sidebar-exec-meeting">
            <div className="Sidebar__content-container">
              <i className="far fa-circle Sidebar__circle--yellow"></i>
              <p>Executive Meeting</p>
            </div>
          </div>
          <div className="Sidebar__section sidebar-help-redesign">
            <div className="Sidebar__content-container">
              <i className="far fa-circle Sidebar__circle--red"></i>
              <p>HelpDesk Redesign</p>
            </div>
          </div>
          <div className="Sidebar__section sidebar-sony-meeting">
            <div className="Sidebar__content-container">
              <i className="far fa-circle Sidebar__circle--purple"></i>
              <p>Sony Board Meeting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Sidebar);
