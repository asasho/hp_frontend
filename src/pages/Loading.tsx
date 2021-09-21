import React, { useState } from "react";
import { css } from "@emotion/css";
import ClipLoader from "react-spinners/ClipLoader";

const override = css``;

const Loading = () => {
  const [load, setLoad] = useState(true);
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={150} color={"#123abc"} loading={load} />
    </div>
  );
};

export default Loading;
