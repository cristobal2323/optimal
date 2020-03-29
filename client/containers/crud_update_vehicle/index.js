import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as updateCrudVehicleActions from '../../actions/crud_update_vehicle';

/* Component */
import Bread from '../../components/crud_update_vehicle/bread';
import Form from '../../components/crud_update_vehicle/form';
import Message from '../../components/common/message';
import Loading from '../common/loading';
import Modal from '../common/modal';
import ModalUpdate from '../../components/common/modalUpdate';

class UpdateCrudVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        alias: '',
        code: '',
        deviceId: '',
        id: '',
        state: '',
        modelId: '',
        vehicleTypeId: '',
        fleetId: '',
      },
    };
  }

  async componentDidMount() {
    await this.props.actions.fetchListCrudVehicleId({
      id: this.props.match.params.id,
    });
  }

  async componentDidUpdate(prevProps) {
    if (this.props.dataItem !== prevProps.dataItem) {
      if (this.props.statusItem === 200) {
        const alias = this.props.dataItem.response.alias;
        const code = this.props.dataItem.response.code;
        const id = this.props.dataItem.response.id;
        const deviceId = this.props.dataItem.response.deviceId;
        const state = this.props.dataItem.response.state;
        const modelId = this.props.dataItem.response.modelId;
        const vehicleTypeId = this.props.dataItem.response.vehicleTypeId;
        const fleetId = this.props.dataItem.response.fleetId;

        this.setState({
          form: {
            ...this.state.form,
            alias,
            code,
            deviceId,
            id,
            state,
            modelId,
            vehicleTypeId,
            fleetId,
          },
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetUpdateCrudVehicle();
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
    await this.props.actions.updateCrudVehicle({
      form: arr,
      id: this.props.match.params.id,
    });
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
    if (this.props.status !== 0) {
      this.props.actions.resetModalCrudVehicleUpdate({});
    }
  };

  render() {
    let container;
    if (this.props.loadingItem && this.props.statusItem === 0) {
      container = <Loading />;
    } else if (!this.props.loadingItem && this.props.statusItem === 200) {
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

            <ModalUpdate
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
    } else if (!this.props.loadingItem && this.props.statusItem === 401) {
      container = <Modal history={this.props.history} state={true} />;
    } else {
      container = <Message />;
    }
    return container;
  }
}

const mapStateToProps = state => ({
  data: state.crudUpdateVehicle.data,
  loading: state.crudUpdateVehicle.loading,
  status: state.crudUpdateVehicle.status,
  dataItem: state.crudUpdateVehicle.dataItem,
  loadingItem: state.crudUpdateVehicle.loadingItem,
  statusItem: state.crudUpdateVehicle.statusItem,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(updateCrudVehicleActions, dispatch),
});

UpdateCrudVehicle.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCrudVehicle);
