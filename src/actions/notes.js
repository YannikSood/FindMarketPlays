export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_ERRORS = "RECEIVE_ERROR";

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})