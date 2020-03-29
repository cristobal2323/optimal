import React from 'react';
import PropTypes from 'prop-types';

import Antu from '../../styles/img/antu.png';
import Agencia from '../../styles/img/agencia.png';
import Caja from '../../styles/img/caja.png';
import Cop25 from '../../styles/img/cop25.png';

/* Component */
import { Breadcrumb } from 'react-bootstrap';

const ButtonComponent = props => (
  <React.Fragment>
    <div className="module--newcop25__logo">
      <img src={Antu} alt="white" />
    </div>
    <div className="module--newcop25__footer">
      <ul>
        <li>
          <img src={Cop25} alt="white" />
        </li>
        <li>
          <img src={Caja} alt="white" />
        </li>
        <li>
          <img src={Agencia} alt="white" />
        </li>
      </ul>
    </div>
  </React.Fragment>
);

ButtonComponent.propTypes = {};

export default ButtonComponent;
