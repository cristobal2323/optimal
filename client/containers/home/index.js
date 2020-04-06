import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import Main from '../../components/home/main';
import Table from '../../components/home/table';
import Area from '../../components/home/area';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      riesgo: true,
      aptitud: true,
      conducta: true,
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
        <Main />
        <Area
          handleFilter={this.handleFilter}
          riesgo={this.state.riesgo}
          aptitud={this.state.aptitud}
          conducta={this.state.conducta}
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

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
