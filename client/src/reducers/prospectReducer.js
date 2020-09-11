import { RECEIVE_PROSPECT } from "../actions/prospect";

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
