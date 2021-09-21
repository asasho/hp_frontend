import React, { useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Moment from "react-moment";
import "../../App.css";
import CloseIcon from "@material-ui/icons/Close";
import {
  fetchAsyncGetOneNews,
  selectArticle,
} from "../../features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useHistory, useParams } from "react-router-dom";

const OneNews: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectArticle);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const BootLoader = async () => {
      await dispatch(fetchAsyncGetOneNews(Number(id)));
    };
    BootLoader();
  }, [dispatch, id]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ニュース｜しゃんと株式会社</title>
      </Helmet>
      <Page>
        <CloseButton
          onClick={async () => {
            history.goBack();
          }}
        />

        <Sub>
          <Date>
            <Moment format="YYYY-MM-DD">{article?.updated_at}</Moment>
          </Date>
          <Tag>{article?.category}</Tag>
        </Sub>

        <Title>{article?.title}</Title>

        <Description
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
      </Page>
    </div>
  );
};

export default OneNews;

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 200px;
`;

const Sub = styled.div`
  display: flex;
  justify-content: start;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
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
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
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

const Description = styled.div`
  text-align: center;
`;
