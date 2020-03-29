import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import interval from 'interval-promise';

/* Actions */
import * as cop25_reinaActions from '../../actions/cop25_reina';

/* Component */
import Button from '../../components/cop25_reina/button';
import Header from '../../components/cop25_reina/header';
import Indicators from '../../components/cop25_reina/indicators';
import Message from '../../components/common/message';
import Modal from '../common/modal';
import Loading from '../common/loading';
import '../../styles/img/larein.jpg';

let stoppedExternally = false;
const stopExternally = () => {
  stoppedExternally = true;
};

class Cop25Reina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setTime: null,
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    let inicio = 0;
    let load = true;
    interval(async (iteration, stop) => {
      if (stoppedExternally) {
        stop();
      }

      if (inicio > 0) {
        load = false;
      }
      this.props.actions.fetchCop25Reina({}, load);
      inicio++;
    }, 5000);
  }

  componentWillUnmount() {
    this.props.actions.resetCop25Reina();
    stopExternally();
  }

  render() {
    let container;
    if (this.props.loading && this.props.status === 0) {
      container = <Loading />;
    } else if (!this.props.loading && this.props.status === 200) {
      container = (
        <section className="module--cop25 reina">
          <div className="opacity-cop25" />
          <Header />
          <Button />
          <Indicators data={this.props.data} />
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
  data: state.cop25Reina.data,
  loading: state.cop25Reina.loading,
  status: state.cop25Reina.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(cop25_reinaActions, dispatch),
});

Cop25Reina.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cop25Reina);
