import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/img/antu.png';
import '../../styles/img/agencia.png';
import '../../styles/img/caja.png';
import '../../styles/img/lareina.png';
import Cop25 from '../../styles/img/cop25.png';

const Auspiciadores = props => (
  <section className="auspiciadores hide" id="auspiciadores">
    <div className="module--cop25__btnreturn">
      <Link role="button" to="/dashboard/indicators">
        <i className="fas fa-arrow-circle-left" />
      </Link>
    </div>
    <span>
      <img className="logo-cop" src={Cop25} alt="white" />
    </span>
    <div>Auspicia:</div>
    <div id="fondo-auspiciadores" className="fondo-auspiciadores fondo-1"></div>
  </section>
);

Auspiciadores.propTypes = {};

export default Auspiciadores;
