import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

function Example(props) {
  return (
    <>
      <Modal
        show={props.state}
        onHide={props.offModal}
        onExit={props.offModal}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Eliminar {props.value}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿ Estas seguro que dese eliminar el {props.value} ?</p>
          {props.status == 200 && (
            <Alert variant="success">
              <i className="fas fa-smile" /> Valor eliminado correctamente
            </Alert>
          )}
          {props.status == 500 && (
            <Alert variant="danger">
              <i className="fas fa-smile" /> Valor no pudo ser eliminado
            </Alert>
          )}
        </Modal.Body>
        {props.status == 0 && (
          <Modal.Footer>
            <Button onClick={props.offModal} variant="secondary">
              Close
            </Button>
            <Button
              disabled={props.loading}
              onClick={props.handleDelete}
              variant="main"
            >
              {props.loading ? 'Cargando…' : 'Eliminar'}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default Example;
