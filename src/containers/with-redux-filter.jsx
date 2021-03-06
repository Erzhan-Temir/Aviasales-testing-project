import React from 'react';
import {ActionCreator} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxFilter);
};

export default withReduxFilter;
