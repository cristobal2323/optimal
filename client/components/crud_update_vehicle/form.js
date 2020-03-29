import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form, Button } from 'react-bootstrap';
import InputDevice from '../../containers/filters/indexDevice';
import InputModels from '../../containers/filters/indexModels';
import InputTypes from '../../containers/filters/indexTypes';
import InputFleet from '../../containers/filters/indexFleet';

const FormComponent = props => (
  <Form onSubmit={props.handleSubmit}>
    <section className="module--form">
      <div className="module--form__box title">
        <h1>Editar vehículo</h1>
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
      <div className="module--form__box">
        <Form.Group controlId="state">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            as="select"
            value={props.form.state}
            onChange={props.handleChange}
            name="state"
            requeried="true"
            data-number="ok"
          >
            <option value={'true'}>Si</option>
            <option value={'false'}>No</option>
          </Form.Control>
        </Form.Group>
      </div>
      <InputDevice form={props.form} handleChange={props.handleChange} />
      <InputModels form={props.form} handleChange={props.handleChange} />
      <InputTypes form={props.form} handleChange={props.handleChange} />
      <InputFleet form={props.form} handleChange={props.handleChange} />
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
