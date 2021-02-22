import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreator} from '../actions/actions';

const withReduxFilter = (Component) => {
  const WithReduxFilter = (props) => {
    return (
      <Component {...props} />
    );
  };

  const mapStateToProps = (state) => {
    return {
      currentFilters: state.currentFilters
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      changeFilter: ActionCreator.changeFilter
    }, dispatch);
  };

  WithReduxFilter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxFilter);
};

export default withReduxFilter;
