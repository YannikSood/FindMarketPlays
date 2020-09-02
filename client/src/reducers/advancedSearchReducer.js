import { RECEIVE_TICKER } from '../actions/advancedSearch';

const advancedSearchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TICKER:
            return action.ticker
        default: return state
    };
};

export default advancedSearchReducer;