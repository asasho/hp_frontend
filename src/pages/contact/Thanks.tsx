import React, { VFC } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { CloseToast } from "../../organisms/CloseToast";

export const Thanks: VFC = () => {
  return (
    <CloseToast>
      <First>
        <h1 style={{ color: "white" }}>Contact</h1>
        <h2 style={{ color: "white" }}>お問い合わせ</h2>
      </First>
      <Wrapper>
        <h2>お問い合わせいただきありがとうございます。</h2>
        <p>
          3営業日以内に担当者よりお電話、もしくはメールにてご連絡させていただきます。
          <br />
          お問い合わせの内容によっては返答いたしかねますのでご了承お願いいたします。
          <br />
          今後とも、しゃんと株式会社をよろしくお願いいたします。 　
        </p>
        <Button
          text="トップページに戻る"
          linkTo="/"
          linkToPath="/"
          background="#0095f6"
          color="white"
        ></Button>
      </Wrapper>
    </CloseToast>
  );
};

const Wrapper = styled.div`
  padding: 200px 15% 0 15%;
  text-align: center;
  height: 100vh;
`;

const First = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #0095f6;
  padding: 200px 0 0 0;
  text-align: center;
`;
