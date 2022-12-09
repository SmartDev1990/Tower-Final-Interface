import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <image width="265" height="265" href="/images/decorations/wallet.png" />
    </Svg>
  );
};

export default Icon;
