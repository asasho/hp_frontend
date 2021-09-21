import React, { useState, useEffect, VFC, memo } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { CloseToast } from "../../organisms/CloseToast";
import NewsContent from "../../molecules/news/NewsContent";
import "../../App.css";
import { fetchAsyncGetNews, selectNews } from "../../features/news/newsSlice";
import Category from "../../molecules/news/Category";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useHistory, useLocation } from "react-router-dom";
import { PaginationMemo } from "../../organisms/Pagination";
import queryString from "query-string";
import Head from "../../molecules/Head";
import Articles from "./Articles";
import ArticleItem from "./ArticleItem";

const News: VFC = () => {
  const perPage: number = 4;
  const history = useHistory();
  const search = useLocation().search;
  const params = new URLSearchParams();
  const handlePageChange = (data: any) => {
    const newPage = data.selected + 1;
    params.append("page", String(newPage));
    history.push({ search: params.toString() });
  };
  const dispatch = useAppDispatch();

  return (
    <CloseToast>
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ニュース｜しゃんと株式会社</title>
        </Helmet>
        <Wrap>
          <Head title={"News"} text={"ニュース"} />
          <Second>
            <Category />
            <Right>
              <NewsColumn>
                <Articles />
              </NewsColumn>
              <PaginationMemo
                onPageChange={handlePageChange}
                currentPage={1}
                pageCount={2}
              />
            </Right>
          </Second>
          <ArticleItem />
        </Wrap>
      </Wrapper>
    </CloseToast>
  );
};

export const NewsMemo = memo(News);

const Wrapper = styled.div`
  overflow-x: hidden !important;
  overflow-y: hidden;
  position: relative;
  height: 1800px;
`;

const Wrap = styled.div`
  z-index: 5;
`;

const Right = styled.div``;

const Second = styled.div`
  background-color: black;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  height: 60vh;
  padding-top: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  @media (max-width: 1170px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 120px;
    height: 500px;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

const NewsColumn = styled.div`
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
