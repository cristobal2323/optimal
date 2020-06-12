import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

/* Actions */
import * as homeActions from '../../actions/home';

/* Components */
import Modal from '../common/modal';
import Main from '../../components/home/main';
import Table from '../../components/home/table';
import Area from '../../components/home/area';
import Paginator from '../../components/home/paginator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFilter: 2,
      startDate: null,
      endDate: null,
      riesgo: true,
      fit2000: true,
      ktest: true,
      sobereye: true,
      conducta: true,
      optimo: true,
      enriesgo: true,
      alerta: true,
      bajoRiesgo: true,
      turnos: [],
      pag: {
        main: 1,
        start: 0,
        end: 10,
        sum: 10,
        startPaginator: 1,
        endPaginator: 10,
      },
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    /* Fetch Area turnos */
    await this.props.actions.fetchCrudListAreaTurnos({});

    /* Fetch Tortas */
    await this.props.actions.fetchCrudListTortas({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Turnos más riesgosos */
    await this.props.actions.fetchCrudListTurnosMasRiesgosos({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Graph */
    await this.props.actions.fetchCrudListGraph({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Table */
    await this.props.actions.fetchCrudListTable({
      cliente_id: null,
      reg_inicio: 1,
      reg_fin: 10,
      alcance_consulta: this.state.typeFilter,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Table  Count */
    await this.props.actions.fetchCrudListTableCount({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });
  }

  componentWillUnmount() {
    this.props.actions.resetCrudHome();
    this.props.actions.resetHomeFilter();
  }

  /* Función que controla los turnos */
  handleSelectShifts = async (e) => {
    let arr = this.state.turnos;
    const index = this.state.turnos.indexOf(
      parseInt(e.target.dataset.value, 10),
    );

    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(parseInt(e.target.dataset.value, 10));
    }

    this.setState({
      turnos: arr,
      pag: {
        main: 1,
        start: 0,
        end: 10,
        sum: 10,
        startPaginator: 1,
        endPaginator: 10,
      },
    });

    /* Reset los filtros */
    this.props.actions.resetCrudHome();

    /* Fetch Tortas */
    await this.props.actions.fetchCrudListTortas({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde:
        this.state.typeFilter === 5
          ? moment(this.state.startDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      hasta:
        this.state.typeFilter === 5
          ? moment(this.state.endDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      area_turnos: arr,
    });

    /* Fetch Turnos más riesgosos */
    await this.props.actions.fetchCrudListTurnosMasRiesgosos({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde:
        this.state.typeFilter === 5
          ? moment(this.state.startDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      hasta:
        this.state.typeFilter === 5
          ? moment(this.state.endDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      area_turnos: arr,
    });

    /* Fetch Graph */
    await this.props.actions.fetchCrudListGraph({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde:
        this.state.typeFilter === 5
          ? moment(this.state.startDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      hasta:
        this.state.typeFilter === 5
          ? moment(this.state.endDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      area_turnos: arr,
    });

    /* Fetch Table */
    await this.props.actions.fetchCrudListTable({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      reg_inicio: 1,
      reg_fin: 10,
      desde:
        this.state.typeFilter === 5
          ? moment(this.state.startDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      hasta:
        this.state.typeFilter === 5
          ? moment(this.state.endDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      area_turnos: arr,
    });

    /* Fetch Table Count */
    await this.props.actions.fetchCrudListTableCount({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      desde:
        this.state.typeFilter === 5
          ? moment(this.state.startDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      hasta:
        this.state.typeFilter === 5
          ? moment(this.state.endDate, 'MM-DD-YYYY').format('MM-DD-YYYY')
          : null,
      area_turnos: arr,
    });
  };

  /* Función que cambio las fechas */
  handleChangeStart = async (date) => {
    const dateEnd = document.getElementById('date-end').value;
    this.setState({
      startDate: date,
    });
    if (date && this.state.endDate) {
      this.setState({
        typeFilter: 5,
        pag: {
          main: 1,
          start: 0,
          end: 10,
          sum: 10,
          startPaginator: 1,
          endPaginator: 10,
        },
      });

      /* Reset los filtros */
      this.props.actions.resetCrudHome();

      /* Fetch Tortas */
      await this.props.actions.fetchCrudListTortas({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        hasta: moment(dateEnd, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Turnos más riesgosos */
      await this.props.actions.fetchCrudListTurnosMasRiesgosos({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        hasta: moment(dateEnd, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Graph */
      await this.props.actions.fetchCrudListGraph({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        hasta: moment(dateEnd, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Table  */
      await this.props.actions.fetchCrudListTable({
        cliente_id: null,
        alcance_consulta: 5,
        reg_inicio: 1,
        reg_fin: 10,
        desde: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        hasta: moment(dateEnd, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Table  Count */
      await this.props.actions.fetchCrudListTableCount({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        hasta: moment(dateEnd, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });
    }
  };

  handleChangeEnd = async (date) => {
    const dateStart = document.getElementById('date-start').value;
    this.setState({
      endDate: date,
    });
    if (date && this.state.startDate) {
      this.setState({
        typeFilter: 5,
        pag: {
          main: 1,
          start: 0,
          end: 10,
          sum: 10,
          startPaginator: 1,
          endPaginator: 10,
        },
      });

      /* Reset los filtros */
      this.props.actions.resetCrudHome();

      /* Fetch Tortas */
      await this.props.actions.fetchCrudListTortas({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(dateStart, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        hasta: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Turnos más riesgosos */
      await this.props.actions.fetchCrudListTurnosMasRiesgosos({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(dateStart, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        hasta: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch Graph */
      await this.props.actions.fetchCrudListGraph({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(dateStart, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        hasta: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch  Table */
      await this.props.actions.fetchCrudListTable({
        cliente_id: null,
        alcance_consulta: 5,
        reg_inicio: 1,
        reg_fin: 10,
        desde: moment(dateStart, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        hasta: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });

      /* Fetch  Table Count */
      await this.props.actions.fetchCrudListTableCount({
        cliente_id: null,
        alcance_consulta: 5,
        desde: moment(dateStart, 'DD-MM-YYYY').format('MM-DD-YYYY'),
        hasta: moment(date, 'MM-DD-YYYY').format('MM-DD-YYYY'),
        area_turnos: this.state.turnos,
      });
    }
  };

  /* Función cual controla los filtros del graph */
  handleFilter = (e) => {
    this.setState({
      [e.target.dataset.name]: e.target.classList.contains('active')
        ? false
        : true,
    });
  };

  /* Función donde vamos a cambiar el filtro de fercha */
  handleTypeFilter = async (value) => {
    this.setState({
      startDate: null,
      endDate: null,
      typeFilter: value,
      pag: {
        main: 1,
        start: 0,
        end: 10,
        sum: 10,
        startPaginator: 1,
        endPaginator: 10,
      },
    });

    /* Reset los filtros */
    this.props.actions.resetCrudHome();

    /* Fetch Tortas */
    await this.props.actions.fetchCrudListTortas({
      cliente_id: null,
      alcance_consulta: value,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Turnos más riesgosos */
    await this.props.actions.fetchCrudListTurnosMasRiesgosos({
      cliente_id: null,
      alcance_consulta: value,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Graph */
    await this.props.actions.fetchCrudListGraph({
      cliente_id: null,
      alcance_consulta: value,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Table */
    await this.props.actions.fetchCrudListTable({
      cliente_id: null,
      alcance_consulta: value,
      reg_inicio: 1,
      reg_fin: 10,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });

    /* Fetch Table Count */
    await this.props.actions.fetchCrudListTableCount({
      cliente_id: null,
      alcance_consulta: value,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });
  };

  /* Paginador */
  handlePaginator = async (event) => {
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

    /* Fetch Table */
    await this.props.actions.fetchCrudListTable({
      cliente_id: null,
      alcance_consulta: this.state.typeFilter,
      reg_inicio: start,
      reg_fin: end,
      desde: this.state.startDate,
      hasta: this.state.endDate,
      area_turnos: this.state.turnos,
    });
  };

  render() {
    if (
      this.props.statusAreaTurnos === 401 ||
      this.props.statusTortas === 401 ||
      this.props.statusTurnosMasRiesgosos === 401 ||
      this.props.statusTable === 401 ||
      this.props.statusTableCount === 401 ||
      this.props.statusGraph === 401
    ) {
      return <Modal history={this.props.history} state={true} />;
    }

    return (
      <section>
        <Main
          startDate={this.state.startDate}
          handleChangeStart={this.handleChangeStart}
          endDate={this.state.endDate}
          handleChangeEnd={this.handleChangeEnd}
          turnos={this.state.turnos}
          handleSelectShifts={this.handleSelectShifts}
          dataAreaTurnos={this.props.dataAreaTurnos}
          statusAreaTurnos={this.props.statusAreaTurnos}
          handleTypeFilter={this.handleTypeFilter}
          typeFilter={this.state.typeFilter}
          loadingTortas={this.props.loadingTortas}
          dataTortas={this.props.dataTortas}
          loadingTurnosMasRiesgosos={this.props.loadingTurnosMasRiesgosos}
          dataTurnosMasRiesgosos={this.props.dataTurnosMasRiesgosos}
        />
        <Area
          handleFilter={this.handleFilter}
          riesgo={this.state.riesgo}
          fit2000={this.state.fit2000}
          ktest={this.state.ktest}
          sobereye={this.state.sobereye}
          conducta={this.state.conducta}
          optimo={this.state.optimo}
          enriesgo={this.state.enriesgo}
          alerta={this.state.alerta}
          bajoRiesgo={this.state.bajoRiesgo}
          dataGraph={this.props.dataGraph}
          loadingGraph={this.props.loadingGraph}
        />
        <Table
          loadingTable={this.props.loadingTable}
          dataTable={this.props.dataTable}
        />
        {!this.props.loadingTableCount && (
          <Paginator
            handlePaginator={this.handlePaginator}
            num={Math.round(
              this.props.dataTableCount.datos.paginador.total /
                this.state.pag.sum,
            )}
            pag={this.state.pag}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  dataTurnosMasRiesgosos: state.home.dataTurnosMasRiesgosos,
  loadingTurnosMasRiesgosos: state.home.loadingTurnosMasRiesgosos,
  statusTurnosMasRiesgosos: state.home.statusTurnosMasRiesgosos,

  dataAreaTurnos: state.home.dataAreaTurnos,
  loadingAreaTurnos: state.home.loadingAreaTurnos,
  statusAreaTurnos: state.home.statusAreaTurnos,

  dataTortas: state.home.dataTortas,
  loadingTortas: state.home.loadingTortas,
  statusTortas: state.home.statusTortas,

  dataGraph: state.home.dataGraph,
  loadingGraph: state.home.loadingGraph,
  statusGraph: state.home.statusGraph,

  dataTable: state.home.dataTable,
  loadingTable: state.home.loadingTable,
  statusTable: state.home.statusTable,

  dataTableCount: state.home.dataTableCount,
  loadingTableCount: state.home.loadingTableCount,
  statusTableCount: state.home.statusTableCount,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(homeActions, dispatch),
});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
