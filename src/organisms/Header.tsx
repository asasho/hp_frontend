import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Shant from "../images/ShantLogo.png";
import MediaQuery from "react-responsive";
import { fallDown as Menu } from "react-burger-menu";
import MenuIcon from "@material-ui/icons/Menu";

const Header: React.FC = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const pathName = useLocation().pathname;

  const stateChangeHandler = (newState: any) => {
    setMenuOpenState(newState.isOpen);
  };

  useEffect(() => {
    setMenuOpenState(false);
  }, [pathName]);

  return (
    <div>
      <HeaderBox>
        <Link to="/" style={{ zIndex: 5500 }}>
          <Logo src={Shant} alt="shant" />
        </Link>
        <Container>
          <MediaQuery minWidth={1030}>
            <Item>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                企業情報
              </Link>
            </Item>
            <Item>
              <Link
                to="/service"
                style={{ textDecoration: "none", color: "black" }}
              >
                サービス
              </Link>
            </Item>
            <Item>
              <Link
                to="/careers"
                style={{ textDecoration: "none", color: "black" }}
              >
                採用
              </Link>
            </Item>
            <Item>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "black" }}
              >
                ニュース
              </Link>
            </Item>
          </MediaQuery>
          <StyledMenu>
            <Menu
              right
              isOpen={menuOpenState}
              burgerButtonClassName={"open_button"}
              onStateChange={(state) => stateChangeHandler(state)}
              customBurgerIcon={
                <>
                  <MediaQuery minWidth={768}>
                    <MenuIcon
                      onClick={() => {
                        setMenuOpenState(true);
                      }}
                      style={{
                        width: "50px",
                        height: "50px",
                        paddingTop: "10px",
                        cursor: "pointer",
                      }}
                      viewBox="-5 -5 36 36"
                    />
                  </MediaQuery>
                  <MediaQuery maxWidth={768}>
                    <MenuIcon
                      onClick={() => {
                        setMenuOpenState(true);
                      }}
                      style={{
                        width: "50px",
                        height: "50px",
                        paddingTop: "10px",
                        cursor: "pointer",
                      }}
                      viewBox="-10 -5 48 48"
                    />
                  </MediaQuery>
                </>
              }
            >
              <ItemSp>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  企業情報
                </Link>
              </ItemSp>
              <ItemSp>
                <Link
                  to="/service"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  サービス
                </Link>
              </ItemSp>
              <ItemSp>
                <Link
                  to="/careers"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  採用
                </Link>
              </ItemSp>
              <ItemSp>
                <Link
                  to="/news"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  ニュース
                </Link>
              </ItemSp>
              <ItemSp>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  お問い合わせ
                </Link>
              </ItemSp>
              <Address>
                <p>
                  <span>Address</span>
                  <br />
                  〒150-0013
                  <br />
                  東京都渋谷区恵比寿1-24-15
                  <br />
                  シエルブルーEAST6F
                </p>
              </Address>
            </Menu>
          </StyledMenu>
        </Container>
      </HeaderBox>
    </div>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  padding: 0 14px;
  height: 72px;
  width: 90%;
  border-radius: 40px;
  box-shadow: 0 0 12px rgb(0 0 0 / 8%);
  z-index: 10;
  background-color: white;
  @media (max-width: 768px) {
    background-color: white;
    height: 60px;
    top: 20px;
    left: 0;
    width: auto;
    padding: 0;
    right: 0;
    margin: 0 15px;
    z-index: 8 !important;
  }
`;

const Logo = styled.img`
  height: 80%;
  padding: 10px 40px 0 40px;
  cursor: pointer;
  border-radius: 20px;
  z-index: 5500;
  @media (max-width: 1030px) {
    height: 50px;
    padding-left: 20px;
  }
  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  @media (max-width: 1030px) {
    width: auto;
  }
`;

const Item = styled.h2`
  font-weight: 700;
  font-size: 18px;
  font-family: YuGothic, "ヒラギノ角ゴ
ProN W3", "Lucida Grande",
    "Hiragino
Kaku Gothic ProN", メイリオ, Meiryo, Verdana, "ＭＳ Ｐゴシック",
    sans-serif YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande",
    "Hiragino Kaku
Gothic ProN", "メイリオ", Meiryo, Verdana, "ＭＳ Ｐゴシック",
    sans-serif body;
  font-size: 14px;
  margin: auto;
  cursor: pointer;
`;

const ItemSp = styled.div`
  font-weight: 700;
  font-size: 24px;
  padding-left: 60px;
  margin: auto;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
`;

const Address = styled.div`
  padding-left: 60px;
  @media (max-width: 768px) {
    padding-left: 40px;
  }
  && span {
    font-weight: 600;
  }
`;

const StyledMenu = styled.div`
  .bm-burger-button open_button {
    position: fixed !important;
    width: 50px !important;
    height: 50px !important;
    right: 20px !important;
    top: 10px !important;
    z-index: 5500 !important;
    padding: 0;
  }
  .bm-icon {
    width: 50px !important;
    height: 50px !important;
    background-color: white !important;
    border-radius: 25px !important;
    margin-right: 20px;
    padding-top: 10px;
    @media (max-width: 768px) {
      padding-top: 0px !important;
    }
  }
  .bm-menu-wrap {
    position: fixed;
    top: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 5000 !important;
  }
  .bm-item-list {
    position: fixed;
    top: 0 !important;
    padding-top: 100px;
    width: 100% !important;
    height: 1000px !important;
    z-index: 5000 !important;
    background-color: white !important;
  }
  .bm-menu {
    width: 50% !important;
    z-index: 5000 !important;
    overflow: hidden !important;
  }
  .hamburger-react {
    background-color: white;
    z-index: 5500 !important;
    border-radius: 25px;
  }
  .bm-cross {
    background-color: black !important;
    top: 0px !important;
    height: 40px !important;
    right: 4px !important;
    width: 3px !important;
    height: 25px !important;
    @media (max-width: 768px) {
      width: 2px !important;
      height: 20px !important;
      right: 0 !important;
    }
  }
  .bm-cross-button {
    z-index: 5002 !important;
    top: 35px !important;
    width: 40px !important;
    height: 40px !important;
    right: 55px !important;
    border-radius: 25px;
    box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #fff;
    @media (max-width: 768px) {
      top: 35px !important;
      right: 30px !important;
      width: 30px !important;
      height: 30px !important;
      border-radius: 20px;
    }
  }
  #react-burger-cross-btn {
    top: 0px !important;
    width: 30px !important;
    height: 30px !important;
    right: -15px !important;
  }
  #react-burger-menu-btn {
    right: 25px !important;
    left: auto !important;
    top: 20px !important;
    width: 30px !important;
    height: 30px !important;
  }
`;
