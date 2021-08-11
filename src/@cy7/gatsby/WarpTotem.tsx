import { theme, styled, Svg, SvgProps } from "@cy7/design-system";
import { Link } from "@cy7/gatsby";
import React from "react";

const Container = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

/**
 * Header image that takes you home (named as a wee homage to Stardew Valley).
 */
function WarpTotem(props: SvgProps): React.ReactElement {
  return (
    <Container>
      <Link
        aria-label="Return to home"
        title="Return to home"
        to="/"
        variant="borderless"
      >
        <Svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={1.5}
          strokeWidth={1.4}
          viewBox="0 0 254 360"
          width={180}
          {...props}
        >
          <defs>
            <path
              d="M587.385 199.375L562.487 185M555.992 181.25l-18.134-10.47"
              fill="none"
              id="reuse-21"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M555.992 167.5v11.25"
              fill="none"
              id="reuse-20"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M560.322 165l2.165 1.25v16.25"
              fill="none"
              id="reuse-19"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M555.992 167.5l4.33-2.5v16.25"
              fill="none"
              id="reuse-18"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M519.186 166.875v-5l-3.497-2.019"
              fill="none"
              id="reuse-17"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M535.424 156.25v7.5"
              fill="none"
              id="reuse-16"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M555.992 181.25l-18.134-10.47"
              fill="none"
              id="reuse-15"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M587.385 199.375L562.487 185"
              fill="none"
              id="reuse-14"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M555.992 167.5l4.33-2.5v16.25M560.322 165l2.165 1.25v16.25M555.992 167.5v11.25"
              fill="none"
              id="reuse-13"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M519.186 166.875v-5l-5.413-3.125"
              fill="none"
              id="reuse-12"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M535.424 156.25v20"
              fill="none"
              id="reuse-11"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M587.385 199.375L562.487 185M555.992 181.25l-20.568-11.875"
              fill="none"
              id="reuse-10"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M594.963 201.25v2.5l-59.539-34.375v-2.5"
              fill="none"
              id="reuse-9"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M519.186 166.875v-5l-7.578-4.375v5"
              fill="none"
              id="reuse-8"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M594.963 190.625L587.385 195v11.25"
              fill="none"
              id="reuse-7"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M535.525 104.317l59.539 34.375v20l-59.539-34.375"
              fill="none"
              id="reuse-6"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M519.186 166.875v-5l-7.578-4.375"
              fill="none"
              id="reuse-5"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M340.998 178.056l-.027 7.509M337.726 179.945v3.747"
              fill="none"
              id="reuse-4"
              stroke={theme.colors.glasgow.value}
            />
            <path
              d="M340.971 178.072l-3.245 1.873-25.957-14.986M311.769 161.25V165M311.769 164.959l3.245-1.873M311.769 161.212l1.85-1.068"
              fill="none"
              id="reuse-3"
              stroke={theme.colors.glasgow.value}
              strokeWidth={1.05}
            />
            <path
              d="M315.014 163.086c4.586-2.646 3.244-9.367 3.244-9.367l25.957 14.986s1.562 6.581-3.277 9.386M318.258 153.719l-3.244 1.873s.156 3.582-1.395 4.552M315.014 163.086l25.924 15.005"
              fill="none"
              id="reuse-2"
              stroke={theme.colors.glasgow.value}
              strokeWidth={1.05}
            />
            <path
              d="M536.506 425c0 4.393 5.488 4.393 5.488 0v-42.769c0-4.642-5.488-4.642-5.488 0V425z"
              fill="none"
              id="reuse-1"
              stroke={theme.colors.glasgow.value}
              strokeWidth={2.6}
            />
            <path
              d="M536.506 417.581c0 10.49 5.488 10.49 5.488 0v-23.952c0-10.723-5.488-10.723-5.488 0v23.952z"
              fill="none"
              id="reuse-0"
              stroke={theme.colors.glasgow.value}
              strokeWidth={2.9}
            />
          </defs>
          <g transform="matrix(.81619 0 0 .46797 -261.531 0)">
            <path d="M320.429 0h309.402v768.633H320.429z" fill="none" />
            <clipPath id="prefix__a">
              <path d="M320.429 0h309.402v768.633H320.429z" />
            </clipPath>
            <g clipPath="url(#prefix__a)">
              <circle
                cx={499.389}
                cy={170}
                fill={theme.colors.glasgow.value}
                r={67.36}
                transform="matrix(1.26227 0 0 2.20152 -160.577 -59.928)"
              />
              <g transform="matrix(1.18798 0 0 1.03698 -94.656 0)">
                <clipPath id="prefix__b">
                  <path d="M629.831-1.123H320.429v770.179h309.402V-1.123zM475.13 146.883c43.157 0 78.196 70.008 78.196 156.239 0 86.23-35.039 156.238-78.196 156.238s-78.195-70.008-78.195-156.238c0-86.231 35.038-156.239 78.195-156.239z" />
                </clipPath>
                <g clipPath="url(#prefix__b)">
                  <path
                    d="M350.206 0v513.458l129.358 149.226 4.466-5.152 26.904 31.036v40.863l8.974 10.353 35.575-41.038.146-61.654 9.228-10.645 8.4 9.689 35.948-40.6V0H350.206z"
                    fill={theme.colors.candyfloss.value}
                  />
                  <path
                    d="M554.109 435l-9 5.196V470l-34.583 20-8.661-5v-20l-25.98-15-4.331 2.5L345.981 380V0M510.526 490V0"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -269.949)"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 223.19 209.398)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 428.041)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 402.629)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 223.19 96.06)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 314.703)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 289.29)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 223.19 -17.525)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 201.118)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 223.19 175.706)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 276.672 -398.629)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 276.672 -179.986)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 232.014 137.15)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 355.793)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 330.381)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 232.014 23.812)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 242.456)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 217.043)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 232.014 -89.773)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 128.87)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 232.014 103.458)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 240.945 44.419)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 263.062)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 237.65)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 240.945 -68.92)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 149.724)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 124.312)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 1.06917 240.945 -182.504)"
                    xlinkHref="#reuse-1"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 36.139)"
                    xlinkHref="#reuse-0"
                  />
                  <use
                    transform="matrix(.567 0 0 .41725 240.945 10.727)"
                    xlinkHref="#reuse-0"
                  />
                  <path
                    d="M549.439 437.696V-2.5"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -11.084 -264.797)"
                  />
                  <path
                    d="M554.109 435l8 5 35-20V2"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -269.949)"
                  />
                  <path
                    d="M554.109 436.88v-437"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -273.823)"
                  />
                  <path
                    d="M562.109 440V0"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -269.949)"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1059.494)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1059.494)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1059.494)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1007.977)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1007.977)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 1007.977)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 956.46)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 956.46)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 956.46)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 904.942)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 904.942)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 904.942)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 853.427)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 853.427)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 853.427)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 801.91)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 801.91)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 801.91)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 750.392)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 750.392)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 750.392)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 698.875)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 698.875)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 698.875)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 647.358)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 647.358)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 647.358)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 595.84)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 595.84)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 595.84)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 544.323)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 544.323)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 544.323)"
                    xlinkHref="#reuse-4"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 492.806)"
                    xlinkHref="#reuse-2"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 492.806)"
                    xlinkHref="#reuse-3"
                  />
                  <use
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 492.806)"
                    xlinkHref="#reuse-4"
                  />
                  <path
                    d="M315.014 163.086c4.586-2.646 3.244-9.367 3.244-9.367l25.957 14.986s1.562 6.581-3.277 9.386M318.258 153.719l-3.244 1.873s.156 3.582-1.395 4.552M311.769 161.25V165M311.769 161.212l1.85-1.068"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(-1.37637 0 0 -2.7501 949.02 441.289)"
                  />
                  <path
                    d="M475.885 425v25"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -269.949)"
                  />
                  <path
                    d="M471.554 422.5v30"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(1.03134 0 0 2.06069 -6.618 -269.949)"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 703.604)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 810.623)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 819.639)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 810.623)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 737.21)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 746.227)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 775.85)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 784.864)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 791.304)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 791.304)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 777.017)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 884.035)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 893.05)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 893.05)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 884.035)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 810.623)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 819.639)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 849.26)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 858.277)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 864.716)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 864.716)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 864.716)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 864.716)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 755.121)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 862.14)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 871.156)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 862.14)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 788.728)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 797.744)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 827.366)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 836.381)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 842.82)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 842.82)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 828.534)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 935.552)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 944.567)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 944.567)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 935.552)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 862.14)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 871.156)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 900.778)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 909.794)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 916.233)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 916.233)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 916.233)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 916.233)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 652.087)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 759.106)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 768.122)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 759.106)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 685.694)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 694.71)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 724.332)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 733.347)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 739.787)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 739.787)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 725.5)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 832.518)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 841.533)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 841.533)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 832.518)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 759.106)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 768.122)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 797.744)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 806.76)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 813.2)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 813.2)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 813.2)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 813.2)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 600.57)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 707.589)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 716.605)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 707.589)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 634.177)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 643.193)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 672.815)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 681.83)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 688.27)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 688.27)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 673.983)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 781.001)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 790.016)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 790.016)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 781.001)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 707.589)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 716.605)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 746.227)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 755.243)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 761.682)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 761.682)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 761.682)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 761.682)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 549.053)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 656.072)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 665.088)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 656.072)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 582.66)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 591.676)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 621.298)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 630.313)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 636.753)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 636.753)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 622.466)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 729.484)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 738.499)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 738.499)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 729.484)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 656.072)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 665.088)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 694.71)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 703.726)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 710.165)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 710.165)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 710.165)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 710.165)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 497.536)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 604.555)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 613.57)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 604.555)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 531.143)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 540.159)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 569.781)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 578.796)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 585.236)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 585.236)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 570.949)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 677.967)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 686.982)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 686.982)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 677.967)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 604.555)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 613.57)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 643.193)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 652.209)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 658.648)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 658.648)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 658.648)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 658.648)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 446.02)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 553.038)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 562.054)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 553.038)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 479.626)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 488.642)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 518.264)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 527.28)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 533.719)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 533.719)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 519.432)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 626.45)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 635.465)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 635.465)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 626.45)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 553.038)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 562.054)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 591.676)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 600.692)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 607.131)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 607.131)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 607.131)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 607.131)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 394.502)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 501.52)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 510.537)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 501.52)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 428.109)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 437.125)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 466.747)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 475.762)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 482.202)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 482.202)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 467.915)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 574.933)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 583.948)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 583.948)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 574.933)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 501.52)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 510.537)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 540.159)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 549.175)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 555.614)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 555.614)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 555.614)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 555.614)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 342.985)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 450.004)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 459.02)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 450.004)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 376.592)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 385.608)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 415.23)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 424.245)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 430.685)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 430.685)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 416.398)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 523.416)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 532.43)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 532.43)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 523.416)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 450.004)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 459.02)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 488.642)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 497.658)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 504.097)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 504.097)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 504.097)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 504.097)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 291.468)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 398.487)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 407.503)"
                    xlinkHref="#reuse-10"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 398.487)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 902.41 325.075)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 910.225 334.09)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 935.904 363.713)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 943.72 372.728)"
                    xlinkHref="#reuse-12"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 379.168)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 379.168)"
                    xlinkHref="#reuse-13"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 364.881)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 471.9)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 480.914)"
                    xlinkHref="#reuse-14"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 480.914)"
                    xlinkHref="#reuse-15"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 471.9)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 398.487)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 407.503)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 437.125)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 446.14)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 452.58)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 452.58)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 452.58)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 452.58)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.152 239.951)"
                    xlinkHref="#reuse-6"
                  />
                  <path
                    d="M555.992 181.25l-20.568-11.875"
                    fill="none"
                    stroke={theme.colors.glasgow.value}
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 355.986)"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 346.97)"
                    xlinkHref="#reuse-11"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 313.364)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 420.382)"
                    xlinkHref="#reuse-7"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 429.397)"
                    xlinkHref="#reuse-21"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 420.382)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 966.048 346.97)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 973.863 355.986)"
                    xlinkHref="#reuse-8"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 385.608)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 394.624)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 401.063)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 401.063)"
                    xlinkHref="#reuse-18"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 401.063)"
                    xlinkHref="#reuse-19"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 401.063)"
                    xlinkHref="#reuse-20"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.794 261.847)"
                    xlinkHref="#reuse-6"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 377.88)"
                    xlinkHref="#reuse-21"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 368.865)"
                    xlinkHref="#reuse-16"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 999.542 334.09)"
                    xlinkHref="#reuse-5"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1007.357 343.107)"
                    xlinkHref="#reuse-17"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 349.546)"
                    xlinkHref="#reuse-9"
                  />
                  <use
                    transform="matrix(-1.03134 0 0 -2.06069 1029.69 349.546)"
                    xlinkHref="#reuse-13"
                  />
                </g>
              </g>
              <path
                d="M449.992 242.836c-11.056 0-19.096 13.072-19.096 31.024 0 18.214 7.84 31.548 18.644 31.548 5.427 0 11.408-4.793 15.327-12.2l-6.734-12.463c-2.311 4.27-5.477 6.972-7.99 6.972-4.221 0-7.287-5.926-7.287-14.118 0-8.105 3.066-13.943 7.287-13.943 2.714 0 5.88 3.224 7.99 8.191l6.734-13.856c-3.618-6.798-9.498-11.155-14.875-11.155zM463.28 342.724v-14.325H432.8v25.508h10.74v-9.058h6.316l-12.16 48.336h12.897l12.687-50.461zM496.172 285.186l12.509-42.35h-11.512l-6.778 23.674-7.027-23.674h-11.512l12.758 42.789V304.3h11.562v-19.114zM489.125 371.59c-3.624 0-6.16 4.424-6.16 10.745 0 6.426 2.536 10.85 6.16 10.85 3.685 0 6.221-4.424 6.221-10.85 0-6.321-2.536-10.745-6.22-10.745z"
                fill={theme.colors.candyfloss.value}
              />
            </g>
          </g>
        </Svg>
      </Link>
    </Container>
  );
}

export { WarpTotem };
