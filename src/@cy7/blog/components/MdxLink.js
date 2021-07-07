import { Link } from "@cy7/gatsby";
import PropTypes from "prop-types";
import React from "react";

function MdxLink({ href, ...props }) {
  if (href.startsWith("/")) {
    return <Link to={href} {...props} type="internal" />;
  }

  return <Link to={href} {...props} type="external" />;
}

MdxLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default MdxLink;
