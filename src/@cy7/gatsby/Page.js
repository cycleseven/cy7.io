import PropTypes from "prop-types";
import React from "react";
import { Footer } from "@cy7/gatsby/Footer";

function Page({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export { Page };
