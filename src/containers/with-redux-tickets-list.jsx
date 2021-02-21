import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTickets} from '../actions/actions';

const withReduxTicketsList = (Component) => {
  const WithReduxTicketsList = (props) => {
    useEffect(() => {
      props.fetchTickets();
      // return () => {
      //   cleanup
      // };
    }, []);

    return (
      <Component {...props} />
    );
  };

  const mapStateToProps = (state) => {
    return {
      tickets: state.tickets,
      isLoading: state.isLoading
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchTickets: fetchTickets()
    }, dispatch);
  };

  WithReduxTicketsList.propTypes = {
    fetchTickets: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReduxTicketsList);
};

export default withReduxTicketsList;
