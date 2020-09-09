import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import errorsReducer from './errorsReducer';
import advancedSearchReducer from './advancedSearchReducer';
import sortReducer from './sortReducer';
import stockDiscoverReducer from "./stockDiscoverReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  errors: errorsReducer,
  advancedSearch: advancedSearchReducer,
  sort: sortReducer,
  stockDiscover: stockDiscoverReducer

});

export default rootReducer;
