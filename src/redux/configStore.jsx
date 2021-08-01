import { combineReducers, createStore } from "redux";
import { GameXucXacReducer } from "./reducers/GameXucXacReducer";

const rootReducer = combineReducers({
  //  các state ứng dụng sẽ được lưu tại đây
  GameXucXacReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
