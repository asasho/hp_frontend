import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  selectIsOpenNews,
  resetIsOpenNews,
  selectNews,
} from "../../features/news/newsSlice";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

Modal.setAppElement("#root");

const ArticleItem: React.FC = () => {
  const isOpenNews = useSelector(selectIsOpenNews);
  const dispatch: AppDispatch = useDispatch();
  const article = useSelector(selectNews);
  useEffect(() => {
    console.log(article);
  }, []);

  const customStyles = {
    overlay: {
      top: "0",
      left: "0",
      right: "auto",
      bottom: "auto",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
    },
    content: {
      top: "0",
      left: "0",
      right: "auto",
      bottom: "auto",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
    },
  };
  return (
    <div>
      <Modal isOpen={isOpenNews} style={customStyles} bodyOpenClassName="open">
        <Box>
          <CloseButton
            onClick={async () => {
              await dispatch(resetIsOpenNews());
            }}
          />
          <ModalContents>
            <ModalLeft>
              {/* <img
                src={}
                alt="people1"
                style={{
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "3px 3px 5px #e3e5ea, -3px -3px 5px #e3e5ea",
                  margin: "0px",
                }}
              /> */}
            </ModalLeft>
            <ModalRight>
              <MemberName></MemberName>
              <MemberStatus></MemberStatus>
            </ModalRight>
          </ModalContents>
        </Box>
      </Modal>
      {console.log(article)}
    </div>
  );
};

export default ArticleItem;

const Box = styled.div`
  z-index: 7000;
`;

const CloseButton = styled(CloseIcon)`
  box-shadow: 0 0 12px rgb(0 0 0 / 8%);
  border-radius: 25px;
  color: black;
  background-color: white;
  position: fixed;
  top: 120px;
  right: 100px;
  cursor: pointer;
  padding: 15px;
  border-radius: 25px;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 768px) {
    top: 120px;
    right: 30px;
  }
`;

const ModalContents = styled.div`
  width: 60%;
  height: auto;
  padding: 50px 0 50px 0;
  margin: 80px 20% 0 20%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 80px;
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const ModalLeft = styled.div`
  margin-right: 30px;
  width: auto;
  height: 550px;
  @media (max-width: 768px) {
    height: 400px;
    margin-top: 40px;
    margin-right: 10px;
    text-align: center;
  }
`;

const ModalRight = styled.div`
  margin-left: 30px;
`;

const MemberName = styled.p``;

const MemberStatus = styled(MemberName)``;
