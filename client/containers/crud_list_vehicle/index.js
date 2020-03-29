import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as crudListVehicleActions from '../../actions/crud_list_vehicle';

/* Component */
import Bread from '../../components/crud_list_vehicle/bread';
import Title from '../../components/crud_list_vehicle/title';
import Table from '../../components/crud_list_vehicle/table';
import Message from '../../components/common/message';
import Loading from '../common/loading';
import Modal from '../common/modal';
import ModalDelete from '../../components/common/modalDelete';

class CrudListVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pag: 1,
      id: null,
      modal: false,
      sort: {
        column: '',
        direction: 'des',
      },
      form: {
        search: '',
        state: '',
      },
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchCrudListVehicle(
      {
        state: this.state.form.state,
        search: this.state.form.search,
        sort: this.state.sort,
        pag: this.state.pag,
      },
      true,
    );
  }

  componentWillUnmount() {
    this.props.actions.resetCrudListVehicle();
  }

  onModal = async event => {
    this.setState({
      id: event.currentTarget.dataset.id,
      modal: true,
    });
  };

  offModal = async event => {
    this.setState({
      id: null,
      modal: false,
    });
    if (this.props.statusDelete !== 0) {
      this.props.actions.resetModalVehicleDelete({});
      await this.props.actions.fetchCrudListVehicle(
        {
          state: this.state.form.state,
          search: this.state.form.search,
          sort: this.state.sort,
          pag: this.state.pag,
        },
        true,
      );
    }
  };

  handleDelete = async event => {
    await this.props.actions.deleteVehicle({ id: this.state.id });
  };

  handleChange = async e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    const search = document.getElementById('search').value;
    const state = document.getElementById('state').value;
    this.setState({ pag: 1 });
    await this.props.actions.fetchCrudListVehicle(
      { search, state, sort: this.state.sort, pag: 1 },
      false,
    );
  };

  handleSort = async event => {
    let direction = this.state.sort.direction === 'des' ? 'asc' : 'des';
    if (event.currentTarget.dataset.name !== this.state.sort.column) {
      direction = 'asc';
    }

    this.setState({
      sort: { column: event.currentTarget.dataset.name, direction },
    });

    await this.props.actions.fetchCrudListVehicle(
      {
        state: this.state.form.state,
        search: this.state.form.search,
        sort: { column: event.currentTarget.dataset.name, direction },
        pag: 1,
      },
      false,
    );
  };

  handleScroll = async event => {
    if (this.state.pag <= this.props.count) {
      const scroll = event.target.scrollTop;
      const max = event.target.scrollHeight - event.target.offsetHeight;
      const value = document.getElementById('search').value;
      if (scroll >= max) {
        this.setState({ pag: this.state.pag + 1 });
        const pag = this.state.pag + 1;
        await this.props.actions.fetchCrudListVehicle(
          {
            state: this.state.form.state,
            search: this.state.form.search,
            sort: this.state.sort,
            pag,
          },
          false,
          true,
        );
      }
    }
  };

  render() {
    let container;
    if (this.props.loading && this.props.status === 0) {
      container = <Loading />;
    } else if (!this.props.loading && this.props.status === 200) {
      container = (
        <React.Fragment>
          <Bread />
          <Title form={this.state.form} handleChange={this.handleChange} />
          <Table
            handleScroll={this.handleScroll}
            handleSort={this.handleSort}
            sort={this.state.sort}
            onModal={this.onModal}
            data={this.props.data}
            loadingTable={this.props.loadingTable}
          />
          <ModalDelete
            offModal={this.offModal}
            handleDelete={this.handleDelete}
            value="vehículo"
            state={this.state.modal}
            status={this.props.statusDelete}
            loading={this.props.loadingDelete}
          />
        </React.Fragment>
      );
    } else if (!this.props.loading && this.props.status === 401) {
      container = <Modal history={this.props.history} state={true} />;
    } else {
      container = <Message />;
    }
    return container;
  }
}

const mapStateToProps = state => ({
  data: state.crudListVehicle.data,
  loading: state.crudListVehicle.loading,
  status: state.crudListVehicle.status,
  dataDelete: state.crudListVehicle.dataDelete,
  loadingDelete: state.crudListVehicle.loadingDelete,
  statusDelete: state.crudListVehicle.statusDelete,
  loadingTable: state.crudListVehicle.loadingTable,
  count: state.crudListVehicle.count,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(crudListVehicleActions, dispatch),
});

CrudListVehicle.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CrudListVehicle);
