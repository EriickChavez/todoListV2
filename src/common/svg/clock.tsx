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
      d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
      {...props}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      {...props}
      d="M8 4V8L10.6667 9.33333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;
