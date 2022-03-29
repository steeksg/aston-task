import { configureStore} from '@reduxjs/toolkit';
import signReducer from '../components/body/pages/sign/signSlice'
import appReducer from "../appSlice"

export const store = configureStore({
  reducer: {
    sign: signReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
