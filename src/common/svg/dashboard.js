import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.9444 0H9.53704V5.33333H24.9444V0ZM5.27778 0.222185H0V5.49996H5.27778V0.222185ZM0 9.66661H5.27778V14.9444H0V9.66661ZM17.2222 9.66661H9.44443V14.9444H17.2222V9.66661ZM0 19.1111H5.27778V24.3889H0V19.1111ZM25 24.3889V19.1111H9.44443V24.3889H25Z"
      fill="#F76C6A"
    />
  </Svg>
);

export default SVGComponent;
