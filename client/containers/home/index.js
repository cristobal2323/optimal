import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as homeActions from '../../actions/home';

/* Components */
import Main from '../../components/home/main';
import Table from '../../components/home/table';
import Area from '../../components/home/area';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFilter: 1,
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
      turnos: [1],
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    /* Fetch Area turnos */
    await this.props.actions.fetchCrudListAreaTurnos({});

    /* Fetch Tortas */
    await this.props.actions.fetchCrudListTortas({
      cliente_id: 1,
      alcance_consulta: 2,
      desde: '04-01-2020',
      hasta: '04-30-2020',
      area_turnos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    });

    /* Fetch Turnos más riesgosos */
    await this.props.actions.fetchCrudListTurnosMasRiesgosos({
      cliente_id: 1,
      alcance_consulta: 2,
      desde: '04-01-2020',
      hasta: '04-30-2020',
      area_turnos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    });
  }

  /* Función que controla los turnos */
  handleSelectShifts = (e) => {
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
    });
  };

  handleChangeStart = async (date) => {
    if (date && this.state.endDate) {
      this.setState({
        typeFilter: 5,
      });
    }
    this.setState({
      startDate: date,
    });
  };

  handleChangeEnd = async (date) => {
    if (date && this.state.startDate) {
      this.setState({
        typeFilter: 5,
      });
    }
    this.setState({
      endDate: date,
    });
  };

  handleFilter = (e) => {
    this.setState({
      [e.target.dataset.name]: e.target.classList.contains('active')
        ? false
        : true,
    });
  };

  /* Función donde vamos a cambiar el filtro de fercha */
  handleTypeFilter = (value) => {
    this.setState({
      startDate: null,
      endDate: null,
      typeFilter: value,
    });
  };

  render() {
    console.log(this.props.dataTurnosMasRiesgosos);
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
        />
        <Table />
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
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(homeActions, dispatch),
});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
