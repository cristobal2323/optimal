import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = props => (
  <section className="module--message">
    <Alert variant="danger" className={'center'}>
      <Alert.Heading>Oh Tenemos un error</Alert.Heading>
      <p>Por favor vuelve a cargar el navegador</p>
    </Alert>
  </section>
);

Message.propTypes = {};

export default Message;
