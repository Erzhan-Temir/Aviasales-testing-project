import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreator} from '../actions/actions';

const withErrorBoundary = (ComponentToDecorate) => {
  class WithErrorBoundary extends Component {
    constructor(props) {
      super(props);
    }

    componentDidCatch() {
      this.props.fetchTicketsError();
    }

    render() {
      const {state: {hasError}} = this.props;

      if (hasError) {
        return (
          <p>Something is wrong. Reload the page, please.</p>
        );
      }

      return (
        <ComponentToDecorate {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      state
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchTicketsError: ActionCreator.fetchTicketsError
    }, dispatch);
  };

  WithErrorBoundary.propTypes = {
    state: PropTypes.shape({
      hasError: PropTypes.bool.isRequired,
    }),
    fetchTicketsError: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithErrorBoundary);
};

export default withErrorBoundary;
