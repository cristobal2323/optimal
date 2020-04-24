import React from 'react';

const PerfilMain = (props) => (
  <div className="module--perfil__mainData">
    <div className="module--perfil__mainDataImg">
      <img src="https://loremflickr.com/100/100" alt="img" />
    </div>
    <div className="module--perfil__mainDataInfo">
      <h3>Cristóbal Maturana</h3>
      <h2>
        Riesgo jornada laboral <strong className="red">100</strong>
      </h2>
      <h2>
        Aptitud laboral <strong className="green">10</strong>
      </h2>
      <h2>
        Evaluación conducta <strong className="yellow">40</strong>
      </h2>
    </div>
  </div>
);

PerfilMain.propTypes = {};

export default PerfilMain;
