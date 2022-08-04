import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ContactsReducer from "./slices/ContactsSlice";

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
