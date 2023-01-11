import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Expense {
  uid: string;
  description: string;
  note: string;
  amount: number;
  createdAt: number;
}

const initialState: Expense[] = [
  {
    uid: "123",
    description: "123",
    note: "123",
    amount: 123,
    createdAt: 123,
  },
];

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
});

export const selectExpenses = (state: RootState) => state.expenses;

export default expensesSlice.reducer;
