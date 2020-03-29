import React, { useEffect, useState, useRef } from 'react';
import { Modal, Alert } from 'react-bootstrap';

function Example(props) {
  return (
    <>
      <Modal
        show={props.state}
        onHide={props.offModal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Actualizar {props.value}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.status == 200 && (
            <Alert variant="success">
              <i className="fas fa-smile" /> Valor actualizado correctamente
            </Alert>
          )}
          {props.status !== 0 && props.status !== 200 && (
            <Alert variant="danger">
              <i className="fas fa-smile" /> Valor no pudo ser actualizado
            </Alert>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
