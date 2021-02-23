import React from 'react';
import {ActionCreator} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const withReduxTabs = (Component) => {
  const WithReduxTabs = (props) => {
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => {
    return {
      currentSorting: state.currentSorting,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      changeSorting: ActionCreator.changeSorting
    }, dispatch);
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxTabs);
};

export default withReduxTabs;
