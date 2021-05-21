import React from "react";
import { getCssString } from "@cy7/stitches";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
      id="stitches"
    />,
  ]);
};
