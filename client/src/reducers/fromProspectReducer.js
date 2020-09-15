import { RECEIVE_FROM_PROSPECT } from '../actions/fromProspect';

const receiveFromProspectReducer = (state=false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_FROM_PROSPECT:
            return action.flag
        default:
            return state
    }
}

export default receiveFromProspectReducer;