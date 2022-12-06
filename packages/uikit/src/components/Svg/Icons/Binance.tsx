import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
	return (
		<Svg viewBox="0 0 96 96" {...props}>
			<image width="96" height="96" href="/images/tokens/0xA5d20d84deeEd3850a7538e993E3b2592bf997A0.png" />
		</Svg>
	);
};

export default Icon;
