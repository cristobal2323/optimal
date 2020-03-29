import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Title = props => (
  <section className="module--title">
    <div>
      <h1>Listado dispositivo</h1>
    </div>
    <div className="flex flex--wrap">
      <div className="module--title-form">
        <Form.Control
          as="select"
          value={props.form.state}
          onChange={props.handleChange}
          name="state"
          requeried="true"
          data-number="ok"
          id="state"
        >
          <option value="">Todos los dispositivos</option>
          <option value="1">Dispositivos Activos</option>
          <option value="0">Dispositivos Desactivados</option>
        </Form.Control>
      </div>
      <div className="module--title-form">
        <Form.Control
          placeholder="Buscar"
          value={props.form.search}
          onChange={props.handleChange}
          type="text"
          name="search"
          id="search"
        />
      </div>
      <div className="module--title-form">
        <Button variant="main">
          <Link to="/dashboard/crud_add_device">Nuevo dispositivo</Link>
        </Button>
      </div>
    </div>
  </section>
);

Title.propTypes = {};

export default Title;
