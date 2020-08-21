import { createSlice } from '@reduxjs/toolkit';

// SLICE
const authSlice = createSlice({
  name: 'AUTH',
  initialState: {
    currentUser: {},
  },
  reducers: {
    receiveUser: shapeUser,
  },
});

export default authSlice.reducer;

// ACTIONS
export const {
  receiveUser,
} = authSlice.actions;

// REDUCER HELPERS
function shapeUser(state, action) {
  const { user } = action.payload;
  return {
    ...state,
    currentUser: {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
    },
  };
}
// THUNKS -- ASYNC ACTION CREATORS
