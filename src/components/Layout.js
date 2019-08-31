import React from "react";
import PropTypes from "prop-types";

import DarkPage from "./DarkPage";
import Meta from "./Meta";

/**
 * Common layout for all pages.
 */
function Layout({ children }) {
  return (
    <DarkPage>
      <Meta />
      {children}
    </DarkPage>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
