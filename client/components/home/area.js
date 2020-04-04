import React from 'react';
import AreaGraph from './areaGraph';

const Area = props => (
  <React.Fragment>
    <section className="grids--container top bottom">
      <div className="grid-1">
        <div className="grid-title">
          <h2>Fatiga for duty</h2>
        </div>
        <div className="grid-pie">
          <AreaGraph />
        </div>
      </div>
    </section>
  </React.Fragment>
);

Area.propTypes = {};

export default Area;
