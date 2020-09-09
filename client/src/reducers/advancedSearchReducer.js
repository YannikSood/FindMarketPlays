import { RECEIVE_TICKER, RECEIVE_RESULTS } from '../actions/advancedSearch';

const advancedSearchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TICKER:
            return Object.assign({}, state, {
                ticker: action.ticker
            })
        case RECEIVE_RESULTS:
            return Object.assign({}, state, {
                results: action.results
            })
        default: return state
    };
};

export default advancedSearchReducer;