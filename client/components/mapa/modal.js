import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Bar from './bar';

function Example(props) {
  return (
    <>
      <Modal
        show={props.modal}
        onHide={props.offModal}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        dialogClassName="modal--mapa"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Vehículo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="modal--mapa">
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'a'
                    ? 'modal--mapa__boxContainer active'
                    : 'modal--mapa__boxContainer'
                }
                onClick={() => props.handleSelectModal('a')}
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-battery-three-quarters" />
                      </h2>
                    </li>
                    <li>
                      <h3>Estado de la batería (SoC)</h3>
                    </li>
                    <li>
                      <h4>Estado actual: {props.content.batteryCharge}%</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'b'
                    ? 'modal--mapa__boxContainer active'
                    : 'modal--mapa__boxContainer'
                }
                onClick={() => props.handleSelectModal('b')}
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-battery-empty" />
                      </h2>
                    </li>
                    <li>
                      <h3>Estado de salud de batería (SoH)</h3>
                    </li>
                    <li>
                      <h4>Estado actual: {props.content.batteryHealth}%</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'e'
                    ? 'modal--mapa__boxContainer active'
                    : 'modal--mapa__boxContainer'
                }
                onClick={() => props.handleSelectModal('e')}
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-car" />
                      </h2>
                    </li>
                    <li>
                      <h3>Odómetro (km)</h3>
                    </li>
                    <li>
                      <h4>{props.content.odometer} km</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'c'
                    ? 'modal--mapa__boxContainer desactive'
                    : 'modal--mapa__boxContainer desactive'
                }
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-tachometer-alt" />
                      </h2>
                    </li>
                    <li>
                      <h3>Tiempo de carga</h3>
                    </li>
                    <li>
                      <h4>-</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'd'
                    ? 'modal--mapa__boxContainer desactive'
                    : 'modal--mapa__boxContainer desactive'
                }
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-exclamation-triangle" />
                      </h2>
                    </li>
                    <li>
                      <h3>Energía consumida/cargada</h3>
                    </li>
                    <li>
                      <h4>-</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal--mapa__box">
              <div
                className={
                  props.selectModal === 'f'
                    ? 'modal--mapa__boxContainer'
                    : 'modal--mapa__boxContainer'
                }
              >
                <div>
                  <ul>
                    <li>
                      <h2>
                        <i className="fas fa-plus"></i>
                      </h2>
                    </li>
                    <li>
                      <h3>Configurar Indicador</h3>
                    </li>
                    <li>
                      <h4>-</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {props.selectModal === 'a' && (
              <div className="modal--mapa__boxBig">
                {!props.loadingVehicleGraph ? (
                  <Bar
                    start={null}
                    end={null}
                    type={'day'}
                    data={props.graph.response}
                  />
                ) : (
                  <div>
                    <h3>
                      Cargando <i className="fas fa-spinner fa-pulse" />
                    </h3>
                  </div>
                )}
              </div>
            )}
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
