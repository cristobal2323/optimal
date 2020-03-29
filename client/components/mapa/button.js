import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form } from 'react-bootstrap';

const Button = props => (
  <div className="module--mapa__buton">
    <div className="module--mapa__butonChild">
      <div>Ver</div>
      <div className="module--mapa__butonInput-s">
        <Form.Control onChange={props.handlePage} size="sm" as="select">
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Form.Control>
      </div>
    </div>
    <div className="module--mapa__butonChild">
      <div>Buscar:</div>
      <div onChange={props.handleSearch} className="module--mapa__butonInput-m">
        <Form.Control size="sm" type="text" placeholder="..." />
      </div>
    </div>
  </div>
);

Button.propTypes = {};

export default Button;
