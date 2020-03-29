import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form } from 'react-bootstrap';

const Device = props => (
  <div className="module--form__box">
    <Form.Group controlId="fleetId">
      <Form.Label>Flota</Form.Label>
      <Form.Control
        as="select"
        value={props.form.fleetId}
        onChange={props.handleChange}
        name="fleetId"
        requeried="true"
        data-number="ok"
      >
        <option value={''}>Seleccione</option>
        {props.data.data.response.fleets.map(item => (
          <option key={item.id} value={item.id}>
            {item.alias}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </div>
);

Device.propTypes = {};

export default Device;
