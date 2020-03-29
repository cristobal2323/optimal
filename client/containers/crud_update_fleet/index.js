import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as updateCrudFleetActions from '../../actions/crud_update_fleet';

/* Component */
import Bread from '../../components/crud_update_fleet/bread';
import Form from '../../components/crud_update_fleet/form';
import Message from '../../components/common/message';

import Loading from '../common/loading';
import Modal from '../common/modal';
import ModalUpdate from '../../components/common/modalUpdate';

class UpdateCrudFleet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        alias: '',
        id: '',
      },
    };
  }

  async componentDidMount() {
    await this.props.actions.fetchListCrudFleetId({
      id: this.props.match.params.id,
    });
  }

  async componentDidUpdate(prevProps) {
    if (this.props.dataItem !== prevProps.dataItem) {
      if (this.props.statusItem === 200) {
        const alias = this.props.dataItem.response.alias;
        const id = this.props.dataItem.response.id;

        this.setState({
          form: {
            ...this.state.form,
            alias,
            id,
          },
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.actions.resetUpdateCrudFleet();
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
    await this.props.actions.updateCrudFleet({
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
      this.props.actions.resetModalCrudFleetUpdate({});
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
              value="flota"
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
  data: state.crudUpdateFleet.data,
  loading: state.crudUpdateFleet.loading,
  status: state.crudUpdateFleet.status,
  dataItem: state.crudUpdateFleet.dataItem,
  loadingItem: state.crudUpdateFleet.loadingItem,
  statusItem: state.crudUpdateFleet.statusItem,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(updateCrudFleetActions, dispatch),
});

UpdateCrudFleet.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCrudFleet);
