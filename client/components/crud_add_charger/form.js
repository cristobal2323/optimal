import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form, Button } from 'react-bootstrap';
import Mapa from './mapa';

const FormComponent = props => (
  <React.Fragment>
    <Form onSubmit={props.handleSubmit}>
      <section className="module--form">
        <div className="module--form__box title">
          <h1>Nuevo cargadores</h1>
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
          <Form.Group controlId="connector_type">
            <Form.Label>Tipo de conector</Form.Label>
            <Form.Control
              as="select"
              value={props.form.connector_type}
              onChange={props.handleChange}
              name="connector_type"
              requeried="true"
              data-number="ok"
            >
              <option value={''}>Seleccione</option>
              <option value={'Connector'}>Conector</option>
              <option value={'Otro'}>Otro</option>
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
        <div className="module--form__box">
          <Form.Group controlId="power">
            <Form.Label>Power</Form.Label>
            <Form.Control
              value={props.form.power}
              onChange={props.handleChange}
              type="number"
              name="power"
            />
          </Form.Group>
        </div>
        <div className="module--form__box">
          <Form.Group controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              value={props.form.address}
              onChange={props.handleChange}
              type="text"
              name="address"
            />
          </Form.Group>
        </div>
        <div className="module--form__box">
          <Form.Group controlId="polygon">
            <Form.Label>Pligono</Form.Label>
            <Form.Control
              value={props.form.polygon}
              onChange={props.handleChange}
              type="text"
              name="polygon"
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
    <div className="module--formMap">
      <Mapa
        handleUpdate={props.handleUpdate}
        select={props.select}
        data={props.form.polygon}
      />
    </div>
  </React.Fragment>
);

FormComponent.propTypes = {};

export default FormComponent;
