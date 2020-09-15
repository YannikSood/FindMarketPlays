import { RECEIVE_PROSPECT, CLEAR_PROSPECT } from "../actions/prospect";

const prospectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROSPECT:
      return action.prospect;
    case CLEAR_PROSPECT:
      return {};
    default:
      return state;
  }
};

export default prospectReducer;
