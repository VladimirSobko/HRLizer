import React, { createContext, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import reducer from 'store/rootReducer';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from 'constants/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
export const AuthContext = createContext({} as any);

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
  <AuthContext.Provider value={{ firebase, auth, firestore }}>
    <Provider store={store}>
      <Suspense fallback={<></>}>
        <LazyRouter />
      </Suspense>
    </Provider>
  </AuthContext.Provider>,
  container,
);
