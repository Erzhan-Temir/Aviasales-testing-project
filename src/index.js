import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import {filterValues} from './utils/const';

const initialState = {
  tickets: [],
  isLoading: true,
  hasError: false,
  currentFilters: [filterValues[0].count],
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);
