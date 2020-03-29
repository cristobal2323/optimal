import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const validate = value => {
  if (value) {
    if (typeof value === 'string') {
      return parseFloat(value);
    }
    return value;
  }
  return 0;
};

const Cards = props => (
  <section className="module--cards top">
    <div className="module--cardsBox">
      <div className="module--cardBoxWhite">
        <div className="module--cardsBox__text">
          <h2>Consumo de energía</h2>
          <h3>
            <NumberFormat
              value={validate(
                props.data.indicadores.data.consumoEnergia,
              ).toFixed(2)}
              isNumericString
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              suffix={' kwh'}
              allowedDecimalSeparators={[',', '.']}
            />
          </h3>
        </div>
        <div className="module--cardsBox__icon">
          <i className="fas fa-bolt" />
        </div>
      </div>
    </div>
    <div className="module--cardsBox">
      <div className="module--cardBoxWhite">
        <div className="module--cardsBox__text">
          <h2>Consumo en pesos</h2>
          <h3>
            <NumberFormat
              value={Math.round(
                validate(props.data.indicadores.data.consumoPesos),
              )}
              isNumericString
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              prefix={'$'}
              allowedDecimalSeparators={[',', '.']}
            />
          </h3>
        </div>
        <div className="module--cardsBox__icon">
          <i className="fas fa-money-bill-alt" />
        </div>
      </div>
    </div>
    <div className="module--cardsBox">
      <div className="module--cardBoxWhite">
        <div className="module--cardsBox__text">
          <h2>Huella de carbono</h2>
          <h3>
            <NumberFormat
              value={validate(
                props.data.indicadores.data.huellaCarbono,
              ).toFixed(2)}
              isNumericString
              displayType={'text'}
              thousandSeparator="."
              decimalSeparator=","
              allowedDecimalSeparators={[',', '.']}
            />
            kg CO<strong>2</strong>eq
          </h3>
        </div>
        <div className="module--cardsBox__icon">
          <i className="fas fa-cloud" />
        </div>
      </div>
    </div>
    <div className="module--cardsBox">
      <div className="module--cardBoxWhite">
        <table>
          <tbody>
            <tr>
              <th>Costo de energía</th>
              <td>
                <NumberFormat
                  value={validate(
                    props.data.indicadores.data.costoEnergia,
                  ).toFixed(2)}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix={' kWh'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td>
                <NumberFormat
                  value={'300'}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={'$'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
            </tr>
            <tr>
              <th>Potencia</th>
              <td>
                <NumberFormat
                  value={validate(props.data.indicadores.data.potencia).toFixed(
                    2,
                  )}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix={'  kW'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td>
                {' '}
                <NumberFormat
                  value={'45'}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={'$'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
            </tr>
            <tr>
              <th>Peak de potencia horario punta</th>
              <td>
                <NumberFormat
                  value={validate(
                    props.data.indicadores.data.valor_peack,
                  ).toFixed(2)}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix={'  kW'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td>
                {' '}
                <NumberFormat
                  value={'100'}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={'$'}
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

Cards.propTypes = {};

export default Cards;
