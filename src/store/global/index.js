import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "global",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});
export const { showLoading, hideLoading } = globalReducer.actions;
export const initialState = globalReducer.getInitialState;
export default globalReducer.reducer;
