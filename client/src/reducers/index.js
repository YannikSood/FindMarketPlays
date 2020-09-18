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
import guestStockReducer from './guestStockReducer';
import fromSDScreenReducer from './fromSDScreenReducer';

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
  fromSDScreen: fromSDScreenReducer,
  userInfo: userInfoReducer,
  guestStock: guestStockReducer
});

export default rootReducer;
