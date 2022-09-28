import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(rootReducer);
const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: "SET_USER"});
}


export default store;
