import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as addCrudChargerActions from '../../actions/crud_add_charger';

/* Component */
import Bread from '../../components/crud_add_charger/bread';
import Form from '../../components/crud_add_charger/form';

import Modal from '../common/modal';
import ModalAdd from '../../components/common/modalAdd';

class AddCrudCharger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      form: {
        alias: '',
        code: '',
        polygon:
          '-33.44553346339198;-70.66980071544651,-33.446178022958854;-70.66872783184056,-33.445009755217114;-70.66819139003758',
        address: '',
        power: '',
        connector_type: '',
      },
    };
  }

  componentWillUnmount() {
    this.props.actions.resetCrudCharger();
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
    await this.props.actions.addCrudCharger(arr);
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
          polygon:
            '-33.44553346339198;-70.66980071544651,-33.446178022958854;-70.66872783184056,-33.445009755217114;-70.66819139003758',
          address: '',
          power: '',
          connector_type: '',
        },
      });
    }
    if (this.props.status !== 0) {
      this.props.actions.resetModalCrudChargerAdd({});
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
            handleUpdate={this.handleUpdate}
            form={this.state.form}
            handleChange={this.handleChange}
          />
          <ModalAdd
            data={this.props.data}
            offModal={this.offModal}
            value="Cargador"
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
  data: state.crudAddCharger.data,
  loading: state.crudAddCharger.loading,
  status: state.crudAddCharger.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addCrudChargerActions, dispatch),
});

AddCrudCharger.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddCrudCharger);
