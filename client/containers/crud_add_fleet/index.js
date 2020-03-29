import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as addCrudFleetActions from '../../actions/crud_add_fleet';

/* Component */
import Bread from '../../components/crud_add_fleet/bread';
import Form from '../../components/crud_add_fleet/form';

import Modal from '../common/modal';
import ModalAdd from '../../components/common/modalAdd';

class AddCrudFleet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        alias: '',
      },
    };
  }

  componentWillUnmount() {
    this.props.actions.resetCrudFleet();
  }

  /* Funcion handle change */
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    const arr = [this.state.form];
    await this.props.actions.addCrudFleet(arr);
    this.onModal();
  };

  onModal = async event => {
    this.setState({
      modal: true,
    });
  };

  offModal = async event => {
    this.setState({
      modal: false,
    });
    if (this.props.status === 200 || this.props.status === 201) {
      this.setState({
        form: {
          alias: '',
        },
      });
    }
    if (this.props.status !== 0) {
      this.props.actions.resetModalCrudFleetAdd({});
    }
  };

  render() {
    let container;
    if (this.props.status !== 401) {
      container = (
        <React.Fragment>
          <Bread />
          <Form
            loading={this.props.loading}
            handleSubmit={this.handleSubmit}
            form={this.state.form}
            handleChange={this.handleChange}
          />
          <ModalAdd
            data={this.props.data}
            offModal={this.offModal}
            value="flota"
            state={this.state.modal}
            status={this.props.status}
          />
        </React.Fragment>
      );
    } else {
      container = <Modal history={this.props.history} state={true} />;
    }

    return container;
  }
}

const mapStateToProps = state => ({
  data: state.crudAddFleet.data,
  loading: state.crudAddFleet.loading,
  status: state.crudAddFleet.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addCrudFleetActions, dispatch),
});

AddCrudFleet.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddCrudFleet);
