import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PROPS {
  text: string;
  linkTo: string;
  linkToPath: string;
  background: string;
  color: string;
}

const Button: React.FC<PROPS> = ({
  text,
  linkTo,
  linkToPath,
  background,
  color,
}) => {
  return (
    <Btn href={linkTo} style={{ backgroundColor: `${background}` }}>
      <Link
        to={linkToPath}
        style={{
          color: `${color}`,
          backgroundColor: `${background}`,
          textDecoration: "none",
          lineHeight: "55px",
        }}
      >
        {text}
      </Link>
    </Btn>
  );
};

export default Button;

const Btn = styled.a`
  height: 55px;
  width: 174px;
  display: block;
  text-decoration: none !important;
  background-color: #0095f6;
  color: white;
  text-align: center;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  margin-top: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #fff;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
