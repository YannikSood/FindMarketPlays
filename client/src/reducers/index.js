import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import errorsReducer from './errorsReducer';
import advancedSearchReducer from './advancedSearchReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  errors: errorsReducer,
  advancedSearch: advancedSearchReducer
});

export default rootReducer;
