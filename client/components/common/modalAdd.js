import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

const ok = status => {
  if (status === 200 || status === 201) {
    return (
      <Alert variant="success">
        <i className="fas fa-smile" /> Valor agregado correctamente
      </Alert>
    );
  }
};

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
            Nuevo {props.value}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ok(props.status)}
          {props.status !== 0 && props.status !== 200 && props.status !== 201 && (
            <Alert variant="danger">
              <i className="fas fa-smile" /> Valor no pudo ser agregado
            </Alert>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
