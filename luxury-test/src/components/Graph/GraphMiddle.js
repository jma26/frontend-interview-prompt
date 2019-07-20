import React from 'react';

import Button from '@material-ui/core/Button';

import siteGraph from '../../assets/img/site-visits-graph.png';
import revenueGraph from '../../assets/img/revenue-graph.png';

const GraphMiddle = () => {
  return (
    <div className="GraphMiddle">
      <div className="Graph__middle-section">
        <div className="Graph__middle-site-visits">
          <div className="Graph__middle-container">
            <div className="Graph__middle-content-container">
              <h1 className="Graph__middle-headline">Site visits</h1>
              <p className="Graph__middle-subheadline totals--gray">
                Weekly Stats
              </p>
            </div>
            <div className="Graph__filter-container">
              <Button className="filter-new-btn">New</Button>
              <Button className="filter-return-btn">Returning</Button>
            </div>
          </div>
          <div className="Graph__middle-graph-container">
            <img src={siteGraph} alt="Site visit graph" />
          </div>
        </div>
        <div className="Graph__middle-revenue">
          <div className="Graph__middle-container">
            <div className="Graph__middle-content-container">
              <h1 className="Graph__middle-headline">Revenue</h1>
              <p className="Graph__middle-subheadline totals--gray">
                Monthly Stats
              </p>
            </div>
            <div className="Graph__filter-picker graph-filter-range">
              <Button>
                Filter Range
                <i className="fas fa-chevron-down Graph__chevron-down-icon"></i>
              </Button>
            </div>
          </div>
          <div className="Graph__middle-graph-container">
            <img src={revenueGraph} alt="Revenue graph" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphMiddle;
