import { createStore } from "redux";
import userReducer from "./User/UserReducer";

const store = createStore(userReducer);

export default store;