import { Svg, useTheme } from "@cy7/designSystem";
import PropTypes from "prop-types";
import React from "react";

function Logo({ size, ...otherProps }) {
  const theme = useTheme();

  const originalWidth = 245;
  const originalHeight = 267;
  const scaledWidth = (size * originalWidth) / originalHeight;

  return (
    <Svg
      width={scaledWidth}
      height={size}
      viewBox="0 0 245 267"
      {...otherProps}
    >
      <g fill={theme.colors.glasgow} fillRule="evenodd">
        <path d="M60.148 0C25.325 0 0 23.607 0 56.028 0 88.92 24.692 113 58.723 113c17.095 0 35.93-8.656 48.277-22.033L85.79 68.46c-7.281 7.712-17.253 12.59-25.167 12.59-13.296 0-22.951-10.701-22.951-25.495 0-14.637 9.655-25.181 22.95-25.181 8.548 0 18.52 5.823 25.168 14.794L107 20.145C95.604 7.869 77.084 0 60.148 0zM102 174.312V148H4v46.853h34.528v-16.636H58.84L19.741 267h41.468zM205.6 76.48L245 0h-36.26l-21.348 42.753L165.26 0H129l40.184 77.272V111h36.417zM183.405 228C171.99 228 164 235.99 164 247.405 164 259.01 171.99 267 183.405 267 195.01 267 203 259.01 203 247.405 203 235.99 195.01 228 183.405 228z" />
      </g>
    </Svg>
  );
}

Logo.propTypes = {
  size: PropTypes.number
};

Logo.defaultProps = {
  size: 48
};

export { Logo };
