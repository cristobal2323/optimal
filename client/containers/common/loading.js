import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="module--Loading">
        <p>Cargando </p>
        <div className="fa-2x">
          <i className="fas fa-spinner fa-pulse" />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Loading.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);
