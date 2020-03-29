import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as addCrudVehicleActions from '../../actions/crud_add_vehicle';

/* Component */
import Bread from '../../components/crud_add_vehicle/bread';
import Form from '../../components/crud_add_vehicle/form';

import Modal from '../common/modal';
import ModalAdd from '../../components/common/modalAdd';

class AddCrudVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        alias: '',
        code: '',
        deviceId: '',
        modelId: '',
        vehicleTypeId: '',
        fleetId: '',
      },
    };
  }

  componentWillUnmount() {
    this.props.actions.resetCrudVehicle();
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
    await this.props.actions.addCrudVehicle(arr);
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
          code: '',
          deviceId: '',
          vehicleTypeId: '',
          fleetId: '',
        },
      });
    }
    if (this.props.status !== 0) {
      this.props.actions.resetModalCrudVehicleAdd({});
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
            value="vehículo"
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
  data: state.crudAddVehicle.data,
  loading: state.crudAddVehicle.loading,
  status: state.crudAddVehicle.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addCrudVehicleActions, dispatch),
});

AddCrudVehicle.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddCrudVehicle);
