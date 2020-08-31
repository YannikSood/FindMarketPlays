import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  errors: errorsReducer
});

export default rootReducer;
