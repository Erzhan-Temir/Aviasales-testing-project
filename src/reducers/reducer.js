const reducer = (state = {}, action) => {
  switch (action.type) {
    case `FETCH_TICKETS_REQUEST`:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case `FETCH_TICKETS_REQUEST_SUCCESS`:
      return Object.assign({}, state, {
        tickets: action.payload,
        isLoading: false,
      });
    case `FETCH_TICKETS_REQUEST_ERROR`:
      return Object.assign({}, state, {
        tickets: [],
        isLoading: false,
        hasError: true,
      });
  }
  return state;
};

export default reducer;
