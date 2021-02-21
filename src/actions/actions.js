import API from '../api/api';

export const ActionCreator = {
  fetchTicketsRequest: () => {
    return {
      type: `FETCH_TICKETS_REQUEST`,
    };
  },
  fetchTicketsSuccess: (tickets) => {
    return {
      type: `FETCH_TICKETS_REQUEST_SUCCESS`,
      payload: tickets
    };
  },
  fetchTicketsError: () => {
    return {
      type: `FETCH_TICKETS_REQUEST_ERROR`,
    };
  }
};

export const fetchTickets = () => () => (dispatch) => {
  dispatch(ActionCreator.fetchTicketsRequest());
  API.getTickets()
    .then((response) => dispatch(ActionCreator.fetchTicketsSuccess(response.tickets)))
    .catch(() => dispatch(ActionCreator.fetchTicketsError()));
};
