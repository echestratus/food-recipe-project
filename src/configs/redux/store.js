import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

export const store = createStore(rootReducer, applyMiddleware(thunk,logger))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)