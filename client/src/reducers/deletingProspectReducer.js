import { RECEIVE_DELETING_PROSPECT } from '../actions/deletingProspect';

const deletingProspectReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_DELETING_PROSPECT:
            return action.deletingProspect
        default:
            return state
    }
}

export default deletingProspectReducer;