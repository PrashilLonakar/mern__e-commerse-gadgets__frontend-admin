import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";

import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import categoryReducer from "../features/category/categorySlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware()))

export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      customer: customerReducer,
      product: productReducer,
      brand: brandReducer,
      category: categoryReducer,
    },
  },
  composeEnhancers(applyMiddleware())
);
