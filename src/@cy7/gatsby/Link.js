import { Link as Cy7Link } from "@cy7/designSystem";
import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

function Link({ type, to, ...props }) {
  switch (type) {
    case "external":
      return (
        <Cy7Link
          href={to}
          rel="noreferrer noopener"
          target="_blank"
          {...props}
        />
      );
    case "email":
      return <Cy7Link href={`mailto:${to}`} {...props} />;
    default:
      return <Cy7Link as={GatsbyLink} to={to} {...props} />;
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["internal", "external", "email"]),
};

Link.defaultProps = {
  type: "internal",
};

export { Link };
