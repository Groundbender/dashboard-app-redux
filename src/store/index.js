import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// настройки //(1)
const persistConfig = {
  key: "root",
  storage,
  // сохранять только ключи
  whitelist: ["filters", "positions"],
  // не сохранять  ключи
  // blacklist: []
};

// обертка для работы с нашим rootReducer //(2)
const persistedReducer = persistReducer(persistConfig, rootReducer);

//(3)
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
// передаем в корневой index.js //(4)
export const persistor = persistStore(store);
