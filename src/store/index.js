import { configureStore  } from '@reduxjs/toolkit'
// import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user'
import userSaga  from './../app/pages/Login/saga'

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
// const { run: runSaga } = sagaMiddleware;

// Create the store with saga middleware
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: defaultMiddleware => [...defaultMiddleware(), ...middlewares],
})
sagaMiddleware.run(userSaga)
