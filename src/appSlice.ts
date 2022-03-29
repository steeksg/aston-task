import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./redux/store";

export interface AppState {
  background: string;
}

const initialState: AppState = {
    background: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    },
  },
});

export const { changeBackground } = appSlice.actions;

export const selectApp = (state: RootState) => state.app.background;

export default appSlice.reducer;
