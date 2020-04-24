import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import Perfil from '../../components/person_details/perfil';
import Area from '../../components/person_details/area';
import Table from '../../components/person_details/Table';

class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      riesgo: true,
      aptitud: true,
      conducta: true,
      optimo: true,
      enriesgo: true,
      alerta: true,
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {}

  handleChangeStart = async (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEnd = async (date) => {
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

  render() {
    return (
      <section>
        <Perfil />
        <Area
          handleFilter={this.handleFilter}
          riesgo={this.state.riesgo}
          aptitud={this.state.aptitud}
          conducta={this.state.conducta}
          optimo={this.state.optimo}
          enriesgo={this.state.enriesgo}
          alerta={this.state.alerta}
          startDate={this.state.startDate}
          handleChangeStart={this.handleChangeStart}
          endDate={this.state.endDate}
          handleChangeEnd={this.handleChangeEnd}
        />
        <Table />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

PersonDetails.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
