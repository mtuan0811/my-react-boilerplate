import { createSelector } from "reselect";
import { initialState } from "../store/global";

const selectGlobal = (state) => state.global || initialState;

export const makeSelectCurrentLoadingState = () =>
  createSelector(selectGlobal, (globalState) => globalState.loading);
