import { RECEIVE_USER_INFO } from '../actions/userInfo';

const userInfoReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER_INFO: 
            return action.userInfo
        default: 
            return state
    }

}

export default userInfoReducer;