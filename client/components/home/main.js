import React from 'react';
import Pie from './pie';

const Message = props => (
  <React.Fragment>
    <section className="grids--container">
      <div className="grid-3">
        <div className="grid-title">
          <h2>Fatiga for duty</h2>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 40 },
              { name: 'Alerta', value: 20 },
              { name: 'Optimo', value: 40 },
            ]}
          />
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="red">En riesgo</li>
            <li className="yellow">Alerta</li>
            <li className="green">Optimo</li>
          </ul>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Conducta</h2>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 30 },
              { name: 'Alerta', value: 30 },
              { name: 'Optimo', value: 40 },
            ]}
          />
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="red">En riesgo</li>
            <li className="yellow">Alerta</li>
            <li className="green">Optimo</li>
          </ul>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Otro</h2>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 50 },
              { name: 'Alerta', value: 20 },
              { name: 'Optimo', value: 30 },
            ]}
          />
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="red">En riesgo</li>
            <li className="yellow">Alerta</li>
            <li className="green">Optimo</li>
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Message.propTypes = {};

export default Message;
