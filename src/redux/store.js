import { configureStore } from "@reduxjs/toolkit";
import counterReducerSlice from "./Couter/CouterSlice";
import swapReducerSlice from "./Swap/SwapSlice";
import userReducerSlice from "./Auth/userSlice";

const rootReducer = {
  count: counterReducerSlice,
  swap: swapReducerSlice,
  user: userReducerSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
