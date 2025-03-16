import { createStore } from 'redux';
import { counterReducer } from './reducers/counter.reducer';
import { userReducer } from './reducers/user.reducer';

import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));