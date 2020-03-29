import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Example(props) {
  const [show, setShow] = useState(props.state);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        onExit={props.logOut}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sesión caducada
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Por favor vuelva a conectarse</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
