import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  time: 0,
  isVisible: false,  
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationMessage(state, action) {
      const { message } = action.payload;
      state.message = message;
      state.isVisible = true;
    },

    hideNotification(state) {
      state.isVisible = false;
      state.message = ""
    },
  },
});

export const { setNotificationMessage, hideNotification } = notificationSlice.actions;

export const setNotification = (message, time = 5) => {
  return async (dispatch) => {
    await dispatch(setNotificationMessage({ message }));
    setTimeout(() => {
      dispatch(hideNotification());
    }, time * 1000);
  };
};

export default notificationSlice.reducer;
