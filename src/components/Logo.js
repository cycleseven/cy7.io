import PropTypes from "prop-types";
import React from "react";
import { colours } from "designPrimitives";

function Logo({ size, ...otherProps }) {
  return (
    <svg height={size} viewBox="0 0 300 300" width={size} {...otherProps}>
      <g fill={colours.obsidian} fillRule="evenodd">
        <path d="M77.01 5.106c-38.257 0-66.08 26.222-66.08 62.234 0 36.536 27.128 63.282 64.516 63.282 18.78 0 39.474-9.614 53.038-24.474L105.182 81.15c-8 8.566-18.955 13.985-27.65 13.985-14.607 0-25.215-11.887-25.215-28.32 0-16.257 10.608-27.97 25.215-27.97 9.39 0 20.346 6.468 27.65 16.433l23.302-27.796C115.964 13.847 95.618 5.106 77.011 5.106zM124.92 199.66v-27.095H24.232v48.248h35.475v-17.132h20.868l-40.17 91.428H83.01zM225.415 252.53c-12.594 0-21.41 8.838-21.41 21.463 0 12.836 8.816 21.674 21.41 21.674 12.804 0 21.62-8.838 21.62-21.674 0-12.625-8.816-21.463-21.62-21.463zM245.838 90.314l43.648-84.435h-40.17l-23.65 47.2-24.52-47.2h-40.17l44.518 85.309v37.235h40.344z" />
      </g>
    </svg>
  );
}

Logo.propTypes = {
  size: PropTypes.number
};

Logo.defaultProps = {
  size: 100
};

export { Logo };
