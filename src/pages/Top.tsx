import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import TeamLinkLogo from "../images/TeamLinkLogo.png";
import IdLogo from "../images/IdLogo.png";
import { OpenToast } from "../organisms/OpenToast";
import Button from "../atoms/Button";
import ServiceItem from "../molecules/top/ServiceItem";
import ReactPlayer from "react-player";
import FadeBottom from "../molecules/FadeBottom";

const Top: React.FC = () => {
  return (
    <OpenToast>
      <Helmet>
        <meta charSet="utf-8" />
        <title>しゃんと株式会社｜テクノロジーでつながりを創造する</title>
      </Helmet>
      <StyledReactPlayer
        url="https://d3myd2e12c1w18.cloudfront.net/output/TopMoviehp.m3u8"
        reload="auto"
        playing={true}
        autoplay={true}
        muted={true}
        loop={true}
        style={{ objectFit: "fill" }}
        width="100%"
        height="100vh"
        controls={false}
        playsinline={true}
      />
      <Wrap>
        <FirstText>
          <MissionH2>
            テクノロジーで
            <br />
            つながりを創造する
          </MissionH2>
        </FirstText>
        <White>
          <Second>
            <FadeBottom>
              <Title>・our mission</Title>
            </FadeBottom>

            <FadeBottom>
              <MissionH1>
                テクノロジーで
                <br />
                つながりを創造する
              </MissionH1>
            </FadeBottom>
            <FadeBottom>
              <Text>
                テクノロジーでつながりを生み出していく。
                <br />
                それが私たちのミッションです。
              </Text>
            </FadeBottom>
            <FadeBottom>
              <Button
                text="詳しく見る"
                linkToPath="/about"
                linkTo="/about"
                background="#0095f6"
                color="white"
              ></Button>
            </FadeBottom>
          </Second>
          <Third>
            <Service>
              <FadeBottom>
                <TitleEng>Services</TitleEng>
              </FadeBottom>
              <FadeBottom>
                <TitleJpn>サービス</TitleJpn>
              </FadeBottom>
              <FadeBottom>
                <Button
                  text="・View more"
                  linkTo="/service"
                  linkToPath="/service"
                  background="white"
                  color="black"
                ></Button>
              </FadeBottom>
            </Service>
            <Contents>
              <FadeBottom>
                <TeamLinkBtn
                  logo={TeamLinkLogo}
                  alt="TeamLink"
                  text="経営層のためのビジネスマッチングサービスです。"
                  borderTop="none"
                  linkTo="https://www.team-link.jp/about/service"
                ></TeamLinkBtn>
              </FadeBottom>
              <FadeBottom>
                <IDCareerBtn
                  logo={IdLogo}
                  alt="Id"
                  text="日本No.1の検索条件の就活サイトです。"
                  borderTop="solid 1px gray"
                  linkTo="#"
                ></IDCareerBtn>
              </FadeBottom>
            </Contents>
          </Third>
        </White>
      </Wrap>
    </OpenToast>
  );
};

export default Top;

const FirstText = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: none;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  background-color: transparent;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: fixed;
  z-index: -1;
  .react-player {
    z-index: -1;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100vh;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
      transform: none;
    }
  }

  && video {
    object-fit: cover;
    position: fixed;
    z-index: -1;
  }

  && div {
    posistion: fixed;
    z-index: -1;
  }
`;

const Wrap = styled.div`
  z-index: 5;
  height: 100%;
`;

const White = styled.div`
  background-color: white;
`;

const MissionH2 = styled.h2`
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Second = styled.div`
  width: 100%;
  height: 700px;
  padding-top: 200px;
  padding-left: 10%;
  background-color: white;
  @media (max-width: 768px) {
    padding-left: 5% !important;
    padding-right: 5% !important;
    padding-top: 120px !important;
    height: 500px !important;
    width: 90% !important;
  }
`;

const Title = styled.h3`
  color: #0095f6;
`;

const MissionH1 = styled.h1`
  font-size: 72px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Text = styled.p``;

const Third = styled(Second)`
  padding-right: 10%;
  display: flex;
  height: 500px;
  justify-content: space-between;
  background-color: white;
  @media (max-width: 768px) {
    flex-flow: column !important;
    padding-right: 0;
    padding-bottom: 100px;
    height: 900px;
  }
`;

const Service = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 90% !important;
    margin: auto;
  }
`;

const TitleEng = styled(MissionH1)`
  font-family: jaf-bernina-sans, Hiragino Kaku Gothic Pro, Meiryo,
    sans-serif .c-s;
`;

const TitleJpn = styled(Title)`
  color: black;
`;

const Contents = styled.div`
  padding-top: 80px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
  }
`;

const TeamLinkBtn = styled(ServiceItem)`
  &:hover {
    padding-left: 1em;
    transition: 1s all;
  }
`;

const IDCareerBtn = styled(ServiceItem)`
  &:hover {
    padding-left: 1em;
    transition: 1s all;
  }
  ${TeamLinkBtn}:hover & {
    opacity: 0.7;
  }
`;
