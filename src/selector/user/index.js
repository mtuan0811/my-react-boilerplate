import { createSelector } from "reselect";
// import { initialState } from "../../store/user";
const selectUser = (state) => state.user || { value: 0 };

export const makeSelectCurrentUser = () =>
  createSelector(selectUser, (globalState) => globalState.value);
