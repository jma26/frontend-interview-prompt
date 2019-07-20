import React from 'react';
import './Dashboard.css';
import Button from '@material-ui/core/Button';

import Graph from '../Graph/Graph';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <div className="Dashboard__container">
        <div className="Dashboard-content-container">
          <h1 className="Dashboard__headline">Dashboard</h1>
          <p className="Dashboard__sub-headline">dashboard & statistics</p>
        </div>
        <div className="Dashboard__date-range-picker">
          <Button>
            17 January 2016 - 16 February 2016
            <i className="fas fa-chevron-down Dashboard__chevron-down-icon"></i>
          </Button>
        </div>
      </div>
      <Graph />
      <Footer />
    </div>
  );
};

export default Dashboard;
