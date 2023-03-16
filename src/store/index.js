import { configureStore  } from '@reduxjs/toolkit'
// import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user'
import globalReducer from './global';
import { rootSaga }  from '../sagas'

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

// Create the store with saga middleware
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
  },
  middleware: defaultMiddleware => [...defaultMiddleware({ serializableCheck: false}), ...middlewares],
})
sagaMiddleware.run(rootSaga)
