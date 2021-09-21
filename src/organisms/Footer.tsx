import React from "react";
import Shant from "../images/ShantLogo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <RowLeft>
        <Link to="/">
          <Logo src={Shant} alt="Shant" />
        </Link>
        <Right>
          <h2 style={{ fontSize: "18px" }}>しゃんと株式会社</h2>
          <p>
            〒150-0013
            <br />
            東京都渋谷区恵比寿1-24-15
            <br />
            シエルブルーEAST6F
          </p>
        </Right>
      </RowLeft>
      <Row>
        <Link
          to="/about"
          style={{ textDecoration: "none", marginBottom: "20px" }}
        >
          <Item>企業情報</Item>
        </Link>
        <Link
          to="/product"
          style={{ textDecoration: "none", marginBottom: "20px" }}
        >
          <Item>プロダクト</Item>
        </Link>
        <Link
          to="/careers"
          style={{ textDecoration: "none", marginBottom: "20px" }}
        >
          <Item>採用</Item>
        </Link>
        <Link
          to="/news"
          style={{ textDecoration: "none", marginBottom: "20px" }}
        >
          <Item>ニュース</Item>
        </Link>
      </Row>
      <Row>
        <Link to="#" style={{ textDecoration: "none", marginBottom: "20px" }}>
          <Item>プライバシーポリシー</Item>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", marginBottom: "20px" }}
        >
          <Item>お問い合わせ</Item>
        </Link>
      </Row>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0 40px 0;
  border-top: solid 1px gray;
  background-color: white;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  @media (max-width: 1280px) {
    height: 80px;
  }
  @media (max-width: 768px) {
    height: 60px;
    padding-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5% 0 8%;
`;

const RowLeft = styled(Row)`
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Item = styled.h2`
  font-weight: 600;
  color: black;
  font-size: 18px;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: 18px;
  }
`;
