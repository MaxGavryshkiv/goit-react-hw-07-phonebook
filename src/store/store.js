import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './constact/contact-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import { createStore, combineReducers, applyMiddleware } from 'redux';

//  import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contact: contactReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
