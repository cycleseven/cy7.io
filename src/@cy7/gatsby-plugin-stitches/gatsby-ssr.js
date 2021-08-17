import React from "react";
import { getCssText } from "@cy7/stitches";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
      id="stitches"
    />,
  ]);
};
