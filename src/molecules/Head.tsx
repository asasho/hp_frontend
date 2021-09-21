import React from "react";
import styled from "styled-components";

interface PROPS {
  title: string;
  text: string;
}

const Head: React.FC<PROPS> = ({ title, text }) => {
  return (
    <First>
      <Title>
        <TitleEng>{title}</TitleEng>
        <TitleJpn>{text}</TitleJpn>
      </Title>
    </First>
  );
};

export default Head;

const First = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
`;

const Title = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  border-radius: 50px;
  background-color: white;
  @media (max-width: 768px) {
    width: 200px;
    height: 120px;
  }
`;

const TitleEng = styled.h1`
  font-size: 72px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const TitleJpn = styled.h2`
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
