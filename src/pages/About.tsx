import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MediaQuery from "react-responsive";
import People1 from "../images/People1.jpg";
import People2 from "../images/People2.png";
import Corporate from "../images/Corporation.jpeg";
import Member from "../molecules/modal/Member";
import { CloseToast } from "../organisms/CloseToast";
import Head from "../molecules/Head";
import HeadImage from "../molecules/HeadImage";
import Value from "../molecules/about/ValueItem";
import Value1 from "../images/CoreValue1.png";
import Value2 from "../images/CoreValue2.jpeg";
import Value3 from "../images/CoreValue3.jpeg";
import MemberItem from "../molecules/about/MemberItem";
import FadeBottom from "../molecules/FadeBottom";

const About: React.FC = () => {
  return (
    <CloseToast>
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>企業情報｜しゃんと株式会社</title>
        </Helmet>
        <HeadImage image={Corporate} alt="corporate" />
        <Wrap>
          <Head title={"Corporate"} text={"企業"} />
          <White>
            <Second>
              <FadeBottom>
                <MissionH1>
                  テクノロジーで
                  <br />
                  つながりを創造する
                </MissionH1>
              </FadeBottom>
              <FadeBottom>
                <MissionP>・our mission</MissionP>
              </FadeBottom>
              <FadeBottom>
                <Content>
                  しゃんと株式会社はテクノロジーでつながりを創造する/We create
                  <br />
                  connect through
                  technologyのためにビジネスマッチング、就活サービス
                  <br />
                  を提供しています。
                </Content>
              </FadeBottom>

              <FadeBottom>
                <Content>
                  これまでテクノロジーが使われてこなかった領域にテクノロジーを持
                  <br />
                  ち込むことで、今まで創造できなかったつながりを創る。
                </Content>
              </FadeBottom>

              <FadeBottom>
                <Content>
                  企業、人のつながりをテクノロジーによって再構成する、新しいつな
                  <br />
                  がりを創造していく、
                  <br />
                  それがしゃんと株式会社の使命です。
                </Content>
              </FadeBottom>
            </Second>
            <Third>
              <FadeBottom>
                <Text>
                  SHANT.INC
                  <br />3 CORE VALUE
                </Text>
              </FadeBottom>
              <MediaQuery minWidth={769}>
                <FadeBottom>
                  <Values>
                    {values.map((value) => (
                      <Value
                        key={value.id}
                        image={value.image}
                        title={value.title}
                        content={value.content}
                      ></Value>
                    ))}
                  </Values>
                </FadeBottom>
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                <SliderValues {...settings}>
                  {values.map((value) => (
                    <FadeBottom>
                      <Value
                        key={value.id}
                        image={value.image}
                        title={value.title}
                        content={value.content}
                      ></Value>
                    </FadeBottom>
                  ))}
                </SliderValues>
              </MediaQuery>
            </Third>
            <People>
              <MemberTitle>
                <FadeBottom>
                  <MemberEng>
                    Board
                    <br />
                    Members
                  </MemberEng>
                </FadeBottom>
                <FadeBottom>
                  <MemberJpn>経営陣ご紹介</MemberJpn>
                </FadeBottom>
              </MemberTitle>
              <Members>
                <MemberItem
                  image={People1}
                  jpnName="代表取締役社長　池本克之"
                  enName="KATSUYUKI IKEMOTO"
                />
                <MemberItem
                  image={People2}
                  jpnName="マーケティング責任者　山下彰雄"
                  enName="AKIO YAMASHITA"
                />
              </Members>
            </People>
            <Access>
              <FadeBottom>
                <Text>Access</Text>
              </FadeBottom>
              <Right>
                <FadeBottom>
                  <Name>しゃんと株式会社</Name>
                </FadeBottom>

                <FadeBottom>
                  <AddressName>
                    〒150-0013
                    <br />
                    東京都渋谷区恵比寿1-24-15
                    <br />
                    シエルブルーEAST6F
                  </AddressName>
                </FadeBottom>
              </Right>
            </Access>
            <Member />
          </White>
        </Wrap>
      </Wrapper>
    </CloseToast>
  );
};

const settings = {
  rows: 1,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  swwipeToSlide: true,
};

const values = [
  {
    id: 1,
    image: Value1,
    title: "革新と創造",
    content:
      "世の中にインパクトを与えるイノベーションを起こすために常に私たちは創造し続けます。",
  },
  {
    id: 2,
    image: Value2,
    title: "スピードを重視し、行動する",
    content:
      "私たちはスピードを重視し、まずは行動。失敗したらそこから学び続けます。",
  },
  {
    id: 3,
    image: Value3,
    title: "学び続け、自分を向上させる",
    content:
      "私たちはスピードを重視し、まずは行動。失敗したらそこから学び続けます。",
  },
];

export default About;

const Wrapper = styled.div`
  overflow-x: hidden !important;
`;

const Wrap = styled.div`
  z-index: 5;
`;

const White = styled.div`
  background-color: white;
`;

const Second = styled.div`
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  height: 900px;
  padding-top: 200px;
  padding-left: 10%;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-top: 120px;
    padding-left: 20px;
    height: 700px;
  }
`;

const MissionP = styled.h3``;

const Content = styled.h2`
  padding-left: 200px;
  font-weight: 500;
  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 14px;
    width: 92%;
  }
`;

const MissionH1 = styled.h2`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Third = styled(Second)`
  padding-top: 50px;
  padding-right: 10%;
  z-index: 1;
  background-color: white;
  height: 1000px;
  @media (max-width: 768px) {
    padding-left: 0;
    height: 700px;
  }
`;

const Text = styled(MissionH1)`
  padding: 0 10%;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const Values = styled.div`
  display: flex;
  justify-content: center !important;
`;

const SliderValues = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: space-between !important;

  .slick-slide {
    margin: 20px;
  }
  .slick-track {
    display: flex !important;
  }
`;

const People = styled(Second)`
  display: flex;
  height: 600px;
  flex-flow: row-reverse !important;
  @media (max-width: 1170px) {
    flex-direction: column !important;
    height: 1400px;
  }
`;

const Members = styled.div`
  display: flex;
  width: 60%;
  @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap !important;
    width: 100%;
  }
`;

const MemberTitle = styled.div`
  width: 40%;
  padding-left: 10%;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const MemberEng = styled(Text)``;

const MemberJpn = styled(MissionP)`
　 padding-left: 40px;
`;

const Access = styled(Third)`
  display: flex;
  height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-right: 0;
    padding-left: 0;
    height: 300px;
  }
`;

const Right = styled.div`
  margin-left: 100px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Name = styled.h2`
  text-align: center;
`;

const AddressName = styled.p`
  text-align: center;
`;
