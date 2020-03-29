import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form } from 'react-bootstrap';

const Device = props => (
  <div className="module--form__box">
    <Form.Group controlId="code">
      <Form.Label>Dispositivo</Form.Label>
      <Form.Control
        as="select"
        value={props.form.deviceId}
        onChange={props.handleChange}
        name="deviceId"
        requeried="true"
        data-number="ok"
      >
        <option value={''}>Seleccione</option>
        {props.data.data.response.devices.map(item => (
          <option key={item.id} value={item.id}>
            {item.code}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </div>
);

Device.propTypes = {};

export default Device;
