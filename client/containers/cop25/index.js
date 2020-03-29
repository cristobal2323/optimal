import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import interval from 'interval-promise';
import Strings from '../../components/cop25/locale';

/* Actions */
import * as cop25Actions from '../../actions/cop25';

/* Component */
import Button from '../../components/cop25/button';
import Auspiciadores from '../../components/cop25/auspiciadores';
import Indicators from '../../components/cop25/indicators';
import Message from '../../components/common/message';
import Loading from '../common/loading';
import '../../styles/img/fondo-1.jpg';
import '../../styles/img/fondo-2.jpg';
import '../../styles/img/fondo-3.jpg';
import '../../styles/img/fondo-4.jpg';
import '../../styles/img/fondo-5.jpg';
import '../../styles/img/fondo-6.jpg';
import '../../styles/img/fondo-7.jpg';
import '../../styles/img/fondo-8.jpg';

let stoppedExternally = false;
const stopExternally = () => {
  stoppedExternally = true;
};

class Cop25 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalBackground: null,
      intervalAd: null,
      intervalTranslate: null,
      languaje: 'es',
    };
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    let inicio = 0;
    let load = true;
    stoppedExternally = false;

    interval(async (iteration, stop) => {
      if (stoppedExternally) {
        stop();
      }
      if (inicio > 0) {
        load = false;
      }
      await this.props.actions.fetchCop25({}, load);
      inicio++;
    }, 5000);

    let fondo = 0;
    let resta = 8;
    this.state.intervalBackground = setInterval(() => {
      const element = document.getElementById('module--newcop25');
      if (element) {
        element.classList.remove(`fondo-${resta}`);
        element.classList.add(`fondo-${fondo}`);

        if (fondo === 1) {
          fondo++;
          resta = 1;
        } else if (fondo === 8) {
          fondo = 1;
          resta = 8;
        } else {
          fondo++;
          resta = fondo - 1;
        }
      }
    }, 5000);

    const languaje = ['es', 'en', 'it', 'de', 'fr', 'Cyrillic', 'zh'];
    let countLeaguaje = 0;
    this.state.intervalTranslate = setInterval(() => {
      Strings.setLanguage(languaje[countLeaguaje]);
      this.setState({ languaje: languaje[countLeaguaje] });
      if (countLeaguaje === 6) {
        countLeaguaje = 0;
      } else {
        countLeaguaje++;
      }
    }, 60000);

    let segundo = 0;
    this.state.intervalAd = setInterval(() => {
      const auspiciadores = document.getElementById('auspiciadores');
      const fondoAuspiciadores = document.getElementById('fondo-auspiciadores');
      if (segundo === 1740) {
        auspiciadores.classList.remove(`hide`);
      } else if (segundo === 1752) {
        fondoAuspiciadores.classList.remove('fondo-1');
        fondoAuspiciadores.classList.add('fondo-2');
      } else if (segundo === 1764) {
        fondoAuspiciadores.classList.remove('fondo-2');
        fondoAuspiciadores.classList.add('fondo-3');
      } else if (segundo === 1776) {
        fondoAuspiciadores.classList.remove('fondo-3');
        fondoAuspiciadores.classList.add('fondo-4');
      } else if (segundo === 1788) {
        fondoAuspiciadores.classList.remove('fondo-4');
        fondoAuspiciadores.classList.add('fondo-5');
      } else if (segundo === 1800) {
        auspiciadores.classList.add(`hide`);
        fondoAuspiciadores.classList.remove('fondo-5');
        fondoAuspiciadores.classList.add('fondo-1');
        segundo = 0;
      }
      segundo++;
    }, 1000);
  }

  componentWillUnmount() {
    this.props.actions.resetCop25();
    clearInterval(this.state.intervalBackground);
    clearInterval(this.state.intervalAd);
    clearInterval(this.state.intervalTranslate);
    stopExternally();
  }

  render() {
    console.log(this.props.loading, this.props.status);
    let container;
    if (this.props.status === 0) {
      container = <Loading />;
    } else if (this.props.status === 200) {
      container = (
        <React.Fragment>
          <section
            id="module--newcop25"
            data-fondo="fondo"
            className="module--newcop25"
          >
            <Button />
            <Indicators data={this.props.data} />
          </section>
          <Auspiciadores />
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
  data: state.cop25.data,
  loading: state.cop25.loading,
  status: state.cop25.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(cop25Actions, dispatch),
});

Cop25.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cop25);
