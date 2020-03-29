import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import DatePicker from 'react-datepicker';
import { Nav } from 'react-bootstrap';

const NavComponent = props => (
  <section className="module--mapa__nav">
    <Nav variant="tabs" defaultActiveKey="vehiculo">
      <Nav.Item>
        {/* <Nav.Link
          onClick={props.handleState}
          data-evento="eventos"
          eventKey="eventos"
        >
          Evento
        </Nav.Link>
      */}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={props.handleState}
          data-evento="vehiculo"
          eventKey="vehiculo"
        >
          Vehículo
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={props.handleState}
          data-evento="cargadores"
          eventKey="cargadores"
        >
          Cargadores
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={props.handleState}
          data-evento="conductores"
          eventKey="conductores"
        >
          Conductores
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </section>
);

NavComponent.propTypes = {};

export default NavComponent;
