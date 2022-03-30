import { configureStore} from '@reduxjs/toolkit';
import signReducer from '../components/body/pages/sign/signSlice'
import appReducer from "../appSlice"
import { apiSlice } from '../components/body/pages/search/searchSlice';

export const store = configureStore({
  reducer: {
    sign: signReducer,
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
