import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { useLocation } from "react-router-dom";

const Category: React.FC = ({}) => {
  const pathName = useLocation().pathname;
  return (
    <div>
      <H2>Category</H2>
      <Search>
        <Button
          text="すべて"
          linkToPath="/news"
          linkTo="/news"
          background={pathName === "/news" ? "#0095f6" : "white"}
          color={pathName === "/news" ? "white" : "black"}
        ></Button>
        <Button
          text="プレスリリース"
          linkToPath="/news/press-release"
          linkTo="/news/press-release"
          background={pathName === "/news/press-release" ? "#0095f6" : "white"}
          color={pathName === "/news/press-release" ? "white" : "black"}
        ></Button>
        <Button
          text="メディア掲載"
          linkToPath="/news/media"
          linkTo="/news/media"
          background={pathName === "/news/media" ? "#0095f6" : "white"}
          color={pathName === "/news/media" ? "white" : "black"}
        ></Button>
      </Search>
    </div>
  );
};

export default Category;

const Search = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
`;

const H2 = styled.h2`
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
