import { RECEIVE_NOTE } from "../actions/notes"
 
const noteReducer = (state={}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NOTE:
            console.log(action)
            return action.note
        default: return state
    };
}

export default noteReducer;