import React, { Component } from 'react';

class GraphTop extends Component {
  constructor() {
    super();
    this.state = {
      newsFeedbacks: 597,
      totalprofit: 16.6,
      newOrders: 7.5,
      brandPopularity: 48,
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5d018fbd3100005400ab2968')
      .then(response => {
        return response;
      })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="GraphTop">
        <div className="Graph__top-section">
          <div className="Graph__top-headline-container">
            <h1 className="Graph__top-headline">Totals</h1>
            <p className="Graph__top-subheadline totals--gray">Last Week</p>
          </div>
          <div className="Graph__display-containers">
            <div className="Graph__display-left-container">
              <div className="Graph__display display-feedback">
                <div className="Graph__display-content-container">
                  <h1 className="Graph__display-headline">597</h1>
                  <p className="Graph__display-subheadline totals--gray">
                    New Feedbacks
                  </p>
                </div>
                <div className="Graph__display-border" />
              </div>
              <div className="Graph__display display-profit">
                <div className="Graph__display-content-container">
                  <h1 className="Graph__display-headline">16.6M$</h1>
                  <p className="Graph__display-subheadline totals--gray">
                    Total Profit
                  </p>
                </div>
                <div className="Graph__display-border" />
              </div>
            </div>
            <div className="Graph__display-right-container">
              <div className="Graph__display display-orders">
                <div className="Graph__display-content-container">
                  <h1 className="Graph__display-headline">7.5K</h1>
                  <p className="Graph__display-subheadline totals--gray">
                    New Orders
                  </p>
                </div>
                <div className="Graph__display-border" />
              </div>
              <div className="Graph__display display-popularity">
                <div className="Graph__display-content-container">
                  <h1 className="Graph__display-headline">+48%</h1>
                  <p className="Graph__display-subheadline totals--gray">
                    Brand Popularity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphTop;
