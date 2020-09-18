export const RECEIVE_GUEST_STOCK = "RECEIVE_GUEST_STOCK";
export const CLEAR_GUEST_STOCK = "CLEAR_GUEST_STOCK";

export const clearGuestStock = () => ({
    type: CLEAR_GUEST_STOCK
})

export const receiveGuestStock = (guestStock) => ({
    type: RECEIVE_GUEST_STOCK,
    guestStock
})