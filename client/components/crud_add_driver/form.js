import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form, Button } from 'react-bootstrap';

const FormComponent = props => (
  <Form onSubmit={props.handleSubmit}>
    <section className="module--form">
      <div className="module--form__box title">
        <h1>Nuevo conductor</h1>
      </div>
      <div className="module--form__box">
        <Form.Group controlId="alias">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            value={props.form.alias}
            onChange={props.handleChange}
            type="text"
            name="alias"
          />
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
          {props.loading ? 'Cargando…' : 'Ingresar'}
        </Button>
      </div>
    </section>
  </Form>
);

FormComponent.propTypes = {};

export default FormComponent;
