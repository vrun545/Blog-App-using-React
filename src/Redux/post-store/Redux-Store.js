import {createStore , applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import postsReducer from '../../Redux/post-reducers/postHandler';
import usersReducer from '../../Redux/post-reducers/categoryHandler';
import storage from "redux-persist/lib/storage";
import {persistReducer , persistStore} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key:'persist-key',
    storage
}

const reducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer,applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export { store }
export { persistor }