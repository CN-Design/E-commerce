import { createStore } from "redux";
import rootReducers from "../Reducer/combineReducer";

const store = createStore(rootReducers);

export default store;