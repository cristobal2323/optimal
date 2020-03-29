import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form } from 'react-bootstrap';

const Models = props => (
  <div className="module--form__box">
    <Form.Group controlId="vehicleTypeId">
      <Form.Label>Tipos</Form.Label>
      <Form.Control
        as="select"
        value={props.form.vehicleTypeId}
        onChange={props.handleChange}
        name="vehicleTypeId"
        requeried="true"
        data-number="ok"
      >
        <option value={''}>Seleccione</option>
        {props.data.data.response.map(item => (
          <option key={item.id} value={item.id}>
            {item.alias}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </div>
);

Models.propTypes = {};

export default Models;
