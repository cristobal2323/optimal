import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { Form, Button, Alert } from 'react-bootstrap';

const FormLogin = props => (
  <div className="module--loginForm">
    <h1>Bienvenidos</h1>
    <p>Sistema de control optimal</p>
    <Form onSubmit={!props.loading ? props.handleLogin : null}>
      <Form.Group controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group controlId="pass">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <div className="module--loginForm_boxButton">
        <Button disabled={props.loading} variant="main" type="submit">
          {props.loading ? 'Cargando…' : 'Ingresar'}
        </Button>
      </div>
    </Form>
    {props.status === 404 && (
      <Alert variant={'danger'} className="top center">
        Usuario o clave incorrecta
      </Alert>
    )}
  </div>
);

FormLogin.propTypes = {};

export default FormLogin;
