import { RECEIVE_PROSPECT } from "../actions/prospects";

const prospectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROSPECT:
      return action.prospect;
    default:
      return state;
  }
};

export default prospectReducer;
