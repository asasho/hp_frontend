import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    isOpenMember: false,
    member: {
      image: "",
      name: "",
      enName: "",
    },
  },
  reducers: {
    setIsOpenMember(state) {
      state.isOpenMember = true;
    },
    resetIsOpenMember(state) {
      state.isOpenMember = false;
    },
    editMember(state, action) {
      state.member.name = action.payload.name;
      state.member.image = action.payload.image;
      state.member.enName = action.payload.enName;
    },
  },
});

export const { setIsOpenMember, resetIsOpenMember, editMember } =
  memberSlice.actions;

export const selectIsOpenMember = (state: RootState) =>
  state.member.isOpenMember;
export const selectMember = (state: RootState) => state.member.member;

export default memberSlice.reducer;
