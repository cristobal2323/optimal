import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import HexagonoWhite from '../../styles/img/hexagon-white.svg';
import HexagonoBlue from '../../styles/img/hexagon-blue.svg';
import HexagonoBlueWhite from '../../styles/img/hexagon-blue-white.svg';
import HexagonoGreen from '../../styles/img/hexagon-green.svg';
import HexagonoBrown from '../../styles/img/hexagon-brown.svg';
import HexagonoYellow from '../../styles/img/hexagon-yellow.svg';
import Indicador1 from '../../styles/img/icon-1.svg';
import strings from './locale';

const Indicators = props => {
  const emittedCO2 = props.data.response.emittedCO2 / 1000;
  const reducedCO2 = props.data.response.reducedCO2 / 1000;

  return (
    <div className="module--cop23__container">
      <div className="module--cop23__box a">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoBlue} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Indicador1} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h2>
            <NumberFormat
              value={Math.round(props.data.response.totalKms)}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
            />{' '}
            <span className="text"> km.</span>
          </h2>
          <h1>{strings.text1}</h1>
        </div>
      </div>
      <div className="module--cop23__box b">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoYellow} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Indicador1} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h2>
            <NumberFormat
              value={Math.round(props.data.response.consumedEnergy)}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
            />{' '}
            <span className="text">kwh.</span>
          </h2>
          <h1>{strings.text2}</h1>
        </div>
      </div>
      <div className="module--cop23__box c">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoBrown} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Indicador1} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h2>
            <NumberFormat
              value={emittedCO2.toFixed(2)}
              isNumericString
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              allowedDecimalSeparators={[',', '.']}
            />{' '}
            <span className="text">
              ton CO<span className="textminy">2</span> eq.
            </span>
          </h2>
          <h1>{strings.text3}</h1>
        </div>
      </div>
      <div className="module--cop23__box d">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoBlueWhite} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Indicador1} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h2>
            <NumberFormat
              value={'-34,07'}
              isNumericString
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              allowedDecimalSeparators={[',', '.']}
            />{' '}
            <span className="text">
              ton CO<span className="textminy">2</span> eq.
            </span>
          </h2>
          <h1>{strings.text4}</h1>
        </div>
      </div>
      <div className="module--cop23__box e">
        <div className="hexagon">
          <img src={HexagonoWhite} alt="white" />
        </div>
        <div className="hexagon-color">
          <img src={HexagonoGreen} alt="white" />
        </div>
        <div className="hexagon-icon">
          <img src={Indicador1} alt="white" />
        </div>
        <div className="border"></div>
        <div>
          <h2>
            <NumberFormat
              value={Math.round(props.data.response.plantedTrees)}
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
            />{' '}
          </h2>
          <h1>{strings.text5}</h1>
        </div>
      </div>
    </div>
  );
};

Indicators.propTypes = {};

export default Indicators;
