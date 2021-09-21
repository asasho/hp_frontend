import React, { useEffect } from "react";
import NewsContent from "../../molecules/news/NewsContent";
import { fetchAsyncGetNews, selectNews } from "../../features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useHistory, useLocation, Link } from "react-router-dom";

const Articles: React.FC = () => {
  const history = useHistory();
  const search = useLocation().search;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const BootLoader = async () => {
      await dispatch(fetchAsyncGetNews());
    };
    BootLoader();
  }, [dispatch, search]);

  const articles = useAppSelector(selectNews);

  const pathName = useLocation().pathname;

  return (
    <>
      {pathName === "/news" && (
        <>
          {articles?.map((article) => (
            <Link
              to={"/news/" + article.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <NewsContent
                key={article.id}
                image={article.image_url}
                date={article.updated_at}
                tag={article.category}
                title={article.title}
              />
            </Link>
          ))}
        </>
      )}

      {pathName === "/news/press-release" && (
        <>
          {articles
            ?.filter((article) => article.category.includes("プレスリリース"))
            .map((article) => (
              <Link
                to={"/news/" + article.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NewsContent
                  key={article.id}
                  image={article.image_url}
                  date={article.updated_at}
                  tag={article.category}
                  title={article.title}
                />
              </Link>
            ))}
        </>
      )}

      {pathName === "/news/media" && (
        <>
          {articles
            ?.filter((article) => article.category.includes("メディア"))
            .map((article) => (
              <Link
                to={"/news/" + article.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NewsContent
                  key={article.id}
                  image={article.image_url}
                  date={article.updated_at}
                  tag={article.category}
                  title={article.title}
                />
              </Link>
            ))}
        </>
      )}
    </>
  );
};

export default Articles;
