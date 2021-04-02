import { combineReducers } from "@reduxjs/toolkit";

import { mainSlice } from "./main/main.slice";

const reducer = combineReducers({
  main: mainSlice.reducer,
});

export type StateType = ReturnType<typeof reducer>;

export default reducer