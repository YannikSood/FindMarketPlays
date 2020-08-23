import { createSlice } from '@reduxjs/toolkit';

// SLICE
const authSlice = createSlice({
  name: 'AUTH',
  initialState: {
    currentUser: {},
    isAuthed: false,
  },
  reducers: {
    clearUser: () => ({
      currentUser: {},
      isAuthed: false,
    }),
    receiveUser: shapeUser,
  },
});

export default authSlice.reducer;

// ACTIONS
export const {
  clearUser,
  receiveUser,
} = authSlice.actions;

// REDUCER HELPERS
function shapeUser(state, action) {
  const { uid, email, displayName } = action.payload;
  return {
    ...state,
    currentUser: {
      id: uid,
      email,
      displayName,
    },
    isAuthed: true,
  };
}
// THUNKS -- ASYNC ACTION CREATORS
