import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import reducer from 'store/rootReducer';

const LazyRouter = lazy(() =>
  import('containers/Router').then(({ RouterContainer }) => ({
    default: RouterContainer,
  })),
);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<></>}>
      <LazyRouter />
    </Suspense>
  </Provider>,
  container,
);
