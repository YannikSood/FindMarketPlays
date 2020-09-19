import { RECEIVE_FROM_SDSCREEN } from '../actions/fromSDScreen';

const receiveFromSDScreenReducer = (state=false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_FROM_SDSCREEN:
            return action.flag;
        default:
            return state;
    }
}

export default receiveFromSDScreenReducer;