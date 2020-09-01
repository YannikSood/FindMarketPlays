import { RECEIVE_NOTE } from "../actions/notes"
 
const noteReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_NOTE:
            return action.note
        default: return state
    };
}

export default noteReducer;