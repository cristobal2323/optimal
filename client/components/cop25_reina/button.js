import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component */
import { Breadcrumb } from 'react-bootstrap';

const ButtonComponent = props => (
  <div className="module--cop25__btnreturn">
    <Link role="button" to="/dashboard/home">
      <i className="fas fa-arrow-circle-left" />
    </Link>
  </div>
);

ButtonComponent.propTypes = {};

export default ButtonComponent;
