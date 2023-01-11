import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../../utils/firebase/auth";
import { RootState } from "../../store";

interface UserState {
  user: UserData | null;
}

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default authSlice.reducer;
