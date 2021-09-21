import React, { VFC } from "react";
import styled from "styled-components";
import { CloseToast } from "../../organisms/CloseToast";
const HubspotForm = require("react-hubspot-form");

export const Home: VFC = () => {
  return (
    <div>
      <CloseToast>
        <First>
          <h1 style={{ color: "white" }}>Contact</h1>
          <h2 style={{ color: "white" }}>お問い合わせ</h2>
        </First>
        <Wrapper>
          <Text>
            <h3>お問い合わせは以下のフォームよりご連絡ください。</h3>
          </Text>
          <HubspotForm
            portalId="20085275"
            formId="99706d7d-4632-4c72-a010-4b244e484fc5"
            onSubmit={() => console.log("Submit!")}
            onReady={(form: any) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
        </Wrapper>
      </CloseToast>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 200px 15% 0 15%;
  height: 100vh;
`;

const Text = styled.div`
  text-align: left;
`;

const First = styled.div`
  width: 100%;
  height: 200px;
  background-color: #0095f6;
  padding: 150px 0 0 0;
  text-align: center;
`;
