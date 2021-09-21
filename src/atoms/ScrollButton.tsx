import React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";

interface PROPS {
  text: string;
  background: string;
  color: string;
  linkTo: string;
  width: string;
}

const ScrollButton: React.FC<PROPS> = ({
  text,
  background,
  color,
  linkTo,
  width,
}) => {
  const Link = Scroll.Link;
  return (
    <ScrollBtn style={{ backgroundColor: `${background}`, width: `${width}` }}>
      <Link
        activeClass="active"
        to={linkTo}
        smooth={true}
        offset={-300}
        duration={500}
        style={{
          color: `${color}`,
          backgroundColor: `${background}`,
          textDecoration: "none",
          lineHeight: "55px",
        }}
      >
        {text}
      </Link>
    </ScrollBtn>
  );
};

export default ScrollButton;

const ScrollBtn = styled.button`
  box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #fff;
  text-align: center;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 40px;
  cursor: pointer;
  height: 55px;
  @media (max-width: 768px) {
    margin: 40px 5% 0 5%;
  }
`;
