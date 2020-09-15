import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
import errorsReducer from './errorsReducer';
import advancedSearchReducer from './advancedSearchReducer';
import stockDiscoverReducer from "./stockDiscoverReducer";
import prospectReducer from './prospectReducer';
import userInfoReducer from './userInfoReducer';
import deletedProspectReducer from './deletedProspectReducer';
import prospectUOReducer from './prospectUOReducer';
import deletingProspectReducer from './deletingProspectReducer';
import fromProspectReducer from './fromProspectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  errors: errorsReducer,
  advancedSearch: advancedSearchReducer,
  stockDiscover: stockDiscoverReducer,
  prospect: prospectReducer,
  deletedProspect: deletedProspectReducer,
  prospectUO: prospectUOReducer,
  deletingProspect: deletingProspectReducer,
  fromProspect: fromProspectReducer,
  userInfo: userInfoReducer
});

export default rootReducer;
