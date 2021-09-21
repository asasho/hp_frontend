import React, { ReactNode, VFC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Toast from "../molecules/modal/Toast";
import Header from "./Header";
import Footer from "./Footer";

interface PROPS {
  children: ReactNode;
}

export const Layout: VFC<PROPS> = ({ children }) => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Wrapper>
      <Header />
      {children}
      <Toast />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
`;
