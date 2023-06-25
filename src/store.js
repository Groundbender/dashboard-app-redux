import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./feature/filters/filter-slice";
import { positionReducer } from "./feature/positions/positions-slice";
export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devtools: true,
});
