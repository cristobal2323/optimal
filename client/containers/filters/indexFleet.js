import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as filtersActions from '../../actions/filters';

/* Component */
import Filters from '../../components/filters/fleet';
import Modal from '../common/modal';

class FilterFleet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.filtersActions.fetchFleetFilter({});
  }

  render() {
    let container;
    if (this.props.statusFleet !== 401) {
      container = (
        <React.Fragment>
          {!this.props.loadingFleet && (
            <Filters
              data={this.props.dataFleet}
              form={this.props.form}
              handleChange={this.props.handleChange}
            />
          )}
        </React.Fragment>
      );
    } else {
      container = <Modal history={this.props.history} state={true} />;
    }

    return container;
  }
}

const mapStateToProps = state => ({
  dataFleet: state.filters.dataFleet,
  loadingFleet: state.filters.loadingFleet,
  statusFleet: state.filters.statusFleet,
});

const mapDispatchToProps = dispatch => ({
  filtersActions: bindActionCreators(filtersActions, dispatch),
});

FilterFleet.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterFleet);
