import { createSlice } from "@reduxjs/toolkit";
import { saveDataUser , removeDataUser } from "../../hooks/auth/useLocalStorage";

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
      saveDataUser(action.payload)
    },
    logout: (state, action) => {
      state.user = null;
      state.token = '';
      removeDataUser()
    },
  },
});

export const { incremented , createInfo } = userReducer.actions
export const initialState  = userReducer.getInitialState
export default userReducer.reducer
