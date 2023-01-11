import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/authSlice";
import expensesReducer from "./slices/expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
