import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelName: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  },
});

export const { setChannelInfo } = appSlice.actions;

//in state.app.channelId, app is the main data layer while channelId is the info in this layer
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
