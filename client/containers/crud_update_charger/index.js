import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as updateCrudChargerActions from '../../actions/crud_update_charger';

/* Component */
import Bread from '../../components/crud_update_charger/bread';
import Form from '../../components/crud_update_charger/form';
import Message from '../../components/common/message';
import Loading from '../common/loading';
import Modal from '../common/modal';
import ModalUpdate from '../../components/common/modalUpdate';

class UpdateCrudCharger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        connector_type: '',
        code: '',
        id: '',
        state: '',
        alias: '',
        power: '',
        address: '',
        polygon: '',
      },
    };
  }

  async componentDidMount() {
    await this.props.actions.fetchListCrudChargerId({
      id: this.props.match.params.id,
    });
  }

  async componentDidUpdate(prevProps) {
    if (this.props.dataItem !== prevProps.dataItem) {
      if (this.props.statusItem === 200) {
        const connector_type = this.props.dataItem.response.connector_type;
        const code = this.props.dataItem.response.code;
        const id = this.props.dataItem.response.id;
        const state = this.props.dataItem.response.state;
        const alias = this.props.dataItem.response.alias;
        const power = this.props.dataItem.response.power;
        const address = this.props.dataItem.response.address;
        const polygon = this.props.dataItem.response.polygon;

        this.setState({
          form: {
            ...this.state.form,
            connector_type,
            code,
            id,
            state,
            alias,
            power,
            address,
            polygon,
          },
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetUpdateCrudCharger();
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

  handleUpdate = value => {
    this.setState({
      form: {
        ...this.state.form,
        polygon: value,
      },
    });
  };

  /* Funcion submit */
  handleSubmit = async event => {
    event.preventDefault();
    const arr = [this.state.form];
    await this.props.actions.updateCrudCharger({
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
      this.props.actions.resetModalCrudChargerUpdate({});
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
              handleUpdate={this.handleUpdate}
              handleChange={this.handleChange}
            />

            <ModalUpdate
              offModal={this.offModal}
              value="Cargadores"
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
  data: state.crudUpdateCharger.data,
  loading: state.crudUpdateCharger.loading,
  status: state.crudUpdateCharger.status,
  dataItem: state.crudUpdateCharger.dataItem,
  loadingItem: state.crudUpdateCharger.loadingItem,
  statusItem: state.crudUpdateCharger.statusItem,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(updateCrudChargerActions, dispatch),
});

UpdateCrudCharger.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCrudCharger);
