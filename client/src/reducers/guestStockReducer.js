import { RECEIVE_GUEST_STOCK, CLEAR_GUEST_STOCK } from '../actions/guestStock';

const guestStockReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_GUEST_STOCK:
            return action.guestStock;
        case CLEAR_GUEST_STOCK: 
            return {};
        default:
            return state
    }
}

export default guestStockReducer;