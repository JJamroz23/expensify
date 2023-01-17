import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../../utils/firebase/auth";
import { getExpenses as getExpensesRequest } from "../../../utils/firebase/expense";
import { RootState } from "../../store";
import { selectUser } from "../user/authSlice";

export const getExpenses = createAsyncThunk<
  Expense[],
  void,
  {
    state: RootState;
  }
>("expenses/getExpenses", async (_, { getState, rejectWithValue }) => {
  try {
    const user = selectUser(getState());
    const expensesList = await getExpensesRequest((user as UserData).uid);
    return expensesList;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Error fetching expenses");
  }
});

export interface Expense {
  uid: string;
  description: string;
  note: string;
  amount: number;
  createdAt: string;
}

interface InitialExpensesState {
  items: Expense[];
  error: string | null;
  loading: boolean;
}

const initialState: InitialExpensesState = {
  items: [],
  error: null,
  loading: false,
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    restoreDefaultExpenses() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(getExpenses.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(getExpenses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getExpenses.rejected, (state, action) => {
      console.log(12, action.payload);
      // @ts-ignore
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { restoreDefaultExpenses } = expensesSlice.actions;

export const selectExpenses = (state: RootState) => state.expenses.items;
export const selectExpensesState = (state: RootState) => state.expenses;

export default expensesSlice.reducer;
