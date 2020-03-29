import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as filtersActions from '../../actions/filters';

/* Component */
import Filters from '../../components/filters/models';
import Modal from '../common/modal';

class FilterModels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.filtersActions.fetchModelsFilter({});
  }

  render() {
    let container;
    if (this.props.statusModels !== 401) {
      container = (
        <React.Fragment>
          {!this.props.loadingModels && (
            <Filters
              data={this.props.dataModels}
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
  dataModels: state.filters.dataModels,
  loadingModels: state.filters.loadingModels,
  statusModels: state.filters.statusModels,
});

const mapDispatchToProps = dispatch => ({
  filtersActions: bindActionCreators(filtersActions, dispatch),
});

FilterModels.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterModels);
