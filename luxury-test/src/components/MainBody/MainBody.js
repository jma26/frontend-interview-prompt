import React from 'react';
import './MainBody.css';

import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

const MainBody = () => {
  return (
    <div className="MainBody">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MainBody;
