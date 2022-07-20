import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 1.33334L10.06 5.50667L14.6667 6.18L11.3333 9.42667L12.12 14.0133L8 11.8467L3.88 14.0133L4.66666 9.42667L1.33333 6.18L5.93999 5.50667L8 1.33334Z"
      stroke="#272727"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;
