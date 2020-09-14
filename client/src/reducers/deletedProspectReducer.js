import { RECEIVE_DELETED_PROSPECT } from '../actions/deletedProspect';

const deletedProspectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DELETED_PROSPECT:
      return action.deletedProspect;
    default:
      return state;
  }
};

export default deletedProspectReducer;
