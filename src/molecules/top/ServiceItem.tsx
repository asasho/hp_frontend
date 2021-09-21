import React from "react";
import styled from "styled-components";

interface PROPS {
  logo: string;
  alt: string;
  text: string;
  borderTop: string;
  linkTo: string;
}

const ServiceItem: React.FC<PROPS> = ({
  logo,
  alt,
  text,
  borderTop,
  linkTo,
}) => {
  return (
    <Wrapper>
      <ServiceButton
        href={linkTo}
        style={{ borderTop: `${borderTop}`, textDecoration: "none" }}
      >
        <Logo src={logo} alt={alt} />
        <Text style={{ color: "black" }}>{text}</Text>
      </ServiceButton>
    </Wrapper>
  );
};

export default ServiceItem;

const Wrapper = styled.div`
  width: 400px;
  opacity: 1;

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const ServiceButton = styled.a`
  cursor: pointer;
  width: 700px;
  height: 100px;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;

const Logo = styled.img``;

const Text = styled.p`
  width: auto;
`;
