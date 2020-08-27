import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './note';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer
});

export default rootReducer;
