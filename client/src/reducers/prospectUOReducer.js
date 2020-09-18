import { RECEIVE_PROSPECT_UO, CLEAR_PROSPECT_UO } from '../actions/prospectUO';

const prospectUOReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PROSPECT_UO: 
            return action.prospectUO;
        case CLEAR_PROSPECT_UO: 
            return {};
        default:
            return state;
    }
}

export default prospectUOReducer