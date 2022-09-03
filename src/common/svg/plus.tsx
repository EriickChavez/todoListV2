import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 2V26"
      {...props}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 14H26"
      {...props}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;
