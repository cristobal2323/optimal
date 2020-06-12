import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fifo from '../../components/fifo/form';

/* Actions */
import * as homeActions from '../../actions/home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="fifo">
        <Fifo />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(homeActions, dispatch),
});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
