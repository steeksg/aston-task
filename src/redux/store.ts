import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../components/body/pages/sign/signSlice";
import appReducer from "../appSlice";
import { apiSlice } from "../components/body/pages/search/searchSlice";
import { detailsSlice } from "../components/body/pages/details/detailsSlice";

export const store = configureStore({
  reducer: {
    sign: signReducer,
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [detailsSlice.reducerPath]: detailsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(detailsSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
