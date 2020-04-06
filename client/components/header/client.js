import React from 'react';
import Logo from '../../styles/img/codelco.png';

const Client = (props) => (
  <div className="module--dashboardHeader__client">
    <div>
      <img src={Logo} alt="logo cliente" />
    </div>
    <div>
      <h3>Codelco</h3>
    </div>
    <div>
      <h3>División ministro hales</h3>
    </div>
  </div>
);

Client.propTypes = {};

export default Client;
