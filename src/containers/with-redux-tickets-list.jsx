import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CHECK_LONG_POLLING_INTERVAL} from '../utils/const';
import {fetchTickets, checkLongPollingStopped} from '../actions/actions';
import totalSelector from '../selectors/selectors';

const withReduxTicketsList = (Component) => {
  const WithReduxTicketsList = (props) => {

    const {fetchTicketsProp, searchId, isLongPollingStopped, checkLongPollingStoppedProp} = props;


    useEffect(() => {
      fetchTicketsProp();
    }, []);


    useEffect(() => {
      const longPollingInterval = setInterval(() => {

        if (isLongPollingStopped) {
          fetchTicketsProp();
        }

        checkLongPollingStoppedProp(searchId);
      }, CHECK_LONG_POLLING_INTERVAL);

      return () => clearInterval(longPollingInterval);
    }, [isLongPollingStopped]);


    return (
      <Component {...props} />
    );
  };

  const mapStateToProps = (state) => {
    return {
      tickets: totalSelector(state),
      searchId: state.searchId,
      isLoading: state.isLoading,
      isLongPollingStopped: state.isLongPollingStopped,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchTicketsProp: fetchTickets(),
      checkLongPollingStoppedProp: checkLongPollingStopped()
    }, dispatch);
  };

  WithReduxTicketsList.propTypes = {
    fetchTicketsProp: PropTypes.func.isRequired,
    checkLongPollingStoppedProp: PropTypes.func.isRequired,
    searchId: PropTypes.string,
    isLongPollingStopped: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxTicketsList);
};

export default withReduxTicketsList;
