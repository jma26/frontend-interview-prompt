import React from 'react';
import './Graph.css';

import GraphTop from './GraphTop';
import GraphMiddle from './GraphMiddle';

const Graph = () => {
  return (
    <div className="Graph">
      <GraphTop />
      <GraphMiddle />
    </div>
  );
};

export default Graph;
