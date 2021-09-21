import React, { ReactNode } from "react";
import "animate.css/animate.min.css";
const Fade = require("react-reveal/Fade");

interface PROPS {
  children: ReactNode;
}

const Animation: React.VFC<PROPS> = ({ children }) => {
  return <Fade bottom>{children}</Fade>;
};

export default Animation;
