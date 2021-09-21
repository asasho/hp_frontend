import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { CloseToast } from "../organisms/CloseToast";
import Head from "../molecules/Head";
import HeadImage from "../molecules/HeadImage";
import Careers from "../images/Careers.jpeg";

const Recruit: React.FC = () => {
  return (
    <CloseToast>
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>採用｜しゃんと株式会社</title>
        </Helmet>
        <HeadImage image={Careers} alt="careers" />
        <Wrap>
          <Head title={"Careers"} text={"採用"} />
          <Second>
            <MissionH1>Coming soon !</MissionH1>
          </Second>
        </Wrap>
      </Wrapper>
    </CloseToast>
  );
};

export default Recruit;

const Wrapper = styled.div`
  overflow-x: hidden !important;
`;

const Wrap = styled.div`
  z-index: 5;
`;

const First = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
`;

const MissionH1 = styled.h1`
  font-size: 72px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Second = styled.div`
  width: auto;
  background-color: black;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  height: 60vh;
  padding-top: 200px;
  padding-left: 10%;
  background-color: white;
  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 120px;
    height: 500px;
  }
`;
