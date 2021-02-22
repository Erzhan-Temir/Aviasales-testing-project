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

    case `CHANGE_FILTER_VALUE`:
      const filtersSet = new Set(state.currentFilters);
      const newFilter = action.payload;

      if (filtersSet.has(newFilter)) {
        filtersSet.delete(newFilter);
      } else {
        filtersSet.add(newFilter);
      }

      return Object.assign({}, state, {
        currentFilters: Array.from(filtersSet),
      });
  }
  return state;
};

export default reducer;

// const filters = state.currentFilters.slice();
//       const filtersSet
//       const newFilter = action.payload;
//       const indexOfNewFilter = filters.indexOf(newFilter);

//       if (indexOfNewFilter > -1) {
//         filters.splice(indexOfNewFilter, 1);
//       } else {
//         filters.push(newFilter);
//       }

//       return Object.assign({}, state, {
//         currentFilters: filters,
//       });
