import { RECEIVE_USER_LISTS } from "../actions/stockDiscover";

const stockDiscoverReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_LISTS:
      return action.lists;
    default:
      return state;
  }
};

export default stockDiscoverReducer;
