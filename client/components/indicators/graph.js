import React from 'react';
import PropTypes from 'prop-types';

import Bar from './bar';
import Line from './line';

const Graph = props => (
  <section className="module--graph top topX2">
    <div className="module--graphBox">
      <div className="module--graphBoxWhite">
        <h1>Consumo de energía (kWh)</h1>
        <div className="module--graphContainer">
          <Bar
            start={props.start}
            end={props.end}
            type={props.type}
            data={props.data}
          />
        </div>
      </div>
    </div>
    <div className="module--graphBox">
      <div className="module--graphBoxWhite">
        <h1>Potencia promedio (kW)</h1>
        <div className="module--graphContainer">
          <Line
            start={props.start}
            end={props.end}
            type={props.type}
            data={props.data}
          />
        </div>
      </div>
    </div>
  </section>
);

Graph.propTypes = {};

export default Graph;
