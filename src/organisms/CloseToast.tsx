import React, { ReactNode, VFC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { resetIsOpenToast } from "../features/modal/modalSlice";

interface PROPS {
  children: ReactNode;
}

export const CloseToast: VFC<PROPS> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const bootLoader = async () => {
      await dispatch(resetIsOpenToast());
    };
    bootLoader();
  }, [dispatch]);

  return <div>{children}</div>;
};
