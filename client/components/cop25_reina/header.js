import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoReina from '../../styles/img/logo-la-reina.png';
import Electro from '../../styles/img/electro.png';
import Antu1 from '../../styles/img/antu1.png';
/* Component */
import { Breadcrumb } from 'react-bootstrap';

const Header = props => (
  <div className="module--cop25__header">
    <div>
      <img src={LogoReina} alt="white" />
    </div>
    <div>
      <img src={Antu1} alt="white" />
    </div>
    <div className="special">
      <img src={Electro} alt="white" />
    </div>
  </div>
);

Header.propTypes = {};

export default Header;
