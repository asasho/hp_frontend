import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpenToast: true,
    member: {
      name: "",
      enName: "",
      image: "",
    },
  },
  reducers: {
    setIsOpenToast(state) {
      state.isOpenToast = true;
    },
    resetIsOpenToast(state) {
      state.isOpenToast = false;
    },
    editMember(state, action) {
      state.member.name = action.payload.name;
      state.member.image = action.payload.image;
    },
  },
});

export const { setIsOpenToast, resetIsOpenToast } = modalSlice.actions;

export const selectIsOpenToast = (state: RootState) => state.modal.isOpenToast;
export const selectMember = (state: RootState) => state.modal.member;

export default modalSlice.reducer;
