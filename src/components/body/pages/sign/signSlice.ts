import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";

export interface SignState {
  currentUser: string;
}

const initialState: SignState = {
  currentUser: "",
};

export const signSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    userLogIn: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    userLogOut: (state) => {
      state.currentUser = "";
    },
  },
});

export const { userLogIn,userLogOut } = signSlice.actions;

export const selectSign = (state: RootState) => state.sign.currentUser;

export default signSlice.reducer;
