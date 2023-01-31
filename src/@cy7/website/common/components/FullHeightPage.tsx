import React, { ComponentProps } from "react";
import { globalCss, styled } from "@cy7/design-system";

const FullHeightContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  minWidth: "300px",
});

// TODO: in the past, these styles were scoped using a .cy7-full-height-page class
//       applied to the <html> element. This would allow <FullHeightPage /> to
//       be mounted and unmounted for different pages depending on their needs.
//
//       In Gatsby v4 the usage of <Helmet /> is discouraged in favour of the
//       Gatsby Head API. So this dynamic behaviour has been removed in favour
//       of static global CSS. This should be revisited if new pages on the site
//       have different needs.
const applyGlobalStyles = globalCss({
  html: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },

  "body, #___gatsby, #gatsby-focus-wrapper": {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
});

type FullHeightPageProps = ComponentProps<typeof FullHeightContainer>;

function FullHeightPage(props: FullHeightPageProps): React.ReactElement {
  applyGlobalStyles();

  return <FullHeightContainer {...props} />;
}

export default FullHeightPage;
