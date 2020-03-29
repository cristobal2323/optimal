import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as loginactions from '../../actions/login/index';

/* Component */
import Modal from '../../components/common/modal';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogOut = () => {
    this.props.loginActions.logOut();
    this.props.history.push('/');
  };

  render() {
    return <Modal logOut={this.handleLogOut} state={this.props.state} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginactions, dispatch),
});

ModalContainer.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);
