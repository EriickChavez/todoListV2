import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-more-vertical"
    {...props}
    fill="none"
  >
    <Circle cx={12} cy={12} r={1} />
    <Circle cx={12} cy={5} r={1} />
    <Circle cx={12} cy={19} r={1} />
  </Svg>
);

export default SVGComponent;
