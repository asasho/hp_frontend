import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  resetIsOpenToast,
  selectIsOpenToast,
} from "../../features/modal/modalSlice";
import TeamLinkLogo from "../../images/TeamLinkLogo.png";
import CancelIcon from "@material-ui/icons/Cancel";
import Display from "../../images/Display.jpg";
import MediaQuery from "react-responsive";

const customStylesPc = {
  overlay: {
    top: "auto",
    left: "20px",
    right: "auto",
    bottom: "20px",
    width: "300px",
    height: "200px",
    borderRadius: "5px",
    boxShadow: "0 0 8px gray",
    backgroundColor: "white",
  },
};

const customStylesSp = {
  overlay: {
    top: "auto",
    left: "10px",
    right: "auto",
    bottom: "10px",
    width: "210px",
    height: "140px",
    borderRadius: "5px",
    boxShadow: "0 0 8px gray",
    backgroundColor: "white",
  },
};

Modal.setAppElement("#root");

const Toast: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isOpenToast = useSelector(selectIsOpenToast);
  return (
    <>
      <MediaQuery minWidth={768}>
        <Modal
          isOpen={isOpenToast}
          portalClassName="portal_modal"
          className="content_modal"
          overlayClassName=""
          onRequestClose={resetIsOpenToast}
          style={customStylesPc}
        >
          <CloseButton onClick={async () => await dispatch(resetIsOpenToast())}>
            <CancelIcon />
          </CloseButton>
          <Content>
            <Img>
              <img
                src={Display}
                alt="toast"
                style={{ width: "100%", height: "auto" }}
              />
            </Img>
            <Box>
              <Icon>
                <img
                  src={TeamLinkLogo}
                  alt="TeamLink"
                  style={{ width: "100%" }}
                />
              </Icon>
              <Button>
                <a
                  target="_blank"
                  href="https://www.team-link.jp/about/service"
                  style={{ textDecoration: "none", color: "#0095f6" }}
                >
                  製品情報はこちら
                </a>
              </Button>
            </Box>
          </Content>
        </Modal>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <Modal
          isOpen={isOpenToast}
          portalClassName="portal_modal"
          className="content_modal"
          overlayClassName=""
          onRequestClose={resetIsOpenToast}
          style={customStylesSp}
        >
          <CloseButton onClick={async () => await dispatch(resetIsOpenToast())}>
            <CancelIcon />
          </CloseButton>
          <Content>
            <Img>
              <img
                src={Display}
                alt="toast"
                style={{ width: "100%", height: "auto" }}
              />
            </Img>
            <Box>
              <Icon>
                <img
                  src={TeamLinkLogo}
                  alt="TeamLink"
                  style={{ width: "100%" }}
                />
              </Icon>
              <Button>
                <a
                  target="_blank"
                  href="https://www.team-link.jp/about/service"
                  style={{ textDecoration: "none", color: "#0095f6" }}
                >
                  製品情報はこちら
                </a>
              </Button>
            </Box>
          </Content>
        </Modal>
      </MediaQuery>
    </>
  );
};

export default Toast;

const CloseButton = styled.button`
  border: none;
  background-color: white;
  margin-left: 275px;
  cursor: pointer;
  padding: 0;
  @media (max-width: 768px) {
    margin-left: 185px;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 40%;
  height: auto;
`;

const Box = styled.div`
  width: 55%;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Icon = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  border: solid 1px #0095f6;
  border-radius: 10px;
  color: #0095f6;
  background-color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #e3e5ea;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
