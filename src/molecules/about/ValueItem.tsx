import React from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

interface PROPS {
  image: string;
  title: string;
  content: string;
}

const ValueItem: React.FC<PROPS> = ({ image, title, content }) => {
  return (
    <Value>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={2}
        delay={0}
      >
        <ValueImage>
          <img
            src={image}
            alt={image}
            style={{ height: "100%", width: "auto" }}
          />
        </ValueImage>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={2}
        delay={0}
      >
        <ValueTitle>{title}</ValueTitle>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={2}
        delay={0}
      >
        <ValueContent>{content}</ValueContent>
      </ScrollAnimation>
    </Value>
  );
};

export default ValueItem;

const Value = styled.div`
  width: 20%;
  margin: 50px 5% 0 5%;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 10% 0 10%;
    padding: 0;
  }
`;

const ValueImage = styled.div`
  width: 100%;
  height: 300px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ValueTitle = styled.h2`
  font-weight: 700;
`;

const ValueContent = styled.p``;
