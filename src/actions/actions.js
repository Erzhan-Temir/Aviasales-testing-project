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
      payload: tickets,
    };
  },

  fetchTicketsError: () => {
    return {
      type: `FETCH_TICKETS_REQUEST_ERROR`,
    };
  },

  saveSearchId: (searchId) => {
    return {
      type: `SAVE_SEARCH_ID`,
      payload: searchId,
    };
  },

  checkLongPollingConnection: (isStopped) => {
    return {
      type: `CHECK_LONG_POLLING_CONNECTION`,
      payload: isStopped,
    };
  },

  changeFilter: (value) => {
    return {
      type: `CHANGE_FILTER_VALUE`,
      payload: value,
    };
  },

  changeSorting: (value) => {
    return {
      type: `CHANGE_SORTING_VALUE`,
      payload: value,
    };
  },

  incRenderCount: () => {
    return {
      type: `INCREASE_RENDER_COUNT`
    };
  }
};


export const fetchTickets = () => () => (dispatch) => {
  dispatch(ActionCreator.fetchTicketsRequest());

  API.getSearchId()
    .then((response) => response.data.searchId)
    .then((searchId) => {
      dispatch(ActionCreator.saveSearchId(searchId));
      return API.getTickets(searchId);
    })
    .then((response) => dispatch(ActionCreator.fetchTicketsSuccess(response.data.tickets)))
    .catch(() => dispatch(ActionCreator.fetchTicketsError()));

};

export const checkLongPollingStopped = () => (searchId) => (dispatch) => {
  API.getTickets(searchId)
    .then((response) => dispatch(ActionCreator.checkLongPollingConnection(response.data.stop)))
    .catch(() => dispatch(ActionCreator.checkLongPollingConnection(false)));
};
