import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import AppReducer from "./reducers/appReducer";
import UpdateNum from "./reducers/updateNum";
const PersistConfig = {
  key: "root",
  storage,
  whitelist: ["app", "UpdateNum"]
};

const AllReducer = {
  app: AppReducer,
  UpdateNum: UpdateNum,
};

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
