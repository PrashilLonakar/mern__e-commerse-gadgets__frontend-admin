import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware()))

export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
    },
  },
  composeEnhancers(applyMiddleware())
);
