import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";
import Button from "../../atoms/Button";
import "animate.css/animate.min.css";
const Fade = require("react-reveal/Fade");

interface PROPS {
  title: string;
  link: string;
  serviceName: string;
  image: string;
  consept: string;
  content: string;
  btnText: string;
  btnLinkTo: string;
  btnLinkToPath: string;
}

const ServiceContent: React.FC<PROPS> = ({
  title,
  link,
  serviceName,
  image,
  consept,
  content,
  btnText,
  btnLinkTo,
  btnLinkToPath,
}) => {
  const Element = Scroll.Element;
  return (
    <ServiceItem>
      <Fade bottom>
        <ServiceTitle>{title}</ServiceTitle>
      </Fade>
      <Fade bottom>
        <Element name={link} className="element">
          <Name>{serviceName}</Name>
        </Element>
      </Fade>
      <Content>
        <Fade bottom>
          <Box>
            <InBox>
              <img src={image} alt="TeamLink" style={{ width: "100%" }} />
            </InBox>
          </Box>
        </Fade>
        <Right>
          <Fade bottom>
            <Consept>{consept}</Consept>
          </Fade>
          <Fade bottom>
            <ServiceText>{content}</ServiceText>
          </Fade>
          <Fade bottom>
            <Button
              text={btnText}
              linkToPath={btnLinkToPath}
              linkTo={btnLinkTo}
              background="white"
              color="black"
            ></Button>
          </Fade>
        </Right>
      </Content>
    </ServiceItem>
  );
};

export default ServiceContent;

const ServiceItem = styled.div`
  height: 900px;
  @media (max-width: 768px) {
    height: 700px;
  }
`;

const ServiceTitle = styled.div`
  font-size: 60px;
  padding: 150px 0 30px 0;
  @media (max-width: 768px) {
    font-size: 36px;
    padding: 80px 0 30px 0;
  }
`;

const Name = styled.h3`
  color: gray;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const Box = styled.div`
  box-shadow: 0 0 8px gray;
  width: 360px;
  height: 270px;
  border-radius: 30px;
  position: relative;
  @media (max-width: 1030px) {
    width: 320px;
    height: 240px;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 180px;
    margin: auto;
  }
`;

const InBox = styled.div`
  position: absolute;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;

const Right = styled.div`
  margin-left: 10%;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const Consept = styled.h1`
  @media (max-width: 1030px) {
    font-size: 20px;
  }
`;

const ServiceText = styled.h2`
  font-weight: 500;
  @media (max-width: 1030px) {
    font-size: 16px;
  }
`;
