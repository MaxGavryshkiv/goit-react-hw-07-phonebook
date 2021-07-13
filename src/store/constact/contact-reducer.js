import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactAction from './contact-action';

const items = createReducer([], {
  [contactAction.addContact]: (state, { payload }) => [...state, payload],
  [contactAction.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactAction.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// import types from './contact-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
// export default combineReducers({
//   items,
//   filter,
// });
