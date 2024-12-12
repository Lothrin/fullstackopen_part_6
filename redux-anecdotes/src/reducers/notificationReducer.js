import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '', 
  isVisible: false,  
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload;
      state.isVisible = true;
    },

    hideNotification(state) {
      state.isVisible = false;
      state.message = '';
    },
  },
});

export const { setNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
