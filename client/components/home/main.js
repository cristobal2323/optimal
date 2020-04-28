import React from 'react';
import Pie from './pie';

const Message = (props) => (
  <React.Fragment>
    <section className="grids--container">
      <div className="grid-3">
        <div className="grid-title">
          <h2>Riesgo jornada laboral</h2>
          <p>(Cantiadad de trabajadores)</p>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 30 },
              { name: 'Alerta', value: 20 },
              { name: 'Bajo riesgo', value: 20 },
              { name: 'Optimo', value: 34 },
            ]}
          />
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="green">Optimo</li>
            <li className="yellow">Bajo riesgo</li>
            <li className="orange">Alerta</li>
            <li className="red">En riesgo</li>
          </ul>
        </div>
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno A-Planta: <strong className="red">65%</strong>
          </h3>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Aptitud laboral</h2>
          <p>(Cantiadad de trabajadores)</p>
        </div>
        <div className="grid-pie">
          <table className="grid-pieTable">
            <tbody>
              <tr>
                <th rowSpan="2" colSpan="2">
                  {' '}
                  Test
                </th>
                <th colSpan="4">Indicadores de riesgo</th>
              </tr>
              <tr>
                <th>Optimo</th>
                <th>Bajo riesgo</th>
                <th>Alerta</th>
                <th>En riesgo</th>
              </tr>

              <tr>
                <td colSpan="2">Fit 200</td>
                <td className="optimo">4</td>
                <td className="bajoriesgo">3</td>
                <td className="alerta">2</td>
                <td className="enriesgo">2</td>
              </tr>
              <tr>
                <td colSpan="2">Sobereye</td>
                <td className="optimo-2" colSpan="3">
                  5
                </td>
                <td className="enriesgo">1</td>
              </tr>
              <tr>
                <td colSpan="2">K-test</td>
                <td className="optimo-3" colSpan="2">
                  5
                </td>
                <td className="alerta">2</td>
                <td className="enriesgo">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="green">Optimo</li>
            <li className="yellow">Bajo riesgo</li>
            <li className="orange">Alerta</li>
            <li className="red">En riesgo</li>
          </ul>
        </div>
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno A-Mina: <strong className="yellow">55%</strong>
          </h3>
        </div>
      </div>
      <div className="grid-3">
        <div className="grid-title">
          <h2>Evaluación conductual</h2>
          <p>(Cantiadad de trabajadores)</p>
        </div>
        <div className="grid-pie">
          <Pie
            data={[
              { name: 'En riesgo', value: 60 },
              { name: 'Alerta', value: 20 },
              { name: 'Bajo riesgo', value: 10 },
              { name: 'Optimo', value: 30 },
            ]}
          />
        </div>
        <div className="grid-simbo">
          <ul>
            <li className="green">Optimo</li>
            <li className="yellow">Bajo riesgo</li>
            <li className="orange">Alerta</li>
            <li className="red">En riesgo</li>
          </ul>
        </div>
        <div className="grid-title top topX2">
          <h2>Turno más riesgoso</h2>
        </div>
        <div className="grid-text__main">
          <h3>
            Turno C-Planta: <strong className="green">15%</strong>
          </h3>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Message.propTypes = {};

export default Message;
