import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    value: 0,
    user: {},
    token: ''
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    createInfo: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { incremented , createInfo } = userReducer.actions
export const initialState  = userReducer.getInitialState
export default userReducer.reducer
