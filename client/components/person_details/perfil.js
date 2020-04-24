import React from 'react';
import PerfilMain from './perfilMain';
import PerfilSecond from './perfilSecond';

const Perfil = (props) => (
  <section className="grids--container">
    <div className="grid-1">
      <div className="module--perfil">
        <PerfilMain />
        <PerfilSecond />
      </div>
    </div>
  </section>
);

Perfil.propTypes = {};

export default Perfil;
