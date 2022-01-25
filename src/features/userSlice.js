import { createSlice } from '@reduxjs/toolkit';

//setting the user to be null initially - to prevent unauthorized logins
const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

//exporting actions that can be performed in this data-layer
export const { login, logout } = userSlice.actions;

//in state.user.user, 1st user is the main data layer 
//while 2nd user is the info object in this layer
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
