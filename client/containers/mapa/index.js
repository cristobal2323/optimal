import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import interval from 'interval-promise';

/* Actions */
import * as mapaActions from '../../actions/mapa';

/* Component */
import Message from '../../components/common/message';
import Loading from '../common/loading';
import MapaBox from '../../components/mapa/mapa';
import Nav from '../../components/mapa/nav';
import BoxTable from '../../components/mapa/boxTable';
import Modal from '../../components/mapa/modal';
import ModalClose from '../common/modal';

let stoppedExternally = false;

const stopExternally = () => {
  stoppedExternally = true;
};

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pag: {
        main: 1,
        start: 0,
        end: 10,
        sum: 10,
        startPaginator: 1,
        endPaginator: 10,
      },
      sort: {
        column: 'odometer',
        direction: 'des',
      },
      type: 'vehiculo',
      modal: false,
      id_vehiculo: 50,
      search: '',
      setTime: null,
      modelContent: {},
      selectModal: 'a',
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    stoppedExternally = false;
    let inicio = 0;
    let load = true;

    interval(async (iteration, stop) => {
      if (stoppedExternally) {
        stop();
      } else {
        if (inicio > 0) {
          load = false;
        }
        await this.props.actions.getDevice({}, false);
        await this.props.actions.getVehicle({}, false);
      }
      inicio++;
    }, 9000);
    await this.props.actions.fetchListMapa(
      {
        type: this.state.type,
        pag: this.state.pag,
        sort: this.state.sort,
        search: this.state.search,
      },
      load,
    );
  }

  componentWillUnmount() {
    stopExternally();
    this.props.actions.resetListMapa();
  }

  handleState = async event => {
    let column = '';
    let direction = 'des';
    if (event.currentTarget.dataset.evento === 'vehiculo') {
      column = 'odometer';
      direction = 'asc';
    }

    this.setState({
      type: event.currentTarget.dataset.evento,
      pag: {
        ...this.state.pag,
        start: 1,
        main: 1,
        end: this.state.pag.sum,
        startPaginator: 1,
        endPaginator: 10,
      },
      sort: {
        column,
        direction,
      },
    });
    await this.props.actions.fetchListMapa(
      {
        type: event.currentTarget.dataset.evento,
        pag: {
          ...this.state.pag,
          start: 1,
          main: 1,
          end: this.state.pag.sum,
          startPaginator: 1,
          endPaginator: 10,
        },
        sort: {
          column,
          direction,
        },
        search: this.state.search,
      },
      false,
    );
  };

  onModal = async obj => {
    await this.props.actions.getVehicleGraph({ code: obj.vehicleCode });
    this.setState({
      modal: true,
      modelContent: obj,
    });
  };

  offModal = async event => {
    this.props.actions.resetModalMapa();
    this.setState({
      modal: false,
    });
  };

  handleSearch = async event => {
    this.setState({
      search: event.target.value,
    });
    await this.props.actions.fetchListMapa(
      {
        type: this.state.type,
        pag: this.state.pag,
        sort: this.state.sort,
        search: event.target.value,
      },
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

    await this.props.actions.fetchListMapa(
      {
        type: this.state.type,
        pag: this.state.pag,
        search: this.state.search,
        sort: { column: event.currentTarget.dataset.name, direction },
      },
      false,
    );
  };

  handlePage = async event => {
    const num = parseInt(event.target.value, 10);

    let end = this.state.pag.end - this.state.pag.sum;
    end = end + num;

    this.setState({
      pag: {
        ...this.state.pag,
        sum: event.target.value,
        end,
      },
    });
    await this.props.actions.fetchListMapa(
      {
        type: this.state.type,
        sort: this.state.sort,
        search: this.state.search,
        pag: {
          ...this.state.pag,
          sum: event.target.value,
          end,
        },
      },
      false,
    );
  };

  handlePaginator = async event => {
    const start =
      event.target.dataset.num * this.state.pag.sum - this.state.pag.sum;
    const end = event.target.dataset.num * this.state.pag.sum;

    let startPaginator = this.state.pag.startPaginator;
    let endPaginator = this.state.pag.endPaginator;
    if (
      event.target.dataset.start === 'start' &&
      event.target.dataset.num > 4
    ) {
      startPaginator -= 5;
      endPaginator -= 5;
    }

    if (event.target.dataset.end === 'end') {
      startPaginator += 5;
      endPaginator += 5;
    }

    this.setState({
      pag: {
        ...this.state.pag,
        start,
        end,
        main: parseInt(event.target.dataset.num, 10),
        startPaginator,
        endPaginator,
      },
    });

    await this.props.actions.fetchListMapa(
      {
        type: this.state.type,
        sort: this.state.sort,
        search: this.state.search,
        pag: {
          ...this.state.pag,
          start,
          end,
          main: parseInt(event.target.dataset.num, 10),
          startPaginator,
          endPaginator,
        },
      },
      false,
    );
  };

  handleSelectModal = value => {
    this.setState({
      selectModal: value,
    });
  };

  render() {
    let container;
    if (
      this.props.loading ||
      this.props.loadingDevice ||
      this.props.loadingVehicle ||
      this.props.status === 0 ||
      this.props.statusDevice === 0 ||
      this.props.statusVehicle === 0
    ) {
      container = <Loading />;
    } else if (
      !this.props.loading &&
      !this.props.loadingDevice &&
      !this.props.loadingVehicle &&
      this.props.status === 200 &&
      this.props.statusDevice === 200 &&
      this.props.statusVehicle === 200
    ) {
      container = (
        <section className="module--mapa">
          <div className="module--tablemapa__box height400">
            <MapaBox
              dataDevice={this.props.dataDevice.response.chargers}
              dataVehicle={this.props.dataVehicle.response}
              onModal={this.onModal}
            />
          </div>
          <Nav handleState={this.handleState} />
          <BoxTable
            handleSearch={this.handleSearch}
            handleSort={this.handleSort}
            search={this.state.search}
            handlePaginator={this.handlePaginator}
            handlePage={this.handlePage}
            data={this.props.data}
            type={this.state.type}
            onModal={this.onModal}
            pag={this.state.pag}
            sort={this.state.sort}
          />
          <Modal
            handleSelectModal={this.handleSelectModal}
            graph={this.props.dataVehicleGraph}
            loadingVehicleGraph={this.props.loadingVehicleGraph}
            content={this.state.modelContent}
            offModal={this.offModal}
            modal={this.state.modal}
            selectModal={this.state.selectModal}
          />
        </section>
      );
    } else if (
      this.props.status === 401 ||
      this.props.statusDevice === 401 ||
      this.props.statusVehicle === 401
    ) {
      container = <ModalClose history={this.props.history} state={true} />;
    } else {
      container = <Message />;
    }

    return container;
  }
}

const mapStateToProps = state => ({
  data: state.mapa.data,
  loading: state.mapa.loading,
  status: state.mapa.status,
  dataVehicle: state.mapa.dataVehicle,
  loadingVehicle: state.mapa.loadingVehicle,
  statusVehicle: state.mapa.statusVehicle,
  dataDevice: state.mapa.dataDevice,
  loadingDevice: state.mapa.loadingDevice,
  statusDevice: state.mapa.statusDevice,
  dataVehicleGraph: state.mapa.dataVehicleGraph,
  loadingVehicleGraph: state.mapa.loadingVehicleGraph,
  statusVehicleGraph: state.mapa.statusVehicleGraph,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mapaActions, dispatch),
});

Mapa.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Mapa);
