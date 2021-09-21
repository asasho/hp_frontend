import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import TeamLinkLogo from "../images/TeamLinkLogo.png";
import IdLogo from "../images/IdLogo.png";
import * as Scroll from "react-scroll";
import Products from "../images/Products.jpeg";
import { OpenToast } from "../organisms/OpenToast";
import ScrollBtn from "../atoms/ScrollButton";
import Head from "../molecules/Head";
import HeadImage from "../molecules/HeadImage";
import ServiceContent from "../molecules/service/ServiceContent";
import "animate.css/animate.min.css";
import FadeBottom from "../molecules/FadeBottom";

const Service: React.FC = () => {
  const Element = Scroll.Element;
  return (
    <OpenToast>
      <Helmet>
        <meta charSet="utf-8" />
        <title>サービス｜しゃんと株式会社</title>
      </Helmet>
      <HeadImage image={Products} alt="products" />
      <Wrap>
        <Head title={"Service"} text={"サービス"} />
        <White>
          <Second>
            <FadeBottom>
              <MissionH1>
                テクノロジーで
                <br />
                つながりを創造する
              </MissionH1>
            </FadeBottom>

            <Buttons>
              <FadeBottom>
                <ScrollBtn
                  text="ビジネスマッチングサービス"
                  linkTo="TeamLink"
                  background="white"
                  color="black"
                  width="240px"
                ></ScrollBtn>
              </FadeBottom>
              <FadeBottom>
                <ScrollBtn
                  text="就活サービス"
                  linkTo="IdCareea"
                  background="white"
                  color="black"
                  width="174px"
                ></ScrollBtn>
              </FadeBottom>
            </Buttons>
          </Second>
          <Third>
            {services.map((service) => (
              <ServiceContent
                key={service.id}
                title={service.title}
                link={service.link}
                serviceName={service.name}
                image={service.image}
                consept={service.consept}
                content={service.content}
                btnText={service.button}
                btnLinkTo={service.linkTo}
                btnLinkToPath={service.linkToPath}
              ></ServiceContent>
            ))}
          </Third>
        </White>
      </Wrap>
    </OpenToast>
  );
};

const services = [
  {
    id: 1,
    title: "経営層のための課題解決SNS",
    link: "TeamLink",
    name: "Team Link",
    image: `${TeamLinkLogo}`,
    consept: "経営層のための課題解決SNSサービス",
    content:
      "企業とつながり、集客、採用などの悩みを解決することができるサービスです。",
    button: "Team Link 公式サイト",
    linkTo: "https://www.team-link.jp/about/service",
    linkToPath: "#",
  },
  {
    id: 2,
    title: "就活サービス",
    link: "IdCareea",
    name: "ID就活",
    image: `${IdLogo}`,
    consept: "日本No.1のこだわり条件であなたにぴったりの企業と出会える",
    content:
      "日本No.1のこだわり条件であなたにぴったりの企業と出会える就活サービスです。",
    button: "ID就活 公式サイト",
    linkTo: "#",
    linkToPath: "#",
  },
];

export default Service;

const Wrap = styled.div`
  z-index: 5;
  height: 100%;
`;

const White = styled.div`
  background-color: white;
`;

const Second = styled.div`
  width: auto;
  background-color: black;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  height: 360px;
  padding-top: 40px;
  padding-left: 10%;
  background-color: white;
  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 120px;
    height: 500px;
  }
`;

const Buttons = styled.div`
  display: flex;
  padding-top: 0;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const MissionH1 = styled.h2`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Third = styled.div`
  width: auto;
  background-color: black;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  padding: 0 10% 200px 10%;
  background-color: white;
  height: 1600px;
  @media (max-width: 768px) {
    padding-top: 120px 5% 0 5%;
    height: 1400px;
  }
`;
