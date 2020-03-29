import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form, Button } from 'react-bootstrap';

const FormComponent = props => (
  <Form onSubmit={props.handleSubmit}>
    <section className="module--form">
      <div className="module--form__box title">
        <h1>Actualizar dispositivo</h1>
      </div>
      <div className="module--form__box">
        <Form.Group controlId="type">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            as="select"
            value={props.form.type}
            onChange={props.handleChange}
            name="type"
            requeried="true"
            data-number="ok"
          >
            <option value={''}>Seleccione</option>
            <option value={'GPS'}>GPS</option>
            <option value={'sensor'}>Sensor</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div className="module--form__box">
        <Form.Group controlId="code">
          <Form.Label>Code</Form.Label>
          <Form.Control
            value={props.form.code}
            onChange={props.handleChange}
            type="text"
            name="code"
          />
        </Form.Group>
      </div>
      <div className="module--form__box full">
        <Button disabled={props.loading} variant="main" type="submit">
          {props.loading ? 'Cargando…' : 'Actualizar'}
        </Button>
      </div>
    </section>
  </Form>
);

FormComponent.propTypes = {};

export default FormComponent;
