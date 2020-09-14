import { RECEIVE_PROSPECT_UO } from '../actions/prospectUO';

const prospectUOReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PROSPECT_UO: 
            return action.prospectUO
        default:
            return state;
    }
}

export default prospectUOReducer