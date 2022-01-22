import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelName: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload
    }
  },
});

export const { setChannelId } = appSlice.actions;

//in state.app.channelId, app is the main data layer while channelId is the info in this layer
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
