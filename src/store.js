import { createStore, applyMiddleware } from "redux";
import rootRerducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(rootRerducer, applyMiddleware(thunk));

export default store;
