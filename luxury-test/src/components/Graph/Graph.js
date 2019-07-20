import React from 'react';
import './Graph.css';

import GraphTop from './GraphTop';
import GraphMiddle from './GraphMiddle';
import GraphBottom from './GraphBottom';

const Graph = () => {
  return (
    <div className="Graph">
      <GraphTop />
      <GraphMiddle />
      <GraphBottom />
    </div>
  );
};

export default Graph;
