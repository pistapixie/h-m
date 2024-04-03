// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import productReducer from "./reducers/productReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
