import { RECEIVE_SORT } from '../actions/sort';

const sortReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SORT: 
            return action.sort
        default: return state
    }
}

export default sortReducer