import {filterValues, tabsButtonValues, RENDER_PER_STEP_COUNT} from '../utils/const';

const initialState = {
  tickets: [],
  searchId: null,
  isLoading: true,
  isLongPollingStopped: true,
  hasError: false,
  currentFilters: [filterValues[0].count],
  currentSorting: tabsButtonValues[0].value,
  renderCount: RENDER_PER_STEP_COUNT,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `FETCH_TICKETS_REQUEST`:
      return Object.assign({}, state, {
        isLoading: true,
      });


    case `FETCH_TICKETS_REQUEST_SUCCESS`:
      return Object.assign({}, state, {
        tickets: action.payload,
        isLoading: false,
        isLongPollingStopped: false,
      });


    case `FETCH_TICKETS_REQUEST_ERROR`:
      return Object.assign({}, state, {
        tickets: [],
        isLoading: false,
        hasError: true,
      });


    case `SAVE_SEARCH_ID`:
      return Object.assign({}, state, {
        searchId: action.payload,
      });


    case `CHECK_LONG_POLLING_CONNECTION`:
      return Object.assign({}, state, {
        isLongPollingStopped: action.payload,
      });


    case `CHANGE_FILTER_VALUE`:
      const filters = state.currentFilters.slice();
      const newFilter = action.payload;
      const indexOfNewFilter = filters.indexOf(newFilter);

      if (indexOfNewFilter > -1) {
        filters.splice(indexOfNewFilter, 1);
      } else {
        filters.push(newFilter);
      }

      return Object.assign({}, state, {
        currentFilters: filters,
      });


    case `CHANGE_SORTING_VALUE`:
      return Object.assign({}, state, {
        currentSorting: action.payload,
      });


    case `INCREASE_RENDER_COUNT`:
      return Object.assign({}, state, {
        renderCount: state.renderCount + RENDER_PER_STEP_COUNT,
      });
  }
  return state;
};

export default reducer;
