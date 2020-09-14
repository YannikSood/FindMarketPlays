export const RECEIVE_DELETING_PROSPECT = "RECEIVE_DELETING_PROSPECT";

export const receiveDeletingProspect = (deletingProspect) => ({
    type: RECEIVE_DELETING_PROSPECT,
    deletingProspect
})