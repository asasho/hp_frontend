import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { selectNews } from "../../features/news/newsSlice";

interface PROPS {
  image: string;
  date: string;
  tag: string;
  title: string;
}

const NewsContent: React.FC<PROPS> = ({ image, date, tag, title }) => {
  const dispatch: AppDispatch = useDispatch();
  const article = useSelector(selectNews);
  const history = useHistory();

  return (
    <NewsSet>
      <Img>
        <img
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Img>
      <Right>
        <Sub>
          <Date>
            <Moment format="YYYY-MM-DD">{date}</Moment>
          </Date>
          <Tag>{tag}</Tag>
        </Sub>
        <Title>{title}</Title>
      </Right>
    </NewsSet>
  );
};

export default NewsContent;

const NewsSet = styled.a`
  display: flex;
  justify-content: left;
  padding: 20px 0;
  border-top: solid 0.2px gray;
  border-bottom: solid 0.2px gray;
  width: 100%;
  cursor: pointer;
`;

const Img = styled.div`
  width: 200px;
  min-width: 200px;
  height: 150px;
  margin-right: 20px;
  @media (max-width: 768px) {
    min-width: 100px;
    width: 100px;
    height: 75px;
  }
`;

const Right = styled.div`
  height: auto;
`;

const Sub = styled.div`
  display: flex;
  justify-content: start;
  @media (max-width: 768px) {
  }
`;

const Date = styled.p`
  margin-right: 10px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 10px;
    margin: 0;
  }
`;

const Tag = styled.p`
  color: white;
  background-color: #0095f6;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 600;
  width: 140px;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 3px;
    font-size: 10px;
    height: 18px;
    width: 70px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 20px;
  }
`;

const Title = styled.h2`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
