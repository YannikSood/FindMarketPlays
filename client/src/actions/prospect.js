export const RECEIVE_PROSPECT = "RECEIVE_PROSPECT";
export const CLEAR_PROSPECT = "CLEAR_PROSPECT";

export const receiveProspect = (prospect) => ({
    type: RECEIVE_PROSPECT,
    prospect
})

export const clearProspect = () => ({
    type: CLEAR_PROSPECT
})