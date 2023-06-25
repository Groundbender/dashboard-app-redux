import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./feature/filters/filter-slice";
import { positionReducer } from "./feature/positions/positions-slice";
// localStorage
import {
  persistReducer,
  persistStore,
  FLUSH,
  PERSIST,
  PAUSE,
  PURGE,
  REHYDRATE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devtools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PERSIST, PAUSE, PURGE, REHYDRATE, REGISTER],
      }, // игнорируем middleware из коробки rtk
    }),
});
export const persistor = persistStore(store);
