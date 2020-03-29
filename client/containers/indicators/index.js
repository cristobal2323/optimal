import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

/* Actions */
import * as indicatorsActions from '../../actions/indicators';

/* Component */
import Header from '../../components/indicators/header';
import Cards from '../../components/indicators/cards';
import Graph from '../../components/indicators/graph';
import Message from '../../components/common/message';
import Modal from '../common/modal';
import Loading from '../common/loading';

class Indicators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      type: 'day',
      puntoCarga: '',
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    await this.props.actions.fetchIndicators({
      type: this.state.type,
      date: null,
      puntoCarga: null,
    });
  }

  componentWillUnmount() {
    this.props.actions.reset();
  }

  handleChangeStart = async date => {
    const punto = this.state.puntoCarga
      ? this.state.puntoCarga
      : document.getElementById('punto-carga').value;

    this.setState({
      startDate: date,
    });

    const otherDate = document.getElementById('date-end');
    const selectDay = document.getElementById('select-day');
    const selectWeek = document.getElementById('select-week');
    const selectMonth = document.getElementById('select-month');
    const selectYear = document.getElementById('select-year');

    if (!date && otherDate.value == '') {
      if (
        !selectWeek.classList.contains('active') &&
        !selectMonth.classList.contains('active') &&
        !selectYear.classList.contains('active')
      ) {
        selectDay.classList.add('active');
        this.setState({
          type: selectDay.dataset.value,
        });
        await this.props.actions.fetchIndicators({
          type: selectDay.dataset.value,
          date: null,
          puntoCarga: document.getElementById('punto-carga').value,
        });
      }
    } else if (otherDate.value != '' && date) {
      const filters = document.querySelectorAll('[data-filter]');
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove('active');
      }
      const start = moment(date).format('DD-MM-YYYY');
      const end = otherDate.value;
      this.setState({
        type: null,
      });
      await this.props.actions.fetchIndicators({
        date: { start, end },
        type: null,
        puntoCarga: document.getElementById('punto-carga').value,
      });
    }
  };

  handleChangeEnd = async date => {
    const punto = this.state.puntoCarga
      ? this.state.puntoCarga
      : document.getElementById('punto-carga').value;

    this.setState({
      endDate: date,
    });

    const otherDate = document.getElementById('date-start');
    const selectDay = document.getElementById('select-day');
    const selectWeek = document.getElementById('select-week');
    const selectMonth = document.getElementById('select-month');
    const selectYear = document.getElementById('select-year');

    if (!date && otherDate.value == '') {
      if (
        !selectWeek.classList.contains('active') &&
        !selectMonth.classList.contains('active') &&
        !selectYear.classList.contains('active')
      ) {
        selectDay.classList.add('active');
        this.setState({
          type: selectDay.dataset.value,
        });
        await this.props.actions.fetchIndicators({
          type: selectDay.dataset.value,
          date: null,
          puntoCarga: document.getElementById('punto-carga').value,
        });
      }
    } else if (otherDate.value != '' && date) {
      const filters = document.querySelectorAll('[data-filter]');
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove('active');
      }
      const end = moment(date).format('DD-MM-YYYY');
      const start = otherDate.value;
      this.setState({
        type: null,
      });
      await this.props.actions.fetchIndicators({
        date: { start, end },
        type: null,
        puntoCarga: document.getElementById('punto-carga').value,
      });
    }
  };

  handleSelect = async event => {
    const punto = this.state.puntoCarga
      ? this.state.puntoCarga
      : document.getElementById('punto-carga').value;

    this.setState({
      startDate: null,
      endDate: null,
      type: event.target.dataset.value,
      puntoCarga: punto,
    });

    const filters = document.querySelectorAll('[data-filter]');
    for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove('active');
    }
    event.target.classList.add('active');

    await this.props.actions.fetchIndicators({
      type: event.target.dataset.value,
      date: null,
      puntoCarga: document.getElementById('punto-carga').value,
    });
  };

  handleMedidor = async event => {
    let date;
    if (
      document.getElementById('date-start').value !== '' &&
      document.getElementById('date-end').value !== ''
    ) {
      date = {
        start: document.getElementById('date-start').value,
        end: document.getElementById('date-end').value,
      };
    } else {
      date = null;
    }
    this.setState({
      puntoCarga: event.target.value,
    });

    await this.props.actions.fetchIndicators({
      date,
      type: this.state.type,
      puntoCarga: event.target.value,
    });
  };

  render() {
    let container;
    if (this.props.loading && this.props.status === 0) {
      container = <Loading />;
    } else if (this.props.loading && this.props.status === 200) {
      container = (
        <section className="module--indicators">
          <Header
            startDate={this.state.startDate}
            handleChangeStart={this.handleChangeStart}
            endDate={this.state.endDate}
            handleChangeEnd={this.handleChangeEnd}
            handleSelect={this.handleSelect}
            puntoCarga={this.state.puntoCarga}
          />
          <Loading />
        </section>
      );
    } else if (!this.props.loading && this.props.status === 200) {
      container = (
        <section className="module--indicators">
          <Header
            data={this.props.data}
            startDate={this.state.startDate}
            handleChangeStart={this.handleChangeStart}
            endDate={this.state.endDate}
            handleChangeEnd={this.handleChangeEnd}
            handleSelect={this.handleSelect}
            handleMedidor={this.handleMedidor}
            puntoCarga={this.state.puntoCarga}
          />
          <Cards data={this.props.data} />
          <Graph
            start={this.state.startDate}
            end={this.state.endDate}
            type={this.state.type}
            data={this.props.data}
          />
        </section>
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
  data: state.indicators.data,
  loading: state.indicators.loading,
  status: state.indicators.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(indicatorsActions, dispatch),
});

Indicators.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Indicators);
