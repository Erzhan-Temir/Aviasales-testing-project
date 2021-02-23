import React from 'react';
import {ActionCreator} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const withReduxShowMoreButton = (Component) => {
  const WithReduxShowMoreButton = (props) => {
    return <Component {...props} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      incRenderCount: ActionCreator.incRenderCount
    }, dispatch);
  };

  return connect(null, mapDispatchToProps)(WithReduxShowMoreButton);
};

export default withReduxShowMoreButton;
