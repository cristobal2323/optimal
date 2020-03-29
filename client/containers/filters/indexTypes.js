import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as filtersActions from '../../actions/filters';

/* Component */
import Filters from '../../components/filters/types';
import Modal from '../common/modal';

class FilterTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.filtersActions.fetchTypesFilter({});
  }

  render() {
    let container;
    if (this.props.statusTypes !== 401) {
      container = (
        <React.Fragment>
          {!this.props.loadingTypes && (
            <Filters
              data={this.props.dataTypes}
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
  dataTypes: state.filters.dataTypes,
  loadingTypes: state.filters.loadingTypes,
  statusTypes: state.filters.statusTypes,
});

const mapDispatchToProps = dispatch => ({
  filtersActions: bindActionCreators(filtersActions, dispatch),
});

FilterTypes.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTypes);
