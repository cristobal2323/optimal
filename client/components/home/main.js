import React from 'react';
import Pie from './pie';

const Message = (props) => (
  <React.Fragment>
    <section className="grids--container">
      <div className="grid-3">
        <div className="grid-title">
          <h2>Riesgo jornada laboral</h2>
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
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno A: <strong className="red">65%</strong>
          </h3>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Aptitud laboral</h2>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 30 },
              { name: 'Alerta', value: 10 },
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
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno A: <strong className="yellow">55%</strong>
          </h3>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Evaluación conductual</h2>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 60 },
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
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno C: <strong className="green">15%</strong>
          </h3>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Message.propTypes = {};

export default Message;
