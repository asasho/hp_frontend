import React from "react";
import styled from "styled-components";

interface PROPS {
  image: string;
  alt: string;
}

const HeadImage: React.FC<PROPS> = ({ image, alt }) => {
  return (
    <Wrap>
      <First>
        <img
          src={image}
          alt={alt}
          style={{ height: "100%", maxWidth: "100%" }}
        />
      </First>
    </Wrap>
  );
};

export default HeadImage;

const Wrap = styled.div`
  z-index: -1;
  position: fixed;
`;

const First = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  font-family: jaf-bernina-sans, "Hiragino Kaku Gothic Pro", Meiryo, sans-serif;
  && img {
    height: 100vh !important;
    object-fit: cover;
  }
`;
