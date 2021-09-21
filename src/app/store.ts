import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import memberSlice from "../features/member/memberSlice";
import modalSlice from "../features/modal/modalSlice";
import newsSlice from "../features/news/newsSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    member: memberSlice,
    news: newsSlice,
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
