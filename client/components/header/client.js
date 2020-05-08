import React from 'react';
import Logo from '../../styles/img/codelco.png';
import Config from '../../../server/controllers/config/index';

const Client = (props) => (
  <div className="module--dashboardHeader__client">
    <div>
      <img src={`${Config.apiPublic}${props.logoClient}`} alt="logo cliente" />
    </div>
    <div>
      <h3>{props.client}</h3>
    </div>
    <div>
      <h3></h3>
    </div>
  </div>
);

Client.propTypes = {};

export default Client;
