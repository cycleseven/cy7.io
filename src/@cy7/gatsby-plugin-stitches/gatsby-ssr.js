import React from "react";
import { getCssText } from "@cy7/design-system";

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
