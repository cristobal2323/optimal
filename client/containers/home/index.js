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
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {}

  render() {
    return (
      <section>
        <Main />
        <Table />
        <Area />
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
