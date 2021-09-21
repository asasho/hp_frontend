import React from "react";
import FadeBottom from "../../molecules/FadeBottom";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  setIsOpenMember,
  editMember,
  selectMember,
} from "../../features/member/memberSlice";
import styled from "styled-components";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

interface PROPS {
  image: string;
  jpnName: string;
  enName: String;
}

const MemberItem: React.FC<PROPS> = ({ jpnName, image, enName }) => {
  const dispatch: AppDispatch = useDispatch();
  const member = useSelector(selectMember);

  return (
    <div>
      <MemberWrapper>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={2}
          offset={50}
          delay={0}
        >
          <MemberImg
            onClick={() => {
              dispatch(setIsOpenMember());
              dispatch(
                editMember({
                  name: jpnName,
                  image: image,
                  enName: enName,
                })
              );
            }}
          >
            <img
              src={image}
              alt={image}
              style={{
                height: "100%",
                borderRadius: "10px",
                boxShadow: "3px 3px 5px #e3e5ea, -3px -3px 5px #e3e5ea",
                margin: "0px",
                width: "250px",
                objectFit: "cover",
              }}
            />
            <Icon style={{ fontSize: "20px", margin: "15px" }} />
          </MemberImg>
        </ScrollAnimation>
        <FadeBottom>
          <MemberName>{enName}</MemberName>
        </FadeBottom>
        <FadeBottom>
          <MemberStatus>{jpnName}</MemberStatus>
        </FadeBottom>
      </MemberWrapper>
    </div>
  );
};

export default MemberItem;

const MemberWrapper = styled.div`
  width: 400px;
  height: 600px;
  margin: 20px 15%;
  @media (max-width: 1170px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MemberImg = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
  }
`;

const Icon = styled(AddIcon)`
  position: absolute;
  bottom: 20px;
  right: 10px;
  left: auto;
  background-color: white;
  box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #e3e5ea;
  width: 50px;
  padding: 15px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  ${MemberImg}:hover & {
    background-color: black;
    color: white;
  }
`;

const MemberName = styled.p``;

const MemberStatus = styled(MemberName)``;
