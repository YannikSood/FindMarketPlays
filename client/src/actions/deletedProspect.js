export const RECEIVE_DELETED_PROSPECT = "RECEIVE_DELETED_PROSPECT";

export const receiveDeletedProspect = (deletedProspect) => ({
    type: RECEIVE_DELETED_PROSPECT,
    deletedProspect
})