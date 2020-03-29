import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import HexagonoWhite from '../../styles/img/hexagon-white.svg';
import HexagonoBlue from '../../styles/img/hexagon-blue.svg';
import HexagonoBlueWhite from '../../styles/img/hexagon-blue-white.svg';
import HexagonoGreen from '../../styles/img/hexagon-green.svg';
import HexagonoBrown from '../../styles/img/hexagon-brown.svg';
import Speed from '../../styles/img/speed.svg';
import Tree from '../../styles/img/tree.svg';

const Indicators = props => {
  let km = 0;
  let trees = 0;
  props.data.data.vehiculos.forEach(element => {
    if (element.Kilometros !== '') {
      km += parseInt(element.Kilometros, 10);
    }
    if (element.Arboles !== '') {
      trees += parseInt(element.Arboles, 10);
    }
  });
  return (
    <div className="module--cop23__container reina ">
      <div className="module--cop23__box a  reina ">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoBlue} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Speed} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h1>Distancia</h1>
          <h1>recorrida</h1>
          <h2>
            <NumberFormat
              value={km}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              suffix={' km'}
            />
          </h2>
        </div>
      </div>
      <div className="module--cop23__box c reina">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoGreen} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Tree} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h1>Árboles</h1>
          <h1>Compensados</h1>
          <h2>
            <NumberFormat
              value={trees}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

Indicators.propTypes = {};

export default Indicators;
