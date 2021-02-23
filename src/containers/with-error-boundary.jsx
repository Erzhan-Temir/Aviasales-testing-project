import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ErrorBoundary from '../components/error-boundary/error-boundary';


const withErrorBoundary = (Component) => {
  class WithErrorBoundary extends PureComponent {
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
          <ErrorBoundary />
        );
      }

      return (
        <Component {...this.props} />
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
