import PropTypes from "prop-types";
import React from "react";
import { Svg, useTheme } from "@cy7/designSystem";

const variants = {
  plain: "plain",
  circular: "circular"
};

function Logo({ size, variant, ...otherProps }) {
  switch (variant) {
    case variants.circular:
      return <CircularLogo size={size} {...otherProps} />;
    default:
      return <PlainLogo size={size} {...otherProps} />;
  }
}

Logo.propTypes = {
  size: PropTypes.number,
  variant: PropTypes.oneOf(Object.values(variants))
};

Logo.defaultProps = {
  size: 100,
  variant: variants.plain
};

/** Variants */

// Props already documented in public parent component
// eslint-disable-next-line react/prop-types
function CircularLogo({ size, ...otherProps }) {
  const theme = useTheme();

  return (
    <Svg height={size} viewBox="0 0 256 256" width={size} {...otherProps}>
      <g fill="none" fillRule="evenodd">
        <circle cx={128} cy={128} fill={theme.colors.paper} r={128} />
        <circle cx={128} cy={128} fill={theme.colors.candyfloss} r={117} />
        <g fill={theme.colors.glasgow} fillRule="nonzero">
          <path d="M100.332 71C84.615 71 73 81.883 73 96.802 73 111.912 84.347 123 99.74 123c7.742 0 16.189-3.885 21.768-9.965L123 111.41l-11.994-12.8-1.66 1.768c-2.593 2.763-6.163 4.547-8.816 4.547-4.22 0-7.254-3.386-7.254-8.32 0-4.858 3.023-8.19 7.254-8.19 2.788 0 6.287 2.065 8.638 5.257L110.884 96l12.043-14.289-1.424-1.542c-5.16-5.59-13.464-9.169-21.17-9.169zm.431 4.707c5.458.113 11.31 2.37 15.505 5.89l.396.343-5.677 6.735-.284-.28c-2.979-2.893-6.718-4.681-10.173-4.681-6.85 0-11.851 5.51-11.851 12.89 0 7.444 4.997 13.023 11.85 13.023l.366-.006c3.185-.112 6.78-1.67 9.79-4.138l.22-.185 5.69 6.072-.065.06c-4.665 4.222-11.043 6.868-16.79 6.868-12.899 0-22.142-9.033-22.142-21.496 0-12.226 9.47-21.1 22.734-21.1l.431.005zM121 133H76v24.13h18.308L81.225 187h22.162L121 146.763V133zm-4.645 4.73v8.026l-15.983 36.513h-11.99l16.101-36.758H90.22l-.001 6.887h-9.575V137.73h35.712zm-19.03 12.51l-2.463 5.625v-5.624h2.464zM158.46 166c-6.06 0-10.46 4.383-10.46 10.46 0 6.142 4.384 10.54 10.46 10.54 6.14 0 10.54-4.383 10.54-10.54 0-6.093-4.414-10.46-10.54-10.46zm0 4.696c3.59 0 5.905 2.29 5.905 5.764 0 3.546-2.307 5.844-5.905 5.844-3.526 0-5.825-2.306-5.825-5.844 0-3.466 2.307-5.764 5.825-5.764zM149.696 71H129l18.602 35.166V122h20.145v-16.17L186 71h-20.703l-7.66 15.08-7.94-15.08zm18.478 4.686h10.077l-15.192 28.991v12.636H152.29v-12.31l-15.508-29.317h10.082l10.848 20.598 10.461-20.598z" />
        </g>
      </g>
    </Svg>
  );
}
// Props already documented in public parent component
// eslint-disable-next-line react/prop-types
function PlainLogo({ size, ...otherProps }) {
  const theme = useTheme();

  return (
    <Svg height={size} viewBox="0 0 300 300" width={size} {...otherProps}>
      <g fill={theme.palettes.paper.header} fillRule="evenodd">
        <path d="M77.01 5.106c-38.257 0-66.08 26.222-66.08 62.234 0 36.536 27.128 63.282 64.516 63.282 18.78 0 39.474-9.614 53.038-24.474L105.182 81.15c-8 8.566-18.955 13.985-27.65 13.985-14.607 0-25.215-11.887-25.215-28.32 0-16.257 10.608-27.97 25.215-27.97 9.39 0 20.346 6.468 27.65 16.433l23.302-27.796C115.964 13.847 95.618 5.106 77.011 5.106zM124.92 199.66v-27.095H24.232v48.248h35.475v-17.132h20.868l-40.17 91.428H83.01zM225.415 252.53c-12.594 0-21.41 8.838-21.41 21.463 0 12.836 8.816 21.674 21.41 21.674 12.804 0 21.62-8.838 21.62-21.674 0-12.625-8.816-21.463-21.62-21.463zM245.838 90.314l43.648-84.435h-40.17l-23.65 47.2-24.52-47.2h-40.17l44.518 85.309v37.235h40.344z" />
      </g>
    </Svg>
  );
}

export { Logo };
