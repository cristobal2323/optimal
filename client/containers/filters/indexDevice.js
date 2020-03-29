import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as filtersActions from '../../actions/filters';

/* Component */
import Filters from '../../components/filters/device';
import Modal from '../common/modal';

class FilterDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.filtersActions.fetchDeviceFilter({});
  }

  render() {
    let container;
    if (this.props.statusDevices !== 401) {
      container = (
        <React.Fragment>
          {!this.props.loadingDevices && (
            <Filters
              data={this.props.dataDevices}
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
  dataDevices: state.filters.dataDevices,
  loadingDevices: state.filters.loadingDevices,
  statusDevices: state.filters.statusDevices,
});

const mapDispatchToProps = dispatch => ({
  filtersActions: bindActionCreators(filtersActions, dispatch),
});

FilterDevices.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDevices);
