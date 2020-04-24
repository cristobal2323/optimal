import React from 'react';

const PerfilSecond = (props) => (
  <div className="module--perfil__secondData">
    <div className="module--perfil__secondDataTitle">
      <h3>Datos personales</h3>
    </div>
    <div className="module--perfil__secondDataInfo">
      <div>
        <h4>Empresa:</h4>
        <h5>Codelco</h5>
      </div>
      <div>
        <h4>Edad:</h4>
        <h5>28 años</h5>
      </div>
      <div>
        <h4>Cargo:</h4>
        <h5>Ingeniero electrico</h5>
      </div>
      <div>
        <h4>Area:</h4>
        <h5>Planta</h5>
      </div>
    </div>
    <div className="module--perfil__secondDataInfo secondDataInfoBottom ">
      <div>
        <h4>Correo:</h4>
        <h5>cri.maturana@gmail.com</h5>
      </div>
      <div>
        <h4>Teléfono:</h4>
        <h5>+56 9 10893110</h5>
      </div>
      <div>
        <h4>Turno:</h4>
        <h5>7X7</h5>
      </div>
      <div>
        <h4>Conduce:</h4>
        <h5>Si</h5>
      </div>
    </div>
    <div className="module--perfil__secondDataInfo secondDataInfoBottom">
      <div>
        <h4>Comuna:</h4>
        <h5>Santiago</h5>
      </div>
      <div>
        <h4>División:</h4>
        <h5>Ministro Hales</h5>
      </div>
    </div>
  </div>
);

PerfilSecond.propTypes = {};

export default PerfilSecond;
