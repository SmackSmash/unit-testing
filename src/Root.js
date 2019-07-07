import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

export default props => {
  return (
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      {props.children}
    </Provider>
  );
};
