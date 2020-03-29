import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as updateCrudDeviceActions from '../../actions/crud_update_device';

/* Component */
import Bread from '../../components/crud_update_device/bread';
import Form from '../../components/crud_update_device/form';
import Message from '../../components/common/message';
import Loading from '../common/loading';
import Modal from '../common/modal';
import ModalUpdate from '../../components/common/modalUpdate';

class UpdateCrudDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        type: '',
        code: '',
        id: '',
        state: '',
      },
    };
  }

  async componentDidMount() {
    await this.props.actions.fetchListCrudDeviceId({
      id: this.props.match.params.id,
    });
  }

  async componentDidUpdate(prevProps) {
    if (this.props.dataItem !== prevProps.dataItem) {
      if (this.props.statusItem === 200) {
        const type = this.props.dataItem.response.type;
        const code = this.props.dataItem.response.code;
        const id = this.props.dataItem.response.id;
        const state = this.props.dataItem.response.state;

        this.setState({
          form: {
            ...this.state.form,
            type,
            code,
            id,
            state,
          },
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetUpdateCrudDevice();
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
    await this.props.actions.updateCrudDevice({
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
      this.props.actions.resetModalCrudDeviceUpdate({});
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
              value="Dispositivos"
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
  data: state.crudUpdateDevice.data,
  loading: state.crudUpdateDevice.loading,
  status: state.crudUpdateDevice.status,
  dataItem: state.crudUpdateDevice.dataItem,
  loadingItem: state.crudUpdateDevice.loadingItem,
  statusItem: state.crudUpdateDevice.statusItem,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(updateCrudDeviceActions, dispatch),
});

UpdateCrudDevice.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCrudDevice);
