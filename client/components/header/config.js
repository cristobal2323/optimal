import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Config = (props) => {
  const node = useRef();
  const parent = useRef();

  const handleClickHide = (e) => {
    if (parent.current.contains(e.target)) {
      document.getElementById('config-header').classList.add('active');
    } else if (!node.current.contains(e.target)) {
      document.getElementById('config-header').classList.remove('active');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickHide);
    return () => {
      document.removeEventListener('mousedown', handleClickHide);
    };
  }, []);

  return (
    <div ref={parent} className="module--dashboardHeaderName">
      <h2>{props.email}</h2>
      <div className="module--dashboardHeaderName__avatar">
        {props.nameShort}
      </div>
      <div
        ref={node}
        id="config-header"
        className="module--dashboardHeaderName__menu"
      >
        <ul>
          <li>
            <a>
              <i className="fas fa-user" />
              <strong>Perfil</strong>
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-cogs" />
              <strong>Configuración</strong>
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-list-ul" />
              <strong>Actividad</strong>
            </a>
          </li>
          <li className="bottom">
            <a onClick={props.handleLogOut} onKeyPress={props.handleLogOut}>
              <i className="fas fa-sign-out-alt" />
              <strong>Cerrar sesión</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Config.propTypes = {};

export default Config;
