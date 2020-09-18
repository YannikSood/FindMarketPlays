export const RECEIVE_PROSPECT_UO = "RECEIVE_PROSPECT_UO";
export const CLEAR_PROSPECT_UO = "CLEAR_PROSPECT_UO";

export const receiveProspectUO = (prospectUO) => ({
    type: RECEIVE_PROSPECT_UO,
    prospectUO
})

export const clearProspectUO = () => ({
    type: CLEAR_PROSPECT_UO
})